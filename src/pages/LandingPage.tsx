import React, { useState } from 'react';
import { Settings, User, Mail, LogIn, Users, Swords, BookOpen, Languages, Bell } from 'lucide-react';
import { useTheme } from '../components/theme/ThemeProvider';
import Logo from '../components/ui/Logo';
import LoginModal from '../components/modals/LoginModal';
import SettingsModal from '../components/modals/SettingsModal';
import LanguageModal from '../components/modals/LanguageModal';
import InstructionsModal from '../components/modals/InstructionsModal';
import JoinGameModal from '../components/modals/JoinGameModal';
import CreateLobbyModal from '../components/modals/CreateLobbyModal';
import NewsModal from '../components/modals/NewsModal';
import GameCard from '../components/ui/GameCard';

const LandingPage: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);
  const [isJoinGameModalOpen, setIsJoinGameModalOpen] = useState(false);
  const [isCreateLobbyModalOpen, setIsCreateLobbyModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<null | {
    type: string;
    title: string;
    date: string;
    description: string;
  }>(null);
  const [username, setUsername] = useState('');

  const news = [
    {
      type: 'EVENT',
      title: 'Weekend tournament starting soon',
      date: '5h ago',
      description: 'Join the battle for glory and prizes this weekend!'
    },
    {
      type: 'PATCH',
      title: 'Balance Update v22.6.1',
      date: '1d ago',
      description: '• Fixed alliance request bug\n• Adjusted resource generation rates'
    }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://wallpapercave.com/wp/wp1813846.jpg)',
            filter: 'blur(4px) brightness(0.2)',
            imageRendering: 'pixelated'
          }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30"></div>
        {/* Header <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>*/}
      </div>

      <div className="scanlines"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <Logo size="lg" />
          <button
            onClick={() => setIsLoginModalOpen(true)}
            className="pixel-button"
          >
            <User size={18} className="inline-block mr-2" />
            <span>SIGN IN</span>
          </button>
        </div>

        {/* Game Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Game Area and Buttons */}
          <div className="lg:col-span-8 space-y-8">
            <GameCard
              title="Gateway to the Atlantic"
              image="https://openfront.io/images/AfricaThumb.2e6cfd49ef4b0e214f47.webp"
              players={{ current: 58, max: 100 }}
              teams={6}
              timeRemaining="34s"
              isHighlighted={true}
            />

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              {/* Primary Actions */}
              <div className="space-y-4">
                <button 
                  onClick={() => setIsJoinGameModalOpen(true)}
                  className="w-full pixel-button flex items-center justify-center"
                >
                  <Users size={18} className="mr-2" />
                  JOIN GAME
                </button>
                <button 
                  onClick={() => {}}
                  className="w-full pixel-button flex items-center justify-center"
                >
                  <User size={18} className="mr-2" />
                  SINGLE PLAYER
                </button>
              </div>

              {/* Secondary Actions */}
              <div className="space-y-4">
                <button 
                  onClick={() => setIsCreateLobbyModalOpen(true)}
                  className="w-full pixel-button flex items-center justify-center"
                >
                  <Swords size={18} className="mr-2" />
                  CREATE GAME
                </button>
                <button 
                  onClick={() => setIsInstructionsModalOpen(true)}
                  className="w-full pixel-button flex items-center justify-center"
                >
                  <BookOpen size={18} className="mr-2" />
                  INSTRUCTIONS
                </button>
              </div>

              {/* Language Selection - Full Width */}
              <div className="col-span-2">
                <button 
                  onClick={() => setIsLanguageModalOpen(true)}
                  className="w-full pixel-button flex items-center justify-center gap-2"
                >
                  <Languages size={18} />
                  <span className="text-base">🇺🇸</span> US English (English)
                </button>
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="lg:col-span-4 space-y-4">
            {/* Quick Join */}
            <div className="pixel-panel p-4">
              <h3 className="font-pixel text-2xl font-light mb-4">QUICK JOIN</h3>
              <div className="relative">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="ENTER USERNAME..."
                  className="w-full terminal-input text-sm font-light"
                  style={{ caretColor: '#F59E0B' }}
                />
              </div>
            </div>

            {/* Server Stats */}
            <div className="pixel-panel p-4">
              <h3 className="font-pixel text-2xl font-light mb-4">SERVER STATUS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-light text-amber-500/70">PLAYERS ONLINE</span>
                  <span className="text-sm font-light text-green-400">1,240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-light text-amber-500/70">ACTIVE GAMES</span>
                  <span className="text-sm font-light text-amber-500">42</span>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="pixel-panel p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-pixel text-2xl font-light">LATEST NEWS</h3>
                <Bell size={18} className="text-amber-500/50" />
              </div>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div 
                    key={index} 
                    className="pixel-panel p-3 hover:bg-black/50 transition-all cursor-pointer group"
                    onClick={() => setSelectedNews(item)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-light px-2 py-0.5 ${
                        item.type === 'EVENT' ? 'bg-green-600' : 'bg-orange-600'
                      }`}>
                        {item.type}
                      </span>
                      <span className="text-sm font-light text-amber-500/50">{item.date}</span>
                    </div>
                    <h4 className="font-pixel text-xl font-light mb-1 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs font-light text-amber-500/70 whitespace-pre-line">
                      {item.description}
                    </p>
                    <span className="text-xs font-light text-amber-400 hover:text-amber-300 transition-colors">
                      Read more...
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsSettingsModalOpen(true)}
          className="pixel-button p-3"
        >
          <Settings size={24} />
        </button>
      </div>

      {/* Footer */}
      <div className="w-full bg-black/80 backdrop-blur-sm border-t border-amber-500/20 mt-20 ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center text-base font-light text-amber-500/70  font-pixel">
            <div className="flex gap-4">
              <a href="#" className="hover:text-amber-400 transition-colors ">How to Play</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Wiki</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Join the Discord!</a>
            </div>
            <div className="flex gap-4">
              <span>©2025 OpenFront™</span>
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <SettingsModal isOpen={isSettingsModalOpen} onClose={() => setIsSettingsModalOpen(false)} />
      <LanguageModal isOpen={isLanguageModalOpen} onClose={() => setIsLanguageModalOpen(false)} />
      <InstructionsModal isOpen={isInstructionsModalOpen} onClose={() => setIsInstructionsModalOpen(false)} />
      <JoinGameModal isOpen={isJoinGameModalOpen} onClose={() => setIsJoinGameModalOpen(false)} />
      <CreateLobbyModal isOpen={isCreateLobbyModalOpen} onClose={() => setIsCreateLobbyModalOpen(false)} />
      {selectedNews && (
        <NewsModal 
          isOpen={true} 
          onClose={() => setSelectedNews(null)} 
          news={selectedNews}
        />
      )}
    </div>
  );
};

export default LandingPage;