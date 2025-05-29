import React, { useState, useEffect } from 'react';
import { User, Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo size={isScrolled ? 'sm' : 'lg'} />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#featured-game" className="nav-link">Play Now</a>
          <a href="#game-modes" className="nav-link">Game Modes</a>
          <a href="#" className="nav-link">How to Play</a>
          <a href="#" className="nav-link">Community</a>
          <button 
            onClick={onLoginClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
          >
            <User size={18} />
            <span>Login</span>
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-700 dark:text-slate-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-slate-900 md:hidden pt-20">
          <nav className="flex flex-col items-center space-y-6 p-6">
            <a 
              href="#featured-game" 
              className="text-xl font-semibold text-slate-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Play Now
            </a>
            <a 
              href="#game-modes" 
              className="text-xl font-semibold text-slate-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Game Modes
            </a>
            <a 
              href="#" 
              className="text-xl font-semibold text-slate-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How to Play
            </a>
            <a 
              href="#" 
              className="text-xl font-semibold text-slate-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Community
            </a>
            <button 
              onClick={() => {
                onLoginClick();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white w-full justify-center"
            >
              <User size={18} />
              <span>Login</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;