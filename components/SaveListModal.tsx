import React, { useState, useEffect } from 'react';

interface SaveListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
  currentArmyName?: string | null;
}

const SaveListModal: React.FC<SaveListModalProps> = ({ isOpen, onClose, onSave, currentArmyName }) => {
  const [listName, setListName] = useState(currentArmyName || '');

  useEffect(() => {
    if (isOpen) {
      setListName(currentArmyName || '');
    }
  }, [isOpen, currentArmyName]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (listName.trim()) {
      onSave(listName.trim());
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-stone-900/70 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-stone-100 p-6 rounded-lg shadow-2xl w-full max-w-md border-2 border-amber-800 text-stone-800">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">Save Army List</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-amber-800 text-3xl leading-none">&times;</button>
        </div>
        <div>
          <label htmlFor="army-name" className="block text-lg font-semibold text-amber-800 mb-2">
            Army Name:
          </label>
          <input
            type="text"
            id="army-name"
            value={listName}
            onChange={(e) => setListName(e.target.value)}
            placeholder="Enter a name for your army"
            className="w-full p-3 bg-stone-50 border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600"
          />
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="bg-stone-300 hover:bg-stone-400 text-stone-800 font-semibold py-2 px-4 rounded-md transition-colors">
            Cancel
          </button>
          <button 
            onClick={handleSave} 
            disabled={!listName.trim()} 
            className={`font-semibold py-2 px-4 rounded-md transition-colors ${!listName.trim() ? 'bg-stone-400 text-stone-600 cursor-not-allowed' : 'bg-amber-800 hover:bg-amber-900 text-white'}`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveListModal;