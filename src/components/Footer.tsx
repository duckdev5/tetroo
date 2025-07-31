import React from 'react';
import { Github, Heart, Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-purple-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Tetris Arena</h3>
                <p className="text-sm text-gray-400">Custom Game Portal</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience the classic puzzle game reimagined for the modern web. 
              Built with passion and cutting-edge technologies.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#game" className="text-gray-400 hover:text-cyan-400 transition-colors">Play Game</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">High Scores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-purple-600 p-3 rounded-lg transition-colors group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-pink-600 p-3 rounded-lg transition-colors group"
                aria-label="Support"
              >
                <Heart className="h-5 w-5 text-gray-400 group-hover:text-white" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Support this project and help us create more amazing games!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tetris Arena. Made with <Heart className="h-4 w-4 text-red-500 inline mx-1" /> for puzzle game enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;