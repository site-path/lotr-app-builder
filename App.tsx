import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ForcesPage from './pages/ForcesPage.js';
import EncyclopediaPage from './pages/EncyclopediaPage.js';
import EncyclopediaCategoryPage from './pages/EncyclopediaCategoryPage.js';


const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3 inline-block">
        <defs>
            <radialGradient id="ringGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="60%" style={{stopColor: '#FFD700', stopOpacity: 1}} />
                <stop offset="95%" style={{stopColor: '#F0C400', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#D4AF37', stopOpacity: 1}} />
            </radialGradient>
            <filter id="glow" x="-0.5" y="-0.5" width="2" height="2">
                <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" />
            </filter>
        </defs>
        <circle cx="12" cy="12" r="8" stroke="url(#ringGradient)" strokeWidth="3.5" fill="none" />
        <circle cx="12" cy="12" r="8" stroke="#FDB813" strokeWidth="3.5" fill="none" filter="url(#glow)" strokeOpacity="0.6"/>
    </svg>
);

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-lg font-semibold transition-colors px-3 py-2 rounded-md ${
        isActive
          ? 'bg-amber-800 text-white shadow-inner'
          : 'text-amber-800 hover:bg-amber-700 hover:text-white'
      }`
    }
  >
    {children}
  </NavLink>
);

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for PWA install prompt
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setInstallPrompt(e);
      // Update UI to notify the user they can install the PWA, but not if already installed
      if (!window.matchMedia('(display-mode: standalone)').matches) {
        setIsInstallable(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handler);

    // Don't forget to remove the event listener on cleanup
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      return;
    }
    // Hide the app provided install promotion
    setIsInstallable(false);
    // Show the install prompt
    await installPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await installPrompt.userChoice;
    // We've used the prompt, and can't use it again, throw it away
    setInstallPrompt(null);
    console.log(`User response to the install prompt: ${outcome}`);
  };

  const handleDismissInstall = () => {
    setIsInstallable(false);
    setInstallPrompt(null);
  };

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <header className="bg-stone-200/90 shadow-lg p-4 sticky top-0 z-50 backdrop-blur-sm border-b-2 border-amber-800">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-amber-900 hover:text-amber-700 transition-colors font-['Cinzel',serif] tracking-wider flex items-center">
              <Logo />
              MESBG BUILDER
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/forces/good">Forces of Good</NavItem>
              <NavItem to="/forces/evil">Forces of Evil</NavItem>
              <NavItem to="/encyclopedia">Encyclopedia</NavItem>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-amber-800 focus:outline-none">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                </svg>
              </button>
            </div>
          </nav>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-2" onClick={() => setMobileMenuOpen(false)}>
              <Link to="/" className="block text-center text-amber-800 hover:text-amber-600 font-semibold transition-colors text-lg py-2">Home</Link>
              <Link to="/forces/good" className="block text-center text-amber-800 hover:text-amber-600 font-semibold transition-colors text-lg py-2">Forces of Good</Link>
              <Link to="/forces/evil" className="block text-center text-amber-800 hover:text-amber-600 font-semibold transition-colors text-lg py-2">Forces of Evil</Link>
              <Link to="/encyclopedia" className="block text-center text-amber-800 hover:text-amber-600 font-semibold transition-colors text-lg py-2">Encyclopedia</Link>
            </div>
          )}
        </header>

        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/forces/:alignment" element={<ForcesPage />} />
            <Route path="/encyclopedia" element={<EncyclopediaPage />} />
            <Route path="/encyclopedia/:category" element={<EncyclopediaCategoryPage />} />
          </Routes>
        </main>

        <footer className="bg-stone-200/90 text-center p-6 text-sm text-stone-600 shadow-t-lg backdrop-blur-sm border-t-2 border-amber-800">
          <p>&copy; {new Date().getFullYear()} MESBG Builder. Inspired by the works of J.R.R. Tolkien.</p>
          <p className="text-xs mt-1 text-stone-500">All character names, items, and concepts are property of their respective owners. This is a fan-made tool.</p>
        </footer>

        {/* PWA Install Banner */}
        {isInstallable && (
          <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 animate-slide-in-bottom">
            <div className="container mx-auto bg-stone-200/95 backdrop-blur-sm rounded-lg shadow-2xl border-2 border-amber-800 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                 <Logo />
                 <div>
                    <h3 className="font-['Cinzel',serif] font-bold text-amber-900 text-lg">Install MESBG Builder</h3>
                    <p className="text-stone-700 text-sm">Add to your home screen for quick access and offline use.</p>
                 </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleInstallClick}
                  className="bg-amber-800 hover:bg-amber-900 text-stone-100 font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105 shadow-lg"
                  aria-label="Install MESBG Builder App"
                >
                  Install
                </button>
                <button
                  onClick={handleDismissInstall}
                  className="text-stone-600 hover:text-stone-800 p-2"
                  aria-label="Dismiss install prompt"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </HashRouter>
  );
};

export default App;