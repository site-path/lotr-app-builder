import React from 'react';
import { Link } from 'react-router-dom';

const EncyclopediaPage = () => {
  return (
    <div className="bg-stone-100/95 p-6 sm:p-8 rounded-lg shadow-xl border border-stone-400">
      <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-8 font-['Cinzel',serif] text-center [text-shadow:_1px_1px_2px_rgba(109,40,22,0.4)]">
        Encyclopedia
      </h1>
      <p className="text-lg text-stone-700 mb-10 max-w-3xl mx-auto leading-relaxed text-center">
        A comprehensive reference for all the magical powers, special rules, and heroic actions in the Middle-earth Strategy Battle Game.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {/* Card for Magical Powers */}
        <Link to="/encyclopedia/magical-powers" className="block p-6 bg-white rounded-lg border border-stone-300 hover:shadow-lg hover:border-amber-700 transition-all transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">Magical Powers</h2>
          <p className="text-stone-600 mt-2">Explore the arcane arts and mystical abilities available to the heroes and villains of Middle-earth.</p>
        </Link>
        {/* Card for Special Rules */}
        <Link to="/encyclopedia/special-rules" className="block p-6 bg-white rounded-lg border border-stone-300 hover:shadow-lg hover:border-amber-700 transition-all transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">Special Rules</h2>
          <p className="text-stone-600 mt-2">Understand the unique abilities and rules that define the units and armies of the game.</p>
        </Link>
        {/* Card for Heroic Actions */}
        <Link to="/encyclopedia/heroic-actions" className="block p-6 bg-white rounded-lg border border-stone-300 hover:shadow-lg hover:border-amber-700 transition-all transform hover:-translate-y-1">
          <h2 className="text-2xl font-bold text-amber-900 font-['Cinzel',serif]">Heroic Actions</h2>
          <p className="text-stone-600 mt-2">Learn about the game-changing actions heroes can perform to turn the tide of battle.</p>
        </Link>
      </div>
    </div>
  );
};

export default EncyclopediaPage;