import React from 'react';

const StatDisplay = ({ label, value }) => {
  if (value === undefined || value === null || value === '') return null;
  return (
    <span className="text-sm mr-3">
      <strong className="text-amber-700">{label}:</strong> <span className="text-stone-800">{value}</span>
    </span>
  );
};

const renderFullStats = (stats) => {
  if (!stats) return <p className="text-stone-500 italic">No base stats defined.</p>;
  const { mv, f, s, d, a, w, c, i, might, will, fate } = stats;
  const statItems = [
    { label: "Mv", value: mv }, { label: "F", value: f }, { label: "S", value: s },
    { label: "D", value: d }, { label: "A", value: a }, { label: "W", value: w },
    { label: "C", value: c }, { label: "I", value: i }, { label: "Might", value: might }, 
    { label: "Will", value: will }, { label: "Fate", value: fate },
  ].filter(item => item.value !== undefined && item.value !== null && item.value !== '');

  if (statItems.length === 0) return <p className="text-stone-500 italic">No base stats defined.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-1 mb-2">
      {statItems.map(item => <StatDisplay key={item.label} label={item.label} value={item.value} />)}
    </div>
  );
};

const DetailSection = ({ title, children, condition = true }) => {
  if (!condition) return null;
  return (
    <div className="mb-3">
      <h4 className="text-md font-semibold text-amber-800 mb-1 border-b border-stone-300 pb-1">{title}</h4>
      {children}
    </div>
  );
};

const renderSpecialRule = (rule, index) => {
    const activeMarker = " ACTIVE - ";
    const passiveMarker = " PASSIVE - ";

    let namePart = rule;
    let descriptionPart = "";
    let type = null;

    if (rule.includes(activeMarker)) {
        [namePart, descriptionPart] = rule.split(activeMarker, 2);
        type = 'ACTIVE';
    } else if (rule.includes(passiveMarker)) {
        [namePart, descriptionPart] = rule.split(passiveMarker, 2);
        type = 'PASSIVE';
    }
    
    return (
      <li key={`${namePart.trim()}-${index}`} className="text-stone-700">
        <strong className="text-amber-700">{namePart.trim()}</strong>
        {type && <span className={`text-xs font-semibold ml-1 ${type === 'ACTIVE' ? 'text-green-700' : 'text-blue-700'}`}>({type})</span>}
        {descriptionPart && `: ${descriptionPart}`}
      </li>
    );
};


const SelectedUnitDetailModal = ({ isOpen, onClose, armyItemGroup }) => {
  if (!isOpen || !armyItemGroup) return null;

  const unit = armyItemGroup.unit; // Base unit details

  return (
    <div className="fixed inset-0 bg-stone-900/75 flex items-center justify-center z-[70] p-4 backdrop-blur-sm">
      <div className="bg-stone-100 p-6 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-amber-800 text-stone-800">
        <div className="flex justify-between items-center mb-4 sticky top-0 bg-stone-100 py-2 z-10 -mt-6 -mx-6 px-6 border-b border-amber-800">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">{unit.name}</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-amber-800 text-3xl leading-none" aria-label="Close unit details">&times;</button>
        </div>
        
        <div className="space-y-2 -mt-2">

            <p className="text-lg font-semibold text-amber-800">
                Points per Model: {armyItemGroup.pointsPerModel}
            </p>
             <p className="text-sm text-stone-600">
                Quantity in Army: {armyItemGroup.quantity} (Total: {armyItemGroup.totalPoints} pts)
            </p>
            <p className="text-sm text-stone-600">Type: {unit.type}</p>
            
            <DetailSection title="Base Stats">
              {renderFullStats(unit.stats)}
            </DetailSection>

            <DetailSection title="Wargear" condition={!!unit.wargear && unit.wargear.length > 0}>
              <p className="text-sm text-stone-700">{unit.wargear?.join(', ')}</p>
            </DetailSection>

            <DetailSection title="Selected Options (for this group)" condition={armyItemGroup.selectedOptions.length > 0}>
              <ul className="list-disc list-inside text-sm space-y-1">
                {armyItemGroup.selectedOptions.map(opt => (
                  <li key={opt.id} className="text-stone-700">
                    {opt.name} ({opt.points === 'Free' ? 'Free' : `+${opt.points} pts`})
                    {opt.description && <span className="italic text-stone-600"> - {opt.description}</span>}
                  </li>
                ))}
              </ul>
            </DetailSection>

            <DetailSection title="Special Rules" condition={!!unit.specialRules && unit.specialRules.length > 0}>
              <ul className="list-disc list-inside text-sm space-y-1">
                {unit.specialRules?.map((rule, index) => renderSpecialRule(rule, index))}
              </ul>
            </DetailSection>

            <DetailSection title="Heroic Actions" condition={!!unit.heroicActions && unit.heroicActions.length > 0}>
              <p className="text-sm text-stone-700">{unit.heroicActions?.join(', ')}</p>
            </DetailSection>

            <DetailSection title="Magical Powers" condition={!!unit.magicalPowers && unit.magicalPowers.length > 0}>
              <ul className="list-disc list-inside text-sm space-y-1">
                {unit.magicalPowers?.map((power) => (
                  <li key={power.name} className="text-stone-700">
                    <strong className="text-amber-700">{power.name}</strong> (Range: {power.range}, Casting: {power.casting})
                  </li>
                ))}
              </ul>
            </DetailSection>

        </div>
      </div>
    </div>
  );
};

export default SelectedUnitDetailModal;