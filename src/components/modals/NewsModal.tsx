import React, { useState, useRef, useEffect } from 'react';
import { X, Bell, Calendar } from 'lucide-react';

interface NewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  news: {
    type: string;
    title: string;
    date: string;
    description: string;
    fullContent?: string;
  };
}

const NewsModal: React.FC<NewsModalProps> = ({ isOpen, onClose, news }) => {
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

  const fullContent = news.type === 'EVENT' ? (
    <>
      <h4 className="text-lg font-mono text-amber-500 mb-4">SCHEDULE</h4>
      <ul className="list-disc pl-4 mb-6 text-amber-500/70">
        <li>Start: Saturday, 12:00 UTC</li>
        <li>Duration: 48 hours</li>
        <li>Finals: Sunday, 20:00 UTC</li>
      </ul>

      <h4 className="text-lg font-mono text-amber-500 mb-4">PRIZES</h4>
      <ul className="list-disc pl-4 mb-6 text-amber-500/70">
        <li>1st Place: 10,000 Gold + Exclusive Commander Title</li>
        <li>2nd Place: 5,000 Gold + Special Profile Badge</li>
        <li>3rd Place: 2,500 Gold</li>
      </ul>

      <h4 className="text-lg font-mono text-amber-500 mb-4">RULES</h4>
      <p className="text-amber-500/70">
        Standard tournament rules apply. No alliances allowed. Victory achieved through territorial control.
      </p>
    </>
  ) : (
    <>
      <h4 className="text-lg font-mono text-amber-500 mb-4">CHANGES</h4>
      <ul className="list-disc pl-4 mb-6 text-amber-500/70">
        <li>Improved troop movement AI for more strategic positioning</li>
        <li>Fixed alliance request bug that prevented some players from forming alliances</li>
      </ul>

      <h4 className="text-lg font-mono text-amber-500 mb-4">ADDITIONAL INFORMATION</h4>
      <p className="text-amber-500/70">
        For a complete list of changes, visit our changelog page.
      </p>
    </>
  );
  
  return (
    <div 
      className={`fixed inset-0 z-50 overflow-auto flex bg-black/80 backdrop-blur-sm modal-overlay ${isClosing ? 'closing' : ''}`}
      onClick={handleClose}
    >
      <div 
        ref={modalRef}
        className={`relative m-auto w-full max-w-2xl bg-black/90 border border-amber-500/20 shadow-xl modal-content ${isClosing ? 'closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-amber-500/20">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Bell className="text-amber-500" size={24} />
                <span className={`text-xs font-mono px-2 py-0.5 ${
                  news.type === 'EVENT' ? 'bg-green-600' : 'bg-orange-600'
                } text-black`}>
                  {news.type}
                </span>
              </div>
              <button 
                onClick={handleClose}
                className="text-amber-500/70 hover:text-amber-400 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <h2 className="font-mono text-3xl text-amber-500 mb-3">{news.title}</h2>
            <div className="flex items-center gap-2 text-sm text-amber-500/50">
              <Calendar size={14} />
              <span>{news.date}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {fullContent}
        </div>

        {/* Footer */}
        <div className="border-t border-amber-500/20 p-6">
          <button 
            onClick={handleClose}
            className="px-4 py-2 text-sm text-amber-500/70 hover:text-amber-400 transition-colors font-mono"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;