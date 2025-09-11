import React from 'react';

const StatDisplay = ({ label, value }) => {
  if (value === undefined || value === null || value === '') return null;
  return (
    <span className="text-xs mr-2">
      <strong className="text-amber-700">{label}:</strong> <span className="text-stone-700">{value}</span>
    </span>
  );
};

const renderStatsPreview = (stats) => {
  if (!stats) return null;
  const { mv, f, s, d, a, w, c, i, might, will, fate } = stats;
  const statItems = [
    { label: "Mv", value: mv }, { label: "F", value: f }, { label: "S", value: s },
    { label: "D", value: d }, { label: "A", value: a }, { label: "W", value: w },
    { label: "C", value: c }, { label: "I", value: i }, { label: "M", value: might }, 
    { label: "Wi", value: will }, { label: "Ft", value: fate },
  ].filter(item => item.value !== undefined && item.value !== null && item.value !== '');

  if (statItems.length === 0) return <p className="text-xs text-stone-500 italic">No base stats defined.</p>;

  return (
    <div className="text-stone-700 mt-1 mb-1">
      {statItems.map(item => <StatDisplay key={item.label} label={item.label} value={item.value} />)}
    </div>
  );
};

const SelectedArmyPanel = ({ 
  currentArmyBuild, 
  totalPoints, 
  onRemoveItemGroup,
  onClearArmy,
  onViewUnitDetails,
  totalModels,
  totalHeroes,
  totalWarriors,
  selectedArmyName,
  bowCount,
  bowPercentage,
  armyBreakPoint,
  totalMight,
  totalWill,
  totalFate,
  bowLimitWarning,
  noHeroWarning,
  warriorLimitInfo,
}) => {

    const handleExportList = () => {
    const safeArmyName = selectedArmyName ? selectedArmyName.replace(/[^a-zA-Z0-9 ]/g, "") : 'Custom Army';
    
    const formatSpecialRule = (rule) => {
        const activeMarker = " - Active - ";
        const passiveMarker = " - Passive - ";
        let marker = "";
        let splitPoint = -1;

        if (rule.includes(activeMarker)) {
            marker = activeMarker;
            splitPoint = rule.indexOf(activeMarker);
        } else if (rule.includes(passiveMarker)) {
            marker = passiveMarker;
            splitPoint = rule.indexOf(passiveMarker);
        }

        if (splitPoint !== -1) {
            const namePart = rule.substring(0, splitPoint);
            const descriptionPart = rule.substring(splitPoint + marker.length);
            return `<li><strong>${namePart.trim()}:</strong> ${descriptionPart}</li>`;
        } else {
            return `<li>${rule}</li>`;
        }
    };

    const unitsHtml = currentArmyBuild.map(group => {
      const unit = group.unit;
      const optionsHtml = group.selectedOptions.length > 0
        ? `<div class="unit-detail-block"><strong>Options:</strong><ul>${group.selectedOptions.map(opt => `<li>${opt.name} (${opt.points === 'Free' ? 'Free' : `+${opt.points}pts`})</li>`).join('')}</ul></div>`
        : '';

      const wargearHtml = unit.wargear && unit.wargear.length > 0
        ? `<div class="unit-detail-block"><strong>Wargear:</strong> ${unit.wargear.join(', ')}</div>`
        : '';
        
      const specialRulesHtml = unit.specialRules && unit.specialRules.length > 0
        ? `<div class="unit-detail-block"><strong>Special Rules:</strong><ul>${unit.specialRules.map(formatSpecialRule).join('')}</ul></div>`
        : '';

      const heroicActionsHtml = unit.heroicActions && unit.heroicActions.length > 0
        ? `<div class="unit-detail-block"><strong>Heroic Actions:</strong> ${unit.heroicActions.join(', ')}</div>`
        : '';
        
      const magicalPowersHtml = unit.magicalPowers && unit.magicalPowers.length > 0
        ? `<div class="unit-detail-block"><strong>Magical Powers:</strong><ul>${unit.magicalPowers.map(p => `<li>${p.name} (${p.range}, ${p.casting})</li>`).join('')}</ul></div>`
        : '';
        
      const statsHtml = unit.stats ? `<div class="stats-grid">${Object.entries(unit.stats).map(([key, value]) => {
          let label = key;
          switch (key) {
            case 'mv': label = 'Mv'; break;
            case 'f': label = 'F'; break;
            case 's': label = 'S'; break;
            case 'd': label = 'D'; break;
            case 'a': label = 'A'; break;
            case 'w': label = 'W'; break;
            case 'c': label = 'C'; break;
            case 'i': label = 'I'; break;
            case 'might': label = 'M'; break;
            case 'will': label = 'W'; break;
            case 'fate': label = 'F'; break;
          }
          return value ? `<div><strong>${label.toUpperCase()}</strong><span>${value}</span></div>` : ''
        }).join('')}</div>` : '';


      return `
        <div class="unit-card">
          <div class="unit-header">
            <h3>${group.quantity}x ${unit.name}</h3>
            <span>${group.totalPoints}pts</span>
          </div>
          <div class="unit-subheader">
             <span>(${group.pointsPerModel}pts each)</span>
             <span>${unit.type}</span>
          </div>
          ${statsHtml}
          <div class="unit-details">
            ${wargearHtml}
            ${optionsHtml}
            ${specialRulesHtml}
            ${heroicActionsHtml}
            ${magicalPowersHtml}
          </div>
        </div>
      `;
    }).join('');

    const exportContent = `
<html>
<head>
  <title>MESBG Army List - ${safeArmyName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@700&display=swap');
    body { 
      font-family: 'Alegreya', Arial, sans-serif; 
      line-height: 1.5; 
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
      color: #333;
    }
    .page {
      width: 210mm;
      min-height: 297mm;
      padding: 20mm;
      margin: 10mm auto;
      background: white;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
    }
    h1, h2, h3 {
      font-family: 'Cinzel', serif;
      color: #4a2c2a;
      border-bottom: 2px solid #d2b48c;
      padding-bottom: 5px;
      margin-top: 0;
      margin-bottom: 10px;
    }
    .header { text-align: center; margin-bottom: 20px; }
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      background: #f5f0e1;
      border: 1px solid #d2b48c;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .summary-item { text-align: center; }
    .summary-item strong { display: block; font-size: 1.2em; color: #4a2c2a; }
    .summary-item span { font-size: 0.9em; color: #6c757d; }
    
    .units-container {
        /* Single column layout for unit profiles */
    }

    .unit-card {
      background: #fff;
      border: 1px solid #e0d9c6;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 15px;
      break-inside: avoid;
      page-break-inside: avoid;
    }
    .unit-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
    }
    .unit-header h3 {
      margin: 0;
      font-size: 1.1em;
      border-bottom: none;
      padding-bottom: 0;
    }
    .unit-header span {
      font-weight: bold;
      color: #4a2c2a;
    }
    .unit-subheader {
      font-size: 0.8em;
      color: #6c757d;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
    }
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
        gap: 5px;
        text-align: center;
        background-color: #f5f0e1;
        padding: 5px;
        border-radius: 3px;
        margin-bottom: 8px;
        font-size: 0.8em;
    }
    .stats-grid div strong { display: block; font-weight: bold; color: #854d0e; }
    
    .unit-details { font-size: 0.85em; }
    .unit-detail-block { margin-top: 5px; }
    .unit-details strong { color: #653b0a; }
    .unit-details ul {
        list-style-type: none;
        padding-left: 10px;
        margin: 5px 0 0 0;
    }
     .unit-details ul li {
        border-left: 2px solid #d2b48c;
        padding-left: 8px;
        margin-bottom: 3px;
    }
    .unit-details ul li strong { color: #4a2c2a; }

    @media print {
      body, .page {
        margin: 0;
        box-shadow: none;
        background: white;
      }
      .page {
        padding: 15mm;
      }
      .summary-grid {
         background-color: #f0f0f0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .stats-grid {
        background-color: #f0f0f0 !important;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="header">
      <h1>MESBG Army List</h1>
      <h2>${safeArmyName}</h2>
    </div>

    <div class="summary-grid">
      <div class="summary-item"><strong>${totalPoints}</strong><span>Total Points</span></div>
      <div class="summary-item"><strong>${totalModels}</strong><span>Models (${totalHeroes}H / ${totalWarriors}W)</span></div>
      <div class="summary-item"><strong>${armyBreakPoint}</strong><span>Army Break Point</span></div>
      <div class="summary-item"><strong>${bowCount}</strong><span>Bows (${bowPercentage}%)</span></div>
      <div class="summary-item"><strong>${totalMight}</strong><span>Total Might</span></div>
      <div class="summary-item"><strong>${totalWill}</strong><span>Total Will</span></div>
      <div class="summary-item"><strong>${totalFate}</strong><span>Total Fate</span></div>
    </div>
    
    <div class="units-container">
      ${unitsHtml}
    </div>
  </div>
</body>
</html>
`;
    const exportWindow = window.open('', '_blank');
    if (exportWindow) {
      exportWindow.document.write(exportContent);
      exportWindow.document.close();
    } else {
      alert('Could not open new window. Please check your pop-up blocker settings.');
    }
  };

  return (
    <div className="bg-stone-100/95 p-6 rounded-lg shadow-xl sticky top-24 border border-stone-400">
      <h2 className="text-3xl font-bold text-amber-900 mb-4 font-['Cinzel',serif]">Your Army</h2>
      
      <div className="bg-amber-800 text-white p-3 rounded-lg text-center mb-4 shadow-inner">
        <span className="block text-sm font-semibold tracking-wide uppercase">Total Points</span>
        <span className="block text-4xl font-bold tracking-wider">{totalPoints}</span>
      </div>
      
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Models:</span>
          <span className="font-bold text-lg text-stone-800">{totalModels}</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Break Point:</span>
          <span className="font-bold text-lg text-stone-800">{armyBreakPoint}</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Heroes:</span>
          <span className="font-bold text-lg text-stone-800">{totalHeroes}</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Warriors:</span>
          <span className="font-bold text-lg text-stone-800">{totalWarriors}</span>
        </div>
        <div className="col-span-2 flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Bow Count:</span>
          <span className="font-bold text-lg text-stone-800">{bowCount} ({bowPercentage}%)</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Might:</span>
          <span className="font-bold text-lg text-stone-800">{totalMight}</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Will:</span>
          <span className="font-bold text-lg text-stone-800">{totalWill}</span>
        </div>
        <div className="flex justify-between items-baseline border-b border-stone-300 py-1">
          <span className="text-stone-600">Fate:</span>
          <span className="font-bold text-lg text-stone-800">{totalFate}</span>
        </div>
      </div>

      {(bowLimitWarning || noHeroWarning || (currentArmyBuild.length > 0 && warriorLimitInfo)) && (
        <div className="my-4 p-3 bg-amber-100/70 rounded-md border border-amber-300 space-y-2">
          <h4 className="text-lg font-semibold text-amber-800">Army Compliance Notes:</h4>
          {bowLimitWarning && <p className="text-sm text-orange-700">{bowLimitWarning}</p>}
          {noHeroWarning && <p className="text-sm text-orange-700">{noHeroWarning}</p>}
          {currentArmyBuild.length > 0 && warriorLimitInfo && <p className="text-sm text-stone-600 italic">{warriorLimitInfo}</p>}
        </div>
      )}

      {currentArmyBuild.length > 0 && (
        <div className="mb-4">
            <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                onClick={onClearArmy}
                className="bg-stone-300 hover:bg-stone-400 text-stone-800 font-semibold py-2 px-4 rounded-md transition-colors text-sm"
                aria-label="Clear entire army list"
                >
                Clear Army
                </button>
                <button
                onClick={handleExportList}
                className="bg-stone-300 hover:bg-stone-400 text-amber-800 font-semibold py-2 px-4 rounded-md transition-colors text-sm"
                aria-label="Export or Print army list"
                >
                Export/Print
                </button>
            </div>
        </div>
      )}

      {currentArmyBuild.length === 0 ? (
         <>
          <p className="text-stone-600 italic mb-4">Your army is empty. Add some units to get started!</p>
         </>
      ) : (
        <div className="space-y-3 max-h-[calc(100vh-420px)] overflow-y-auto pr-2">
          {currentArmyBuild.map((group) => (
            <div 
              key={group.itemGroupId} 
              className="bg-white p-3 rounded-md border border-stone-300 hover:bg-stone-50 hover:border-amber-700 transition-colors"
            >
              <div 
                onClick={() => onViewUnitDetails(group.itemGroupId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onViewUnitDetails(group.itemGroupId); }}
                aria-label={`View details for ${group.unit.name}`}
                className="cursor-pointer"
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-md font-semibold text-amber-900">{group.unit.name} <span className="text-amber-800">(x{group.quantity})</span></h4>
                    <p className="text-xs text-stone-500">{group.unit.type} - {group.pointsPerModel} pts each</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-stone-800">{group.totalPoints} pts</p>
                  </div>
                </div>
                <div className="text-xs text-stone-700 space-y-0.5">
                  {renderStatsPreview(group.unit.stats)}
                  {group.selectedOptions.length > 0 && (
                      <p><strong className="text-amber-700">Options:</strong> {group.selectedOptions.map(opt => `${opt.name} (+${opt.points === 'Free' ? 0 : opt.points} pts)`).join(', ')}</p>
                  )}
                </div>
              </div>
              <div className="mt-2 pt-2 border-t border-stone-200 flex justify-end space-x-2">
                <button
                    onClick={(e) => { e.stopPropagation(); onRemoveItemGroup(group.itemGroupId); }}
                    className="text-xs bg-red-700 hover:bg-red-600 text-white px-2 py-1 rounded"
                    aria-label={`Remove all ${group.quantity} ${group.unit.name}`}
                >
                    Remove All {group.quantity}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedArmyPanel;