import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FORCES_OF_GOOD_DATA } from '../data/lotrData.ts';
import { FORCES_OF_EVIL_DATA } from '../data/lotrData.ts';

const HomePage = () => {

  const totalProfiles = useMemo(() => {
    const allArmies = [...FORCES_OF_GOOD_DATA, ...FORCES_OF_EVIL_DATA];
    const uniqueUnitIds = new Set();
    allArmies.forEach(army => {
      army.units.forEach(unit => {
        uniqueUnitIds.add(unit.id);
      });
    });
    return uniqueUnitIds.size;
  }, []);

  return (
    <div className="bg-stone-100/95 p-6 sm:p-8 rounded-lg shadow-xl border border-stone-400">
      
      {/* Redesigned Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4 font-['Cinzel',serif] [text-shadow:_1px_1px_2px_rgba(109,40,22,0.4)]">
            Welcome to the MESBG Builder
          </h1>
          <p className="text-lg text-stone-700 mb-8 leading-relaxed">
            Build your army lists for the Middle-earth Strategy Battle Game. Choose your faction, select your heroes and warriors, and lead them to victory.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link 
              to="/forces/good" 
              className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-stone-100 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg"
            >
              Forces of Good
            </Link>
            <Link 
              to="/forces/evil" 
              className="w-full sm:w-auto bg-stone-700 hover:bg-stone-800 text-stone-100 font-bold py-3 px-8 rounded-lg text-xl transition-transform transform hover:scale-105 shadow-lg"
            >
              Forces of Evil
            </Link>
          </div>
        </div>
        
        <div className="flex justify-center items-center">
          <div className="text-center bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-stone-300">
            <h2 className="text-lg font-['Cinzel',serif] font-bold text-amber-900 uppercase tracking-widest mb-2">Total Profiles</h2>
            <p className="text-6xl font-bold tracking-tighter text-stone-800">{totalProfiles}</p>
          </div>
        </div>
      </div>


      <div className="mt-12 border-t-2 border-stone-300 pt-8">
        <h2 className="text-3xl font-semibold text-amber-800 mb-6 font-['Cinzel',serif] text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg border border-stone-300">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Comprehensive Unit Lists</h3>
            <p className="text-stone-600">
              Browse through a vast collection of units from all the major factions of Middle-earth, complete with stats, wargear, and special rules.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-stone-300">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Intuitive Army Building</h3>
            <p className="text-stone-600">
              Easily add units, configure their options, and see your army's total points update in real-time. Keep track of model counts, heroes, and warriors effortlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-stone-300">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Export & Share</h3>
            <p className="text-stone-600">
              Once your army is ready, export it to a clean, printable format to take to your games or share with friends.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t-2 border-stone-300 pt-8">
        <h2 className="text-3xl font-semibold text-amber-800 mb-6 font-['Cinzel',serif] text-center">
          Quick Reference
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
           <Link to="/encyclopedia/magical-powers" className="group flex flex-col justify-between p-6 bg-white rounded-lg border border-stone-300 hover:shadow-lg hover:border-amber-700 transition-all transform hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Magical Powers</h3>
              <p className="text-stone-600">Browse the arcane arts and mystical abilities used in Middle-earth.</p>
            </div>
            <div className="flex justify-end items-center mt-4 text-amber-700 font-semibold group-hover:text-amber-800 transition-colors text-sm">
                <span>View More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
          </Link>
          <Link to="/encyclopedia/special-rules" className="group flex flex-col justify-between p-6 bg-white rounded-lg border border-stone-300 hover:shadow-lg hover:border-amber-700 transition-all transform hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Special Rules</h3>
              <p className="text-stone-600">Understand the unique rules that define the units and armies of the game.</p>
            </div>
             <div className="flex justify-end items-center mt-4 text-amber-700 font-semibold group-hover:text-amber-800 transition-colors text-sm">
                <span>View More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
          </Link>
          <Link to="/encyclopedia/heroic-actions" className="group flex flex-col justify-between p-6 bg-white rounded-lg border border-stone-300 hover:shadow-lg hover:border-amber-700 transition-all transform hover:-translate-y-1">
            <div>
              <h3 className="text-xl font-bold text-amber-900 mb-2">Heroic Actions</h3>
              <p className="text-stone-600">Learn about the game-changing actions heroes can perform to turn the tide of battle.</p>
            </div>
            <div className="flex justify-end items-center mt-4 text-amber-700 font-semibold group-hover:text-amber-800 transition-colors text-sm">
                <span>View More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;