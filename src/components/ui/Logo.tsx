import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'text-lg md:text-xl',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };
  
  return (
    <div className="flex items-center">
      <div className={`font-mono font-extralight ${sizeClasses[size]} text-amber-500/90`}
        style={{ textShadow: '0 0 10px rgba(245, 158, 11, 0.5)' }}>
        OPENFRONT
      </div>
      <div className="ml-2 text-sm font-mono font-thin text-amber-500/50">v22.6</div>
    </div>
  );
};

export default Logo