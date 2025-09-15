import React from 'react';
import { UnitType } from '../types.ts';

const UnitCard = ({ unit, onAddUnit }) => {
  const isBulkAddable = unit.type === UnitType.WARRIOR;
  const quantities = isBulkAddable ? [1, 3, 6, 10] : [1];
  const buttonText = unit.options && unit.options.length > 0 ? 'Configure' : 'Add';

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-stone-400 hover:border-amber-700 transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-semibold text-amber-800">{unit.name}</h4>
          <span className="text-sm font-bold text-amber-900 bg-stone-200 px-2 py-1 rounded">{unit.points} pts</span>
        </div>
        <p className="text-xs text-stone-600 mb-1">{unit.type}{unit.keywords ? ` - ${unit.keywords.join(', ')}` : ''}</p>
        
        {unit.options && unit.options.length > 0 && (
          <div className="mt-1">
            <p className="text-xs text-amber-700 italic">Options available for this unit.</p>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2 flex-wrap justify-end">
        <span className="text-sm font-semibold text-stone-600 mr-auto">{buttonText}:</span>
        {quantities.map(qty => (
          <button
            key={qty}
            onClick={() => onAddUnit(unit, qty)}
            className="bg-amber-800 hover:bg-amber-900 text-stone-100 font-bold py-1 px-3 rounded-md text-sm transition-transform transform hover:scale-105 shadow"
            aria-label={`Add ${qty} ${unit.name} to army`}
          >
            +{qty}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UnitCard;