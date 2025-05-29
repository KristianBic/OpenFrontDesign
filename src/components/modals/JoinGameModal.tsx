import React, { useState, useRef, useEffect } from 'react';
import { X, Users, Copy } from 'lucide-react';

interface JoinGameModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinGameModal: React.FC<JoinGameModalProps> = ({ isOpen, onClose }) => {
  const [lobbyId, setLobbyId] = useState('');
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
  
  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle join logic here
    console.log('Joining lobby:', lobbyId);
  };
  
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
          <h2 className="font-mono text-2xl text-amber-500">JOIN PRIVATE LOBBY</h2>
          <button 
            onClick={handleClose}
            className="text-amber-500/70 hover:text-amber-400 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleJoin} className="space-y-6">
          <div className="pixel-panel p-4">
            <label htmlFor="lobbyId" className="block font-mono text-amber-500 mb-2">
              ENTER LOBBY ID
            </label>
            <div className="relative">
              <input
                type="text"
                id="lobbyId"
                value={lobbyId}
                onChange={(e) => setLobbyId(e.target.value)}
                className="terminal-input"
                placeholder="Enter lobby ID..."
                style={{ caretColor: '#F59E0B' }}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-500/70 hover:text-amber-400 transition-colors"
                onClick={() => navigator.clipboard.readText().then(text => setLobbyId(text))}
              >
                <Copy size={18} />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full pixel-button flex items-center justify-center gap-2 group"
          >
            <Users size={18} className="group-hover:text-amber-400" />
            JOIN LOBBY
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinGameModal;