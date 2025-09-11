import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { FORCES_OF_GOOD_DATA } from '../data/lotrData.js';
import { FORCES_OF_EVIL_DATA } from '../data/lotrData.js';
import UnitCard from '../components/UnitCard.js';
import SelectedArmyPanel from '../components/SelectedArmyPanel.js';
import UnitOptionsModal from '../components/UnitOptionsModal.js';
import SelectedUnitDetailModal from '../components/SelectedUnitDetailModal.js';
// Fix: Import enums from the types file to ensure strong typing and remove local definitions.
import { ArmyAlignment, UnitType } from '../types.js';

const ALL_FACTIONS_ID = '__ALL__';

const unitTypeSortOrder = {
  [UnitType.HERO_OF_LEGEND]: 1,
  [UnitType.HERO_OF_VALOUR]: 2,
  [UnitType.HERO_OF_FORTITUDE]: 3,
  [UnitType.MINOR_HERO]: 4,
  [UnitType.INDEPENDENT_HERO]: 5,
  [UnitType.HERO]: 6, 
  [UnitType.WARRIOR]: 7,
  [UnitType.MONSTER]: 8,
  [UnitType.SIEGE_ENGINE]: 9,
};

const bowKeywords = ['bow', 'elf bow', 'longbow', 'short bow', 'orc bow', 'uruk-hai bow', 'crossbow', 'blowpipe'];
const BOW_LIMIT_PERCENTAGE = 33;

const generateItemGroupId = (unitId, options) => {
  const sortedOptionIds = options.map(opt => opt.id).sort().join(',');
  return `${unitId}-${sortedOptionIds}`;
};

const ForcesPage = () => {
  const { alignment: alignmentParam } = useParams();
  
  const alignment = useMemo(() => {
    if (alignmentParam?.toLowerCase() === 'good') return ArmyAlignment.GOOD;
    if (alignmentParam?.toLowerCase() === 'evil') return ArmyAlignment.EVIL;
    return null; 
  }, [alignmentParam]);

  const allPossibleArmies = useMemo(() => {
    if (alignment === ArmyAlignment.GOOD) return FORCES_OF_GOOD_DATA;
    if (alignment === ArmyAlignment.EVIL) return FORCES_OF_EVIL_DATA;
    return [];
  }, [alignment]);
  
  const [selectedArmyListId, setSelectedArmyListId] = useState(
    allPossibleArmies.length > 0 ? ALL_FACTIONS_ID : null
  );
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentArmyBuild, setCurrentArmyBuild] = useState([]);
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(false);
  const [unitToConfigure, setUnitToConfigure] = useState(null);
  const [initialQuantityForModal, setInitialQuantityForModal] = useState(0);

  const [selectedUnitTypeFilter, setSelectedUnitTypeFilter] = useState('All');
  const [selectedKeywordFilters, setSelectedKeywordFilters] = useState([]);
  const [isKeywordDropdownOpen, setIsKeywordDropdownOpen] = useState(false);
  const keywordFilterRef = useRef(null);

  const [detailedUnitGroup, setDetailedUnitGroup] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    setCurrentArmyBuild([]);
    setSelectedArmyListId(allPossibleArmies.length > 0 ? ALL_FACTIONS_ID : null);
    setSelectedUnitTypeFilter('All');
    setSelectedKeywordFilters([]);
    setSearchTerm('');
  }, [alignment, allPossibleArmies]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (keywordFilterRef.current && !keywordFilterRef.current.contains(event.target)) {
        setIsKeywordDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleArmyListChange = (event) => {
    const newId = event.target.value || null;
    setSelectedArmyListId(newId);
    setSelectedUnitTypeFilter('All');
    setSelectedKeywordFilters([]);
    setSearchTerm('');
  };

  const allKeywordsForSelectedArmy = useMemo(() => {
    const keywordsSet = new Set();
    const armiesToConsider = selectedArmyListId === ALL_FACTIONS_ID 
      ? allPossibleArmies
      : allPossibleArmies.filter(a => a.id === selectedArmyListId);

    armiesToConsider.forEach(army => {
      army.units.forEach(unit => {
        unit.keywords?.forEach(kw => keywordsSet.add(kw));
      });
    });
    return Array.from(keywordsSet).sort();
  }, [allPossibleArmies, selectedArmyListId]);

  const handleKeywordFilterChange = (keyword) => {
    setSelectedKeywordFilters(prev =>
      prev.includes(keyword)
        ? prev.filter(kw => kw !== keyword)
        : [...prev, keyword]
    );
  };

  const unitsToDisplay = useMemo(() => {
    let unitsFromSource = [];

    if (selectedArmyListId === ALL_FACTIONS_ID) {
      unitsFromSource = allPossibleArmies.flatMap(army => army.units);
    } else if (selectedArmyListId) {
      const currentSelectedArmy = allPossibleArmies.find(army => army.id === selectedArmyListId);
      if (currentSelectedArmy) {
        unitsFromSource = currentSelectedArmy.units;
      }
    } else {
      return [];
    }
    
    let filteredUnits = unitsFromSource;

    if (selectedUnitTypeFilter !== 'All') {
      filteredUnits = filteredUnits.filter(unit => unit.type === selectedUnitTypeFilter);
    }

    if (selectedKeywordFilters.length > 0) {
      filteredUnits = filteredUnits.filter(unit =>
        selectedKeywordFilters.every(kwFilter => unit.keywords?.includes(kwFilter))
      );
    }
    
    if (searchTerm) {
      filteredUnits = filteredUnits.filter(unit =>
        unit.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filteredUnits.filter(u => !u.isPlaceholder);
  }, [allPossibleArmies, selectedArmyListId, searchTerm, selectedUnitTypeFilter, selectedKeywordFilters]);

  const currentSelectedArmyDetails = useMemo(() => {
    if (!selectedArmyListId || selectedArmyListId === ALL_FACTIONS_ID) return null;
    return allPossibleArmies.find(a => a.id === selectedArmyListId) || null;
  }, [allPossibleArmies, selectedArmyListId]);
  
  const factionDisplayName = useMemo(() => {
    if (selectedArmyListId === ALL_FACTIONS_ID) return 'All Factions';
    return currentSelectedArmyDetails?.name || null;
  }, [selectedArmyListId, currentSelectedArmyDetails]);

  const handleAddUnitRequest = useCallback((unit, quantity) => {
    if (quantity <= 0) return;
    if (unit.options && unit.options.length > 0) {
      setUnitToConfigure(unit);
      setInitialQuantityForModal(quantity);
      setIsOptionsModalOpen(true);
    } else {
      const itemGroupId = generateItemGroupId(unit.id, []);
      setCurrentArmyBuild(prevBuild => {
        const existingGroupIndex = prevBuild.findIndex(item => item.itemGroupId === itemGroupId);
        if (existingGroupIndex !== -1) {
          return prevBuild.map((item, index) =>
            index === existingGroupIndex
              ? { ...item, quantity: item.quantity + quantity, totalPoints: item.pointsPerModel * (item.quantity + quantity) }
              : item
          );
        } else {
          const newGroup = {
            itemGroupId,
            unit,
            selectedOptions: [],
            quantity,
            pointsPerModel: unit.points,
            totalPoints: unit.points * quantity,
          };
          return [...prevBuild, newGroup];
        }
      });
    }
  }, []);
  
  const handleAddConfiguredUnit = useCallback((unit, selectedOptions, pointsPerModel, quantity) => {
    if (quantity <= 0) return;
    const itemGroupId = generateItemGroupId(unit.id, selectedOptions);
    setCurrentArmyBuild(prevBuild => {
      const existingGroupIndex = prevBuild.findIndex(item => item.itemGroupId === itemGroupId);
      if (existingGroupIndex !== -1) {
        return prevBuild.map((item, index) =>
          index === existingGroupIndex
            ? { ...item, quantity: item.quantity + quantity, totalPoints: item.pointsPerModel * (item.quantity + quantity) }
            : item
        );
      } else {
        const newGroup = {
          itemGroupId,
          unit,
          selectedOptions,
          quantity,
          pointsPerModel,
          totalPoints: pointsPerModel * quantity,
        };
        return [...prevBuild, newGroup];
      }
    });
    setIsOptionsModalOpen(false);
    setUnitToConfigure(null);
  }, []);

  const handleRemoveItemGroup = useCallback((itemGroupId) => {
    setCurrentArmyBuild(prevBuild => prevBuild.filter(item => item.itemGroupId !== itemGroupId));
  }, []);

  const handleClearArmy = useCallback(() => {
    setCurrentArmyBuild([]);
  }, []);

  const handleViewUnitDetails = useCallback((itemGroupId) => {
    const group = currentArmyBuild.find(g => g.itemGroupId === itemGroupId);
    if (group) {
      setDetailedUnitGroup(group);
      setIsDetailModalOpen(true);
    }
  }, [currentArmyBuild]);

  const handleCloseUnitDetails = useCallback(() => {
    setIsDetailModalOpen(false);
    setDetailedUnitGroup(null);
  }, []);


  const sortedArmyBuild = useMemo(() => {
    return [...currentArmyBuild].sort((a, b) => {
      let comparison = 0;
      comparison = (unitTypeSortOrder[a.unit.type] || 99) - (unitTypeSortOrder[b.unit.type] || 99);
      if (comparison === 0) { 
          comparison = a.unit.name.localeCompare(b.unit.name);
      }
      return comparison; 
    });
  }, [currentArmyBuild]);

  const totalPoints = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => sum + group.totalPoints, 0);
  }, [currentArmyBuild]);

  const totalModels = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => sum + group.quantity, 0);
  }, [currentArmyBuild]);
  
  const totalHeroes = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => {
      const unit = group.unit;
      if (
        unit.type === UnitType.HERO ||
        unit.type === UnitType.INDEPENDENT_HERO ||
        unit.type === UnitType.HERO_OF_LEGEND ||
        unit.type === UnitType.HERO_OF_VALOUR ||
        unit.type === UnitType.HERO_OF_FORTITUDE ||
        unit.type === UnitType.MINOR_HERO
      ) {
        return sum + group.quantity; 
      }
      return sum;
    }, 0);
  }, [currentArmyBuild]);

  const totalWarriors = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => {
      if (group.unit.type === UnitType.WARRIOR) {
        return sum + group.quantity;
      }
      return sum;
    }, 0);
  }, [currentArmyBuild]);

  const bowCount = useMemo(() => {
    return currentArmyBuild.reduce((count, group) => {
      const unit = group.unit;
      const hasBow = unit.wargear?.some(item => bowKeywords.some(kw => item.toLowerCase().includes(kw))) ||
                     group.selectedOptions?.some(opt => bowKeywords.some(kw => opt.name.toLowerCase().includes(kw)));
      return count + (hasBow ? group.quantity : 0);
    }, 0);
  }, [currentArmyBuild]);

  const bowPercentage = useMemo(() => {
    if (totalModels === 0) return 0;
    return parseFloat(((bowCount / totalModels) * 100).toFixed(1));
  }, [bowCount, totalModels]);

  const armyBreakPoint = useMemo(() => {
    return Math.ceil(totalModels / 2);
  }, [totalModels]);

  const totalMight = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => {
      const unit = group.unit;
      if (unit.stats?.might && (
          unit.type === UnitType.HERO || 
          unit.type === UnitType.HERO_OF_LEGEND ||
          unit.type === UnitType.HERO_OF_VALOUR ||
          unit.type === UnitType.HERO_OF_FORTITUDE ||
          unit.type === UnitType.MINOR_HERO ||
          unit.type === UnitType.INDEPENDENT_HERO
          )
        ) {
        return sum + (unit.stats.might * group.quantity); 
      }
      return sum;
    }, 0);
  }, [currentArmyBuild]);

  const totalWill = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => {
      const unit = group.unit;
       if (unit.stats?.will && (
          unit.type === UnitType.HERO || 
          unit.type === UnitType.HERO_OF_LEGEND ||
          unit.type === UnitType.HERO_OF_VALOUR ||
          unit.type === UnitType.HERO_OF_FORTITUDE ||
          unit.type === UnitType.MINOR_HERO ||
          unit.type === UnitType.INDEPENDENT_HERO
          )
        ) {
        return sum + (unit.stats.will * group.quantity);
      }
      return sum;
    }, 0);
  }, [currentArmyBuild]);

  const totalFate = useMemo(() => {
    return currentArmyBuild.reduce((sum, group) => {
      const unit = group.unit;
      if (unit.stats?.fate && (
          unit.type === UnitType.HERO || 
          unit.type === UnitType.HERO_OF_LEGEND ||
          unit.type === UnitType.HERO_OF_VALOUR ||
          unit.type === UnitType.HERO_OF_FORTITUDE ||
          unit.type === UnitType.MINOR_HERO ||
          unit.type === UnitType.INDEPENDENT_HERO
          )
        ) {
        return sum + (unit.stats.fate * group.quantity);
      }
      return sum;
    }, 0);
  }, [currentArmyBuild]);

  const bowLimitWarning = useMemo(() => {
    if (totalModels > 0 && bowPercentage > BOW_LIMIT_PERCENTAGE) {
      return `Warning: Bows exceed ${BOW_LIMIT_PERCENTAGE}% (currently ${bowPercentage}%). Check specific army list rules for bow limits.`;
    }
    return null;
  }, [bowPercentage, totalModels]);

  const noHeroWarning = useMemo(() => {
    if (totalModels > 0 && totalHeroes === 0) {
      return "Warning: Your army currently has no Heroes. Most armies require at least one Hero.";
    }
    return null;
  }, [totalModels, totalHeroes]);

  const warriorLimitInfo = "Note: Ensure warrior counts are within the limits allowed by your Heroes (e.g., 0-6 for Minor Heroes, 0-12 for Heroes of Fortitude/Valour, etc.). Refer to rulebook for specific Hero warband sizes.";

  if (!alignment) { 
    return <p className="text-center text-xl text-red-500">Invalid alignment specified in URL.</p>;
  }

  if (!allPossibleArmies.length && alignment) {
    return <p className="text-center text-xl text-amber-600">No armies available for this alignment: {alignment}.</p>;
  }

  return (
    <div className=" -mx-4 sm:-mx-6 lg:-mx-8 -my-4 sm:-my-6 lg:-my-8 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-2/3 bg-stone-100/95 p-6 rounded-lg shadow-xl border border-stone-400">
          <h1 className="text-4xl font-bold text-amber-900 mb-6 font-['Cinzel',serif]">
            Forces of {alignment}
          </h1>
          
          <div className="mb-6 p-4 bg-stone-200/70 rounded-md border border-stone-400">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label htmlFor="army-list-select" className="block text-lg font-semibold text-amber-800 mb-1">
                  Factions:
                </label>
                <select
                  id="army-list-select"
                  value={selectedArmyListId || ''} 
                  onChange={handleArmyListChange}
                  className="w-full p-3 bg-stone-50 border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600"
                >
                  {allPossibleArmies.length === 0 && <option value="">No army lists available</option>}
                  {allPossibleArmies.length > 0 && (
                      <option value={ALL_FACTIONS_ID}>All Factions</option>
                  )}
                  {allPossibleArmies.map(army => (
                    <option key={army.id} value={army.id}>
                      {army.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="search-unit" className="block text-lg font-semibold text-amber-800 mb-1">
                  Search Unit:
                </label>
                <input
                  type="text"
                  id="search-unit"
                  placeholder="Enter unit name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600"
                  disabled={!selectedArmyListId && allPossibleArmies.length > 0}
                />
              </div>

              <div className="md:col-span-1">
                <label htmlFor="unit-type-filter" className="block text-lg font-semibold text-amber-800 mb-1">
                  Filter by Type:
                </label>
                <select
                  id="unit-type-filter"
                  value={selectedUnitTypeFilter}
                  onChange={(e) => setSelectedUnitTypeFilter(e.target.value)}
                  className="w-full p-3 bg-stone-50 border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600"
                  disabled={!selectedArmyListId && allPossibleArmies.length > 0}
                >
                  <option value="All">All Types</option>
                  {Object.values(UnitType).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {(selectedArmyListId || selectedArmyListId === ALL_FACTIONS_ID) && allKeywordsForSelectedArmy.length > 0 && (
                <div ref={keywordFilterRef} className="md:col-span-1">
                  <label className="block text-lg font-semibold text-amber-800 mb-1">
                    Filter by Keywords:
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsKeywordDropdownOpen(prev => !prev)}
                      className="w-full p-3 bg-stone-50 border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600 text-left flex justify-between items-center"
                      aria-haspopup="listbox"
                      aria-expanded={isKeywordDropdownOpen}
                    >
                      <span className="truncate pr-2">
                        {selectedKeywordFilters.length > 0
                          ? selectedKeywordFilters.join(', ')
                          : 'All Keywords'}
                      </span>
                      <svg className={`w-5 h-5 transition-transform transform-gpu text-stone-600 ${isKeywordDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>

                    {isKeywordDropdownOpen && (
                      <div
                        className="absolute z-10 w-full mt-1 max-h-48 overflow-y-auto p-2 bg-stone-50 rounded-md border border-stone-500 shadow-lg"
                        role="listbox"
                      >
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
                          {allKeywordsForSelectedArmy.map(kw => (
                            <label key={kw} className="flex items-center space-x-2 text-stone-800 hover:bg-stone-200 p-1.5 rounded transition-colors cursor-pointer">
                              <input
                                type="checkbox"
                                value={kw}
                                checked={selectedKeywordFilters.includes(kw)}
                                onChange={() => handleKeywordFilterChange(kw)}
                                className="form-checkbox h-4 w-4 text-amber-700 bg-stone-100 border-stone-400 rounded focus:ring-amber-600 focus:ring-offset-stone-50"
                              />
                              <span className="text-sm select-none">{kw}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {!selectedArmyListId && allPossibleArmies.length > 0 && (
              <p className="text-center text-amber-700 my-4">Please select "All Factions" or a specific army list to view units.</p>
          )}

          <div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-4 font-['Cinzel',serif]">Available Units:</h3>
            {selectedArmyListId && unitsToDisplay.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                {unitsToDisplay.map(unit => (
                  <UnitCard 
                    key={`${unit.id}-${selectedArmyListId}-${unit.name}`} 
                    unit={unit} 
                    onAddUnit={handleAddUnitRequest} 
                  />
                ))}
              </div>
            ) : selectedArmyListId && (searchTerm || selectedUnitTypeFilter !== 'All' || selectedKeywordFilters.length > 0) && unitsToDisplay.length === 0 ? (
                  <p className="text-stone-500 text-center py-4">No units match your current filter criteria.</p>
              ) : selectedArmyListId && unitsToDisplay.length === 0 ? (
                  <p className="text-stone-500 text-center py-4">No units available for the current selection.</p>
              ) : null
            }
          </div>
        </div>

        <div className="lg:w-1/3 flex flex-col gap-6">
          <SelectedArmyPanel
              currentArmyBuild={sortedArmyBuild}
              totalPoints={totalPoints}
              onRemoveItemGroup={handleRemoveItemGroup}
              onClearArmy={handleClearArmy}
              onViewUnitDetails={handleViewUnitDetails}
              totalModels={totalModels}
              totalHeroes={totalHeroes}
              totalWarriors={totalWarriors}
              selectedArmyName={factionDisplayName}
              bowCount={bowCount}
              bowPercentage={bowPercentage}
              armyBreakPoint={armyBreakPoint}
              totalMight={totalMight}
              totalWill={totalWill}
              totalFate={totalFate}
              bowLimitWarning={bowLimitWarning}
              noHeroWarning={noHeroWarning}
              warriorLimitInfo={warriorLimitInfo}
            />
        </div>

        {unitToConfigure && (
          <UnitOptionsModal
            isOpen={isOptionsModalOpen}
            onClose={() => { setIsOptionsModalOpen(false); setUnitToConfigure(null); setInitialQuantityForModal(0); }}
            unit={unitToConfigure}
            onAddConfiguredUnit={handleAddConfiguredUnit}
            initialQuantity={initialQuantityForModal}
          />
        )}

        {detailedUnitGroup && (
          <SelectedUnitDetailModal
            isOpen={isDetailModalOpen}
            onClose={handleCloseUnitDetails}
            armyItemGroup={detailedUnitGroup}
          />
        )}
      </div>
    </div>
  );
};

export default ForcesPage;
