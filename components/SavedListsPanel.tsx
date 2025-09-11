import React from 'react';
import { SavedList } from '../types';

interface SavedListsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  savedLists: SavedList[];
  onLoadList: (list: SavedList) => void;
  onDeleteList: (timestamp: number) => void;
}

const SavedListsPanel: React.FC<SavedListsPanelProps> = ({ isOpen, onClose, savedLists, onLoadList, onDeleteList }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-stone-900/70 flex items-center justify-center z-[60] p-4 backdrop-blur-sm">
      <div className="bg-stone-100 p-6 rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col border-2 border-amber-800 text-stone-800">
        <div className="flex justify-between items-center mb-4 flex-shrink-0 border-b border-amber-800 pb-3">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">Load Saved Army</h2>
          <button onClick={onClose} className="text-stone-500 hover:text-amber-800 text-3xl leading-none" aria-label="Close load panel">&times;</button>
        </div>
        
        <div className="overflow-y-auto pr-2">
          {savedLists.length > 0 ? (
            <div className="space-y-3">
              {[...savedLists].sort((a, b) => b.timestamp - a.timestamp).map(list => (
                <div key={list.timestamp} className="bg-white p-3 rounded-md border border-stone-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-amber-900">{list.name}</h3>
                    <p className="text-sm text-stone-600">
                      {list.factionName || 'All Factions'} ({list.alignment}) | {list.totalPoints} pts
                    </p>
                    <p className="text-xs text-stone-500">
                      Saved: {new Date(list.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex gap-2 self-end sm:self-center flex-shrink-0">
                    <button
                      onClick={() => onLoadList(list)}
                      className="bg-amber-800 hover:bg-amber-900 text-white font-semibold py-1 px-3 rounded-md transition-colors text-sm"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => onDeleteList(list.timestamp)}
                       className="bg-red-700 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-md transition-colors text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-stone-500 italic py-8">You have no saved armies.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SavedListsPanel;