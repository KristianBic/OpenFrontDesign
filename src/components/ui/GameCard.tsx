import React, { useState } from 'react';
import { Users, Clock } from 'lucide-react';

interface GameCardProps {
  title: string;
  image: string;
  players: {
    current: number;
    max: number;
  };
  teams: number;
  timeRemaining: string;
  isHighlighted?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ 
  title, 
  image, 
  players, 
  teams, 
  timeRemaining,
  isHighlighted = false
}) => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div 
      className={`pixel-panel p-4 rounded-none h-full cursor-pointer transition-all duration-300 hover:bg-black/80 ${
        isToggled ? 'border-amber-500/50 bg-black/90' : ''
      }`}
      onClick={() => setIsToggled(!isToggled)}
    >
      <div className="relative h-64 mb-4">
        <img 
          src={image} 
          alt={title}
          className="absolute inset-0 w-full h-full object-cover bg-black"
          style={{ imageRendering: 'pixelated' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className={`font-pixel text-3xl font-light mb-2 transition-colors duration-300 ${
            isToggled ? 'text-amber-400' : 'text-amber-500'
          }`}>{title}</h3>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 text-amber-500 text-sm font-pixel font-light transition-colors duration-300 bg-black/80 border border-amber-500/20`}>
              EUROPE
            </span>
            {isHighlighted && (
              <span className="px-2 py-1 bg-green-600 text-white text-sm font-pixel font-light animate-pulse">
                STARTING
              </span>
            )}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        <div className={`pixel-panel p-3 transition-all duration-300 ${
          isToggled ? 'bg-black/80 border-amber-500/50' : ''
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <Users size={16} className={`transition-colors duration-300 ${
              isToggled ? 'text-amber-400' : 'text-amber-500'
            }`} />
            <span className="font-pixel text-xs font-light text-amber-500/70">PLAYERS</span>
          </div>
          <p className={`font-pixel text-base font-light transition-colors duration-300 ${
            isToggled ? 'text-amber-400' : 'text-amber-500'
          }`}>
            {players.current}/{players.max}
          </p>
        </div>
        
        <div className={`pixel-panel p-3 transition-all duration-300 ${
          isToggled ? 'bg-black/80 border-amber-500/50' : ''
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-4 h-4 flex items-center justify-center transition-colors duration-300 ${
              isToggled ? 'text-amber-400' : 'text-amber-500'
            } font-light`}>T</div>
            <span className="font-pixel text-xs font-light text-amber-500/70">TEAMS</span>
          </div>
          <p className={`font-pixel text-base font-light transition-colors duration-300 ${
            isToggled ? 'text-amber-400' : 'text-amber-500'
          }`}>{teams}</p>
        </div>
        
        <div className={`pixel-panel p-3 transition-all duration-300 ${
          isToggled ? 'bg-black/80 border-amber-500/50' : ''
        }`}>
          <div className="flex items-center gap-2 mb-1">
            <Clock size={16} className={`transition-colors duration-300 ${
              isToggled ? 'text-amber-400' : 'text-amber-500'
            }`} />
            <span className="font-pixel text-xs font-light text-amber-500/70">TIME</span>
          </div>
          <p className={`font-pixel text-base font-light animate-pulse transition-colors duration-300 ${
            isToggled ? 'text-amber-400' : 'text-amber-500'
          }`}>{timeRemaining}</p>
        </div>
      </div>
    </div>
  );
};

export default GameCard