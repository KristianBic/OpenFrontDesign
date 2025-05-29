import React, { useState, useRef, useEffect } from 'react';
import { X, Keyboard, Layout, Sliders, Settings, Menu, Info, Users, Building, Crown } from 'lucide-react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'hotkeys' | 'gameui' | 'control' | 'options' | 'radial' | 'info' | 'ally' | 'build' | 'icons';

const InstructionsModal: React.FC<InstructionsModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<TabType>('hotkeys');
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

  const tabs = [
    { id: 'hotkeys' as TabType, label: 'HOTKEYS', icon: <Keyboard size={18} /> },
    { id: 'gameui' as TabType, label: 'GAME UI', icon: <Layout size={18} /> },
    { id: 'control' as TabType, label: 'CONTROL PANEL', icon: <Sliders size={18} /> },
    { id: 'options' as TabType, label: 'OPTIONS', icon: <Settings size={18} /> },
    { id: 'radial' as TabType, label: 'RADIAL MENU', icon: <Menu size={18} /> },
    { id: 'info' as TabType, label: 'INFO MENU', icon: <Info size={18} /> },
    { id: 'ally' as TabType, label: 'ALLY INFO', icon: <Users size={18} /> },
    { id: 'build' as TabType, label: 'BUILD MENU', icon: <Building size={18} /> },
    { id: 'icons' as TabType, label: 'PLAYER ICONS', icon: <Crown size={18} /> },
  ];
  
  return (
    <div 
      className={`fixed inset-0 z-50 overflow-auto flex bg-black/80 backdrop-blur-sm modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div 
        ref={modalRef}
        className={`relative m-auto w-full max-w-7xl h-[85vh] bg-black/90 border border-amber-500/20 shadow-xl modal-content ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-amber-500/20">
          <h2 className="font-mono text-2xl text-amber-500">INSTRUCTIONS</h2>
          <button 
            onClick={handleClose}
            className="text-amber-500/70 hover:text-amber-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex h-[calc(85vh-80px)]">
          {/* Left Side Tabs */}
          <div className="pixel-panel p-1 w-56 flex flex-col border-r border-amber-500/20">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-mono text-sm transition-all ${
                  activeTab === tab.id
                    ? 'bg-amber-500/30 text-amber-500'
                    : 'text-amber-500/50 hover:text-amber-500 hover:bg-amber-500/10'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="pixel-panel p-8 flex-1 overflow-y-auto custom-scrollbar">
            {activeTab === 'hotkeys' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">HOTKEYS</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'Space', action: 'Alternate view (terrain/countries)' },
                    { key: 'Shift + Click', action: 'Attack (when left click is set to open menu)' },
                    { key: 'Ctrl + Click', action: 'Open build menu' },
                    { key: 'Alt + Click', action: 'Open emote menu' },
                    { key: 'C', action: 'Center camera on player' },
                    { key: 'Q / E', action: 'Zoom out/in' },
                    { key: 'W A S D', action: 'Move camera' },
                    { key: '1 / 2', action: 'Decrease/Increase attack ratio' },
                    { key: 'Shift + Scroll', action: 'Decrease/Increase attack ratio' },
                    { key: 'Alt + R', action: 'Reset graphics' },
                  ].map((hotkey, index) => (
                    <div key={index} className="pixel-panel p-3 flex items-center justify-between">
                      <div className="flex gap-2 items-center">
                        {hotkey.key.split(' + ').map((k, i) => (
                          <React.Fragment key={i}>
                            <kbd className="px-2 py-1 bg-black/50 text-amber-500 font-mono border border-amber-500/20">{k}</kbd>
                            {i < hotkey.key.split(' + ').length - 1 && <span className="text-amber-500/50">+</span>}
                          </React.Fragment>
                        ))}
                      </div>
                      <span className="text-amber-500/70">{hotkey.action}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'gameui' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">GAME UI</h3>
                <div className="pixel-panel p-4">
                  <h4 className="font-mono text-lg text-amber-500 mb-2">LEADERBOARD</h4>
                  <p className="text-amber-500/70">Shows the top players of the game and their names, % owned land and gold.</p>
                  <div className="mt-4 bg-black/50 p-4 border border-amber-500/20">
                    <table className="w-full">
                      <thead>
                        <tr className="text-amber-500/50">
                          <th className="text-left">RANK</th>
                          <th className="text-left">PLAYER</th>
                          <th className="text-left">OWNED</th>
                          <th className="text-left">GOLD</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-amber-500">
                          <td>1</td>
                          <td>Antarctica</td>
                          <td>0.11%</td>
                          <td>6</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'control' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">CONTROL PANEL</h3>
                <div className="space-y-6">
                  <div className="pixel-panel p-4">
                    <h4 className="font-mono text-lg text-amber-500 mb-2">POPULATION</h4>
                    <p className="text-amber-500/70">The amount of units you have, your max population and the rate at which you gain them.</p>
                  </div>
                  <div className="pixel-panel p-4">
                    <h4 className="font-mono text-lg text-amber-500 mb-2">GOLD</h4>
                    <p className="text-amber-500/70">The amount of gold you have and the rate at which you gain it.</p>
                  </div>
                  <div className="pixel-panel p-4">
                    <h4 className="font-mono text-lg text-amber-500 mb-2">TROOPS AND WORKERS</h4>
                    <p className="text-amber-500/70">The amount of allocated troops and workers. Troops are used to attack/defend against attacks. Workers are used to generate gold. You can adjust the number of troops and workers using the slider.</p>
                  </div>
                  <div className="pixel-panel p-4">
                    <h4 className="font-mono text-lg text-amber-500 mb-2">ATTACK RATIO</h4>
                    <p className="text-amber-500/70">The amount of troops that will be used when you attack. You can adjust the attack ratio using the slider. Having more attacking troops than defending troops will make you lose fewer troops in the attack, while having less will increase the damage dealt to your attacking troops. The effect doesn't go beyond ratios of 2:1.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'options' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">OPTIONS</h3>
                <div className="space-y-4">
                  <div className="pixel-panel p-4">
                    <h4 className="font-mono text-lg text-amber-500 mb-2">GAME CONTROLS</h4>
                    <ul className="space-y-2 text-amber-500/70">
                      <li>• Pause/Unpause the game - Only available in single player mode.</li>
                      <li>• Timer - Time passed since the start of the game.</li>
                      <li>• Exit button.</li>
                      <li>• Settings - Open the settings menu. Inside you can toggle the Alternate View, Dark Mode, Emojis and action on left click.</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'radial' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">RADIAL MENU</h3>
                <div className="pixel-panel p-4">
                  <p className="text-amber-500/70 mb-4">Right clicking (or touch on mobile) opens the radial menu. From there you can:</p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">🔨</span>
                      </div>
                      <p className="text-amber-500/70">Open the build menu.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">ℹ️</span>
                      </div>
                      <p className="text-amber-500/70">Open the info menu.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">🚢</span>
                      </div>
                      <p className="text-amber-500/70">Send a boat to attack at the selected location (only available if you have access to water).</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">❌</span>
                      </div>
                      <p className="text-amber-500/70">Close the menu.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'info' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">INFO MENU</h3>
                <div className="pixel-panel p-4">
                  <h4 className="font-mono text-lg text-amber-500 mb-4">ENEMY INFO PANEL</h4>
                  <p className="text-amber-500/70 mb-4">Contains information about the selected player:</p>
                  <div className="bg-black/50 p-4 border border-amber-500/20 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-amber-500/50">Name:</span>
                        <span className="text-amber-500 ml-2">Etruscan Legion</span>
                      </div>
                      <div>
                        <span className="text-amber-500/50">Gold:</span>
                        <span className="text-amber-500 ml-2">12</span>
                      </div>
                      <div>
                        <span className="text-amber-500/50">Troops:</span>
                        <span className="text-amber-500 ml-2">790</span>
                      </div>
                      <div>
                        <span className="text-amber-500/50">Traitor:</span>
                        <span className="text-amber-500 ml-2">No</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span>🎯</span>
                      </div>
                      <p className="text-amber-500/70">Place a target mark on the player, marking it for all allies, used to coordinate attacks.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span>🤝</span>
                      </div>
                      <p className="text-amber-500/70">Send an alliance request to the player. Allies can share resources and troops, but can't attack each other.</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span>😊</span>
                      </div>
                      <p className="text-amber-500/70">Send an emoji to the player.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ally' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">ALLY INFO PANEL</h3>
                <div className="pixel-panel p-4">
                  <p className="text-amber-500/70 mb-6">When you ally with a player, the following new icons become available:</p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span>⚔️</span>
                      </div>
                      <div>
                        <h4 className="text-amber-500 font-mono">CROSSED SWORDS</h4>
                        <p className="text-amber-500/70">Betray your ally, ending the alliance. You will now have a permanent icon stuck next to your name, unless the other nation was a traitor themselves. Attacks against you will incur less losses for the attacker until the end of the game, bots are less likely to ally with you and players will think twice before doing so.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span>👥</span>
                      </div>
                      <div>
                        <h4 className="text-amber-500 font-mono">HANDSHAKE</h4>
                        <p className="text-amber-500/70">Donate some of your troops to your ally. Used when they're low on troops and are being attacked, or when they need that extra power to crush an enemy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'build' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">BUILD MENU</h3>
                <div className="grid gap-4">
                  {[
                    {
                      name: 'CITY',
                      icon: '🏢',
                      description: 'Increases your max population. Useful when you can\'t expand your territory or you\'re about to hit your population limit.'
                    },
                    {
                      name: 'DEFENSE POST',
                      icon: '🛡️',
                      description: 'Increases defenses around nearby borders. Attacks from enemies are slower and have more casualties.'
                    },
                    {
                      name: 'PORT',
                      icon: '⚓',
                      description: 'Automatically sends trade ships between ports of your country and other countries (except if you clicked "stop trade" on them or they clicked "stop trade" on you"), giving gold to both sides. Allows building battleships. Can only be built near water.'
                    },
                    {
                      name: 'WARSHIP',
                      icon: '🚢',
                      description: 'Patrols in an area, capturing trade ships and destroying enemy Warships and Boats. Spawns from the nearest Port and patrols the area you first clicked to build it. You can control their movement by attack-clicking on them and then attack-clicking the new area you want them to move to.'
                    },
                    {
                      name: 'MISSILE SILO',
                      icon: '🚀',
                      description: 'Allows launching missiles.'
                    },
                    {
                      name: 'SAM LAUNCHER',
                      icon: '🛡️',
                      description: 'Has a 75% chance to intercept enemy missiles in its 100 pixel range. The SAM has a 75 second cooldown and cannot intercept MIRVs.'
                    },
                    {
                      name: 'ATOM BOMB',
                      icon: '☢️',
                      description: 'Small explosive bomb that destroys territory, buildings, ships and boats. Spawns from the nearest Missile Silo and lands in the area you first clicked to build it.'
                    },
                    {
                      name: 'HYDROGEN BOMB',
                      icon: '💥',
                      description: 'Large explosive bomb. Spawns from the nearest Missile Silo and lands in the area you first clicked to build it.'
                    },
                    {
                      name: 'MIRV',
                      icon: '🎯',
                      description: 'The most powerful bomb in the game. Splits up into smaller bombs that will cover a huge range of territory. Only damages the player in the area that you first clicked on to build it. Spawns from the nearest Missile Silo and lands in the area you first clicked to build it.'
                    }
                  ].map((building, index) => (
                    <div key={index} className="pixel-panel p-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-8 h-8 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                          <span>{building.icon}</span>
                        </div>
                        <h4 className="font-mono text-lg text-amber-500">{building.name}</h4>
                      </div>
                      <p className="text-amber-500/70">{building.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'icons' && (
              <div className="space-y-4">
                <h3 className="font-mono text-xl text-amber-500 mb-4">PLAYER ICONS</h3>
                <div className="pixel-panel p-4">
                  <p className="text-amber-500/70 mb-6">Examples of some of the ingame icons you will encounter and what they mean:</p>
                  <div className="grid gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">👑</span>
                      </div>
                      <div>
                        <h4 className="text-amber-500 font-mono">CROWN</h4>
                        <p className="text-amber-500/70">This is the number 1 player in the leaderboard</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">⚔️</span>
                      </div>
                      <div>
                        <h4 className="text-amber-500 font-mono">CROSSED SWORDS</h4>
                        <p className="text-amber-500/70">Traitor. This player attacked an ally.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-black/50 border border-amber-500/20 flex items-center justify-center">
                        <span className="text-2xl">🤝</span>
                      </div>
                      <div>
                        <h4 className="text-amber-500 font-mono">HANDSHAKE</h4>
                        <p className="text-amber-500/70">Ally. This player is your ally.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;