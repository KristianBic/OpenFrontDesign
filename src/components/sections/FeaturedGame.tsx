import React from 'react';
import GameCard from '../ui/GameCard';

const FeaturedGame: React.FC = () => {
  return (
    <div className="w-full h-full">
      <GameCard
        title="Gateway to the Atlantic"
        image="https://images.pexels.com/photos/3560168/pexels-photo-3560168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        players={{ current: 58, max: 100 }}
        teams={6}
        timeRemaining="34s"
        isHighlighted={true}
      />
    </div>
  );
};

export default FeaturedGame;