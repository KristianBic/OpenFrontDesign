import React, { useState } from 'react';
import { Settings, Users, X, Pause, ChevronDown } from 'lucide-react';

interface GamePageProps {
  onExitGame: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ onExitGame }) => {
  const [showLeaderboard, setShowLeaderboard] = useState(true);
  const [troopsRatio, setTroopsRatio] = useState(95);
  const [attackRatio, setAttackRatio] = useState(25);

  const leaderboardData = [
    { rank: 1, name: 'Antarctica', owned: '0.18%', gold: 780, troops: '2.97K' },
    { rank: 2, name: 'United States', owned: '0.17%', gold: 729, troops: '3.60K' },
    { rank: 3, name: 'United Kingdom', owned: '0.17%', gold: 813, troops: '3.77K' },
    { rank: 4, name: 'France', owned: '0.13%', gold: 299, troops: '3.41K' },
    { rank: 437, name: 'trueANON', owned: '0%', gold: 179, troops: '7.33K' },
  ];

  return (
    <div className="relative h-screen bg-slate-900 overflow-hidden">
      {/* Game Container with Padding */}
      <div className="absolute inset-8 bg-slate-900/20">
        {/* Game Map */}
        <div className="w-full h-full relative">
          <img 
            src="https://openfront.io/images/WorldMapThumb.7e3d37714e416fcd65ed.webp"
            alt="Game Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-slate-900/95 border-b border-slate-800">
        <div className="flex items-center justify-between px-2 py-1">
          {/* Hide/Show All Toggle */}
          <div className="flex items-center gap-2">
            <button className="text-xs text-white hover:text-slate-300 transition-colors font-pixel">
              Hide
            </button>
            <button className="text-xs text-white hover:text-slate-300 transition-colors font-pixel">
              Show All
            </button>
          </div>

          {/* Leaderboard */}
          <div className="flex-1 mx-4">
            <div className="relative">
              <button 
                onClick={() => setShowLeaderboard(!showLeaderboard)}
                className="w-full flex items-center justify-between px-2"
              >
                <ChevronDown 
                  size={14} 
                  className={`text-slate-400 transform transition-transform ${showLeaderboard ? 'rotate-180' : ''}`}
                />
              </button>
              
              {showLeaderboard && (
                <div className="absolute top-full left-0 right-0 bg-slate-900/95 border border-slate-800 shadow-lg z-50">
                  <table className="w-full text-xs font-pixel">
                    <thead>
                      <tr className="text-slate-400">
                        <th className="text-left p-1 text-[10px]">Rank</th>
                        <th className="text-left p-1 text-[10px]">Player</th>
                        <th className="text-left p-1 text-[10px]">Owned</th>
                        <th className="text-right p-1 text-[10px]">Gold</th>
                        <th className="text-right p-1 text-[10px]">Troops</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboardData.map((player) => (
                        <tr key={player.rank} className="text-white border-t border-slate-800/50">
                          <td className="p-1 text-[10px]">{player.rank}</td>
                          <td className="p-1 text-[10px]">{player.name}</td>
                          <td className="p-1 text-[10px]">{player.owned}</td>
                          <td className="p-1 text-right text-[10px]">{player.gold}</td>
                          <td className="p-1 text-right text-[10px]">{player.troops}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 text-white">
            <button className="hover:text-slate-300 transition-colors">
              <Pause size={14} />
            </button>
            <span className="text-[10px] font-pixel">14s</span>
            <button className="hover:text-slate-300 transition-colors">
              <X size={14} />
            </button>
            <button 
              onClick={onExitGame}
              className="hover:text-slate-300 transition-colors"
            >
              <Settings size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Left Control Panel */}
      <div className="absolute left-0 bottom-0 w-56 bg-slate-900/95 border-r border-t border-slate-800 p-2">
        <div className="space-y-2">
          {/* Population */}
          <div>
            <div className="flex justify-between text-[10px] mb-1 font-pixel">
              <span className="text-slate-400">Pop:</span>
              <span className="text-white">8.02K / 12.1K (+326)</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-none overflow-hidden">
              <div className="h-full bg-blue-600" style={{ width: '66%' }}></div>
            </div>
          </div>

          {/* Gold */}
          <div>
            <div className="flex justify-between text-[10px] mb-1 font-pixel">
              <span className="text-slate-400">Gold:</span>
              <span className="text-white">197 (+22)</span>
            </div>
            <div className="h-1 bg-slate-800 rounded-none overflow-hidden">
              <div className="h-full bg-yellow-600" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Troops & Workers */}
          <div>
            <div className="flex justify-between text-[10px] mb-1 font-pixel">
              <span className="text-slate-400">Troops: 7.61K | Workers: 401</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={troopsRatio}
              onChange={(e) => setTroopsRatio(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-none appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #384d6f ${troopsRatio}%, #1e293b ${troopsRatio}%)`,
              }}
            />
          </div>

          {/* Attack Ratio */}
          <div>
            <div className="flex justify-between text-[10px] mb-1 font-pixel">
              <span className="text-slate-400">Attack Ratio: 25% (1.90K)</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={attackRatio}
              onChange={(e) => setAttackRatio(parseInt(e.target.value))}
              className="w-full h-1 bg-slate-800 rounded-none appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #4b3f3f ${attackRatio}%, #1e293b ${attackRatio}%)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Right Info Panel */}
      <div className="absolute right-0 top-8 bg-slate-900/95 border-l border-slate-800 p-2">
        <div className="w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-500 rounded-none"></div>
            <span className="text-white text-[10px] font-pixel">Australia</span>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Type:</span>
              <span className="text-white text-[10px] font-pixel">Nation</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Defending troops:</span>
              <span className="text-white text-[10px] font-pixel">4.55K</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Gold:</span>
              <span className="text-white text-[10px] font-pixel">360</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Ports:</span>
              <span className="text-white text-[10px] font-pixel">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Cities:</span>
              <span className="text-white text-[10px] font-pixel">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Missile launchers:</span>
              <span className="text-white text-[10px] font-pixel">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">SAMs:</span>
              <span className="text-white text-[10px] font-pixel">0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-[10px] font-pixel">Attitude:</span>
              <span className="text-white text-[10px] font-pixel">Neutral</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;