import React, { useRef, useEffect, useState } from 'react';
import { X, Moon, Smile, MousePointer, Swords, Users } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useTheme();
  const [attackRatio, setAttackRatio] = useState(25);
  const [troopsRatio, setTroopsRatio] = useState(95);
  const [emojis, setEmojis] = useState(true);
  const [leftClickMenu, setLeftClickMenu] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 200);
  };
  
  if (!isOpen) return null;
  
  return (
    <div 
      className={`fixed inset-0 z-50 overflow-auto flex bg-black/80 backdrop-blur-sm modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div 
        ref={modalRef}
        className={`relative m-auto w-full max-w-2xl bg-black/90 border border-amber-500/20 shadow-xl p-6 modal-content ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-mono text-2xl text-amber-500">USER SETTINGS</h2>
          <button 
            onClick={handleClose}
            className="text-amber-500/70 hover:text-amber-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="pixel-panel p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Moon size={20} className="text-amber-500/70" />
                <div>
                  <div className="font-mono text-amber-500">DARK MODE</div>
                  <div className="text-sm text-amber-500/50">Toggle the site's appearance between light and dark themes</div>
                </div>
              </div>
              <button
                onClick={toggleTheme}
                className={`w-14 h-7 flex items-center rounded-none relative transition-colors duration-200 ${
                  theme === 'dark' ? 'bg-amber-500/30' : 'bg-black/50'
                } border border-amber-500/20`}
              >
                <div className={`w-5 h-5 bg-amber-500 transform transition-transform duration-200 ${
                  theme === 'dark' ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div className="pixel-panel p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Smile size={20} className="text-amber-500/70" />
                <div>
                  <div className="font-mono text-amber-500">EMOJIS</div>
                  <div className="text-sm text-amber-500/50">Toggle whether emojis are shown in game</div>
                </div>
              </div>
              <button
                onClick={() => setEmojis(!emojis)}
                className={`w-14 h-7 flex items-center rounded-none relative transition-colors duration-200 ${
                  emojis ? 'bg-amber-500/30' : 'bg-black/50'
                } border border-amber-500/20`}
              >
                <div className={`w-5 h-5 bg-amber-500 transform transition-transform duration-200 ${
                  emojis ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div className="pixel-panel p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MousePointer size={20} className="text-amber-500/70" />
                <div>
                  <div className="font-mono text-amber-500">LEFT CLICK TO OPEN MENU</div>
                  <div className="text-sm text-amber-500/50">
                    When ON, left-click opens menu and sword button attacks.
                  </div>
                </div>
              </div>
              <button
                onClick={() => setLeftClickMenu(!leftClickMenu)}
                className={`w-14 h-7 flex items-center rounded-none relative transition-colors duration-200 ${
                  leftClickMenu ? 'bg-amber-500/30' : 'bg-black/50'
                } border border-amber-500/20`}
              >
                <div className={`w-5 h-5 bg-amber-500 transform transition-transform duration-200 ${
                  leftClickMenu ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>
          </div>

          <div className="pixel-panel p-4">
            <div className="flex items-center gap-3 mb-3">
              <Swords size={20} className="text-amber-500/70" />
              <div>
                <div className="font-mono text-amber-500">ATTACK RATIO</div>
                <div className="text-sm text-amber-500/50">
                  What percentage of your troops to send in an attack (1-100%)
                </div>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={attackRatio}
              onChange={(e) => setAttackRatio(parseInt(e.target.value))}
              className="w-full h-2 appearance-none cursor-pointer bg-black/50 border border-amber-500/20"
              style={{
                background: `linear-gradient(to right, rgba(245, 158, 11, 0.3) ${attackRatio}%, rgba(0, 0, 0, 0.5) ${attackRatio}%)`,
              }}
            />
            <div className="text-center mt-2 font-mono text-amber-500/70">{attackRatio}%</div>
          </div>

          <div className="pixel-panel p-4">
            <div className="flex items-center gap-3 mb-3">
              <Users size={20} className="text-amber-500/70" />
              <div>
                <div className="font-mono text-amber-500">TROOPS AND WORKERS RATIO</div>
                <div className="text-sm text-amber-500/50">
                  Adjust the balance between troops (for combat) and workers (for gold production) (1-100%)
                </div>
              </div>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={troopsRatio}
              onChange={(e) => setTroopsRatio(parseInt(e.target.value))}
              className="w-full h-2 appearance-none cursor-pointer bg-black/50 border border-amber-500/20"
              style={{
                background: `linear-gradient(to right, rgba(245, 158, 11, 0.3) ${troopsRatio}%, rgba(0, 0, 0, 0.5) ${troopsRatio}%)`,
              }}
            />
            <div className="text-center mt-2 font-mono text-amber-500/70">{troopsRatio}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;