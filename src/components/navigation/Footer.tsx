import React from 'react';
import { Github, Twitter, Disc as Discord } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm">
              OpenFront is a real-time strategy browser game where players compete for territory and resources.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Discord size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Game</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs font-light">How to Play</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Game Modes</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Strategy Guide</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Leaderboard</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Discord Server</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Forums</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Events</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs">Tournaments</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-800 dark:text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">FAQ</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">Contact</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-700/50 mt-12 pt-6 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy;2025 OpenFront™. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;