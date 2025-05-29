import React, { useRef, useEffect, useState } from 'react';
import { X, User, Mail } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
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
        className={`relative m-auto w-full max-w-md bg-black/90 border border-amber-500/20 shadow-xl p-6 modal-content ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-mono text-2xl text-amber-500">SIGN IN</h2>
          <button 
            onClick={handleClose}
            className="text-amber-500/70 hover:text-amber-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="mx-auto w-12 h-12 pixel-panel flex items-center justify-center mb-4">
            <User className="text-amber-500" size={24} />
          </div>
          <p className="text-amber-500/70 font-mono">
            Enter a username to play OpenFront
          </p>
        </div>
        
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="pixel-panel p-4">
            <label htmlFor="username" className="block font-mono text-amber-500 mb-2">
              USERNAME
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-amber-500/50" />
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="terminal-input pl-10"
                placeholder="trueANON"
                style={{ caretColor: '#F59E0B' }}
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full pixel-button flex items-center justify-center gap-2 group"
          >
            <User size={18} className="group-hover:text-amber-400" />
            SIGN IN
          </button>
          
          <div className="text-center">
            <p className="text-sm text-amber-500/50">
              By signing in, you agree to our{' '}
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;