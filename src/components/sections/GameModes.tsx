import React from 'react';
import { Swords, Target, Shield, Zap } from 'lucide-react';
import GameModeCard from '../ui/GameModeCard';

const GameModes: React.FC = () => {
  const gameModes = [
    {
      id: 'multiplayer',
      title: 'Multiplayer',
      description: 'Battle against other players in real-time strategy combat with up to 100 players on a single map.',
      icon: <Swords className="text-amber-500" size={24} />,
      color: 'amber'
    },
    {
      id: 'conquest',
      title: 'Conquest',
      description: 'Capture and hold strategic points on the map to accumulate points and achieve victory.',
      icon: <Target className="text-amber-500\" size={24} />,
      color: 'amber'
    },
    {
      id: 'defense',
      title: 'Defense',
      description: 'Fortify your position and withstand waves of enemy attacks in this survival mode.',
      icon: <Shield className="text-amber-500" size={24} />,
      color: 'amber'
    },
    {
      id: 'blitz',
      title: 'Blitz',
      description: 'Fast-paced matches with accelerated resource gathering and unit production.',
      icon: <Zap className="text-amber-500\" size={24} />,
      color: 'amber'
    }
  ];

  return (
    <section id="game-modes" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-mono text-amber-500 mb-4">
            GAME MODES
          </h2>
          <p className="text-amber-500/70 max-w-2xl mx-auto">
            Explore different ways to play OpenFront with various objectives and challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gameModes.map(mode => (
            <GameModeCard
              key={mode.id}
              title={mode.title}
              description={mode.description}
              icon={mode.icon}
              color={mode.color}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 pixel-button">
            VIEW ALL GAME MODES
          </button>
        </div>
      </div>
    </section>
  );
};

export default GameModes;