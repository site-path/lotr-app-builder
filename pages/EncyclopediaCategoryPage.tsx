import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { encyclopediaData } from '../data/encyclopediaData.ts';

const EncyclopediaCategoryPage = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState('');

  const { title, data } = useMemo(() => {
    switch (category) {
      case 'magical-powers':
        return { title: 'Magical Powers', data: encyclopediaData.filter(item => item.category === 'Magical Power').sort((a,b) => a.name.localeCompare(b.name)) };
      case 'special-rules':
        return { title: 'Special Rules', data: encyclopediaData.filter(item => item.category === 'Special Rule').sort((a,b) => a.name.localeCompare(b.name)) };
      case 'heroic-actions':
        return { title: 'Heroic Actions', data: encyclopediaData.filter(item => item.category === 'Heroic Action').sort((a,b) => a.name.localeCompare(b.name)) };
      default:
        return { title: 'Unknown Category', data: [] };
    }
  }, [category]);

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    const lowercasedFilter = searchTerm.toLowerCase();
    return data.filter(item =>
      item.name.toLowerCase().includes(lowercasedFilter) ||
      item.description.toLowerCase().includes(lowercasedFilter)
    );
  }, [data, searchTerm]);

  const getLabelForType = (category) => {
    switch (category) {
      case 'magical-powers': return 'Duration: ';
      case 'special-rules': return 'Type: ';
      case 'heroic-actions': return 'Phase: ';
      default: return '';
    }
  }

  return (
    <div className="bg-stone-100/95 p-6 sm:p-8 rounded-lg shadow-xl border border-stone-400">
      <div className="mb-6">
        <Link to="/encyclopedia" className="text-lg font-semibold text-amber-800 hover:text-amber-600 transition-colors flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Encyclopedia
        </Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4 font-['Cinzel',serif] [text-shadow:_1px_1px_2px_rgba(109,40,22,0.4)]">
        {title}
      </h1>
      
      <div className="mb-6 sticky top-24 z-10 bg-stone-100/95 py-3 -mx-6 sm:-mx-8 px-6 sm:px-8 border-b-2 border-stone-300">
        <input
          type="text"
          placeholder={`Search ${title}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 bg-white border border-amber-700 rounded-md text-stone-800 focus:ring-amber-600 focus:border-amber-600 shadow"
          aria-label={`Search ${title}`}
        />
      </div>

      <div className="space-y-4">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div key={`${item.name}-${index}`} className="bg-white p-4 rounded-lg shadow border border-stone-300 transition-shadow hover:shadow-md">
              <h2 className="text-2xl font-semibold text-amber-900 font-['Cinzel',serif]">{item.name}</h2>
              {item.type && (
                <p className="text-sm text-stone-600 font-semibold mb-2 italic">
                  <strong>{getLabelForType(category)}</strong>{item.type}
                </p>
              )}
              <div className="text-stone-700 whitespace-pre-wrap leading-relaxed space-y-2">
                  {item.description.split('\n').map((paragraph, pIndex) => (
                      <p key={pIndex}>{paragraph}</p>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-stone-500">No results found for "{searchTerm}".</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EncyclopediaCategoryPage;