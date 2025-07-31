import React from 'react';
import { Gamepad2, Home, Info, Settings } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
              <Gamepad2 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Tetris Arena
              </h1>
              <p className="text-xs text-gray-400">Custom Game Portal</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="#game" className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <Gamepad2 className="h-4 w-4" />
              <span>Play</span>
            </a>
            <a href="#about" className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors">
              <Info className="h-4 w-4" />
              <span>About</span>
            </a>
            <button className="flex items-center space-x-2 text-gray-300 hover:text-yellow-400 transition-colors">
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;