import React, { useState, useEffect, useCallback } from 'react';

const UnitOptionsModal = ({ isOpen, onClose, unit, onAddConfiguredUnit, initialQuantity = 0 }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentTotalPoints, setCurrentTotalPoints] = useState(unit.points);
  const [quantity, setQuantity] = useState(initialQuantity > 0 ? initialQuantity : 1);

  useEffect(() => {
    if (isOpen) {
      setSelectedOptions([]); 
      setCurrentTotalPoints(unit.points);
      setQuantity(initialQuantity > 0 ? initialQuantity : 1);
    }
  }, [isOpen, unit, initialQuantity]);

  useEffect(() => {
    let points = unit.points;
    selectedOptions.forEach(option => {
      if (typeof option.points === 'number') {
        points += option.points;
      }
    });
    setCurrentTotalPoints(points);
  }, [selectedOptions, unit.points]);

  const handleOptionToggle = (option) => {
    setSelectedOptions(prev => {
      if (prev.find(o => o.id === option.id)) {
        return prev.filter(o => o.id !== option.id);
      } else {
        return [...prev, option];
      }
    });
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value, 10);
     if (!isNaN(value) && value >= 0) { // Allow 0, but button will be disabled
      setQuantity(value);
    } else if (event.target.value === '') {
      setQuantity(0); 
    }
  };

  const handleAddClick = () => {
    if (quantity > 0) {
        onAddConfiguredUnit(unit, selectedOptions, currentTotalPoints, quantity);
        // onClose(); // Let ForcesPage handle closing and resetting quantity on card if needed.
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-stone-900/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-stone-100 p-6 rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto border-2 border-amber-800 text-stone-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">Configure: {unit.name}</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-amber-800 text-2xl">&times;</button>
        </div>

        <p className="text-stone-700 mb-1">Base Points: <span className="font-semibold text-amber-800">{unit.points}</span></p>
        
        {unit.options && unit.options.length > 0 ? (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Available Options:</h3>
            <div className="space-y-2">
              {unit.options.map(option => (
                <label key={option.id} className="flex items-center space-x-3 p-2 bg-stone-200 rounded-md hover:bg-stone-300 transition-colors cursor-pointer border border-stone-400">
                  <input
                    type="checkbox"
                    checked={selectedOptions.some(o => o.id === option.id)}
                    onChange={() => handleOptionToggle(option)}
                    className="form-checkbox h-5 w-5 text-amber-700 bg-stone-50 border-stone-400 rounded focus:ring-amber-600 focus:ring-offset-stone-200"
                  />
                  <span className="text-stone-800 flex-grow">{option.name}</span>
                  <span className="text-amber-800 font-semibold">
                    {option.points === 'Free' ? 'Free' : `+${option.points} pts`}
                  </span>
                </label>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-stone-500 italic my-4">This unit has no configurable options.</p>
        )}

        <div className="mb-4">
          <label htmlFor="modal-quantity" className="block text-sm font-medium text-amber-800 mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="modal-quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="0" // Allow 0, but button will be disabled
            className="w-24 p-2 bg-stone-50 border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600"
            aria-label={`Quantity for configured ${unit.name}`}
          />
        </div>
        
        <div className="mt-6 pt-4 border-t border-stone-300">
            <p className="text-xl font-semibold text-amber-800 mb-4">
                Total Unit Points (each): <span className="text-stone-900">{currentTotalPoints}</span>
            </p>
            <button
                onClick={handleAddClick}
                disabled={quantity === 0}
                 className={`w-full font-bold py-3 px-4 rounded-md transition-colors text-lg ${
                    quantity === 0
                    ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                    : 'bg-amber-800 hover:bg-amber-900 text-stone-100'
                 }`}
            >
                Add {quantity > 0 ? quantity : ''} to Army
            </button>
        </div>
      </div>
    </div>
  );
};

export default UnitOptionsModal;