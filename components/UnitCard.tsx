
import React, { useState } from 'react';
import { Unit } from '../types';

interface UnitCardProps {
  unit: Unit;
  onAddUnit: (unit: Unit, quantity: number) => void;
}

const UnitCard: React.FC<UnitCardProps> = ({ unit, onAddUnit }) => {
  const [quantity, setQuantity] = useState<number>(0); // Default to 0

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) { // Allow 0
      setQuantity(value);
    } else if (event.target.value === '') {
      setQuantity(0); 
    }
  };

  const handleAddClick = () => {
    if (quantity > 0) {
      onAddUnit(unit, quantity);
      setQuantity(0); // Reset quantity after adding/configuring
    }
  };

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

      <div className="mt-3 flex items-center gap-2">
        <input
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          min="0" // Allow 0
          className="w-16 p-2 bg-stone-100 border border-amber-700 rounded-md text-stone-800 text-sm focus:ring-amber-600 focus:border-amber-600"
          aria-label={`Quantity for ${unit.name}`}
        />
        <button
          onClick={handleAddClick}
          disabled={quantity === 0} // Disable if quantity is 0
          className={`flex-grow font-semibold py-2 px-3 rounded-md text-sm transition-colors ${
            quantity === 0 
            ? 'bg-stone-300 text-stone-500 cursor-not-allowed' 
            : 'bg-amber-800 hover:bg-amber-900 text-stone-100'
          }`}
          aria-label={`Add ${quantity} ${unit.name} to army`}
        >
          {unit.options && unit.options.length > 0 ? 'Configure & Add' : 'Add to Army'}
        </button>
      </div>
    </div>
  );
};

export default UnitCard;