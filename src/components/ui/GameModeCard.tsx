import React from 'react';
import { ArrowRight } from 'lucide-react';

interface GameModeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const GameModeCard: React.FC<GameModeCardProps> = ({ title, description, icon }) => {
  return (
    <div className="pixel-panel p-6 hover:bg-amber-500/10 transition-all duration-300 group cursor-pointer">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-mono text-amber-500 mb-2">{title}</h3>
      <p className="text-amber-500/70 mb-4 text-sm">{description}</p>
      <div className="flex items-center text-sm font-mono text-amber-500/70 group-hover:text-amber-500 transition-colors">
        <span>PLAY NOW</span>
        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
};

export default GameModeCard;