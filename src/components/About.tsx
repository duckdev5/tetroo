import React from 'react';
import { Code, Gamepad2, Sparkles, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            About This Game
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A modern take on the beloved classic, built with cutting-edge web technologies 
            to deliver an exceptional gaming experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Code className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Modern Code</h3>
            <p className="text-gray-400 text-sm">Built with React, TypeScript, and modern web standards</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Gamepad2 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Classic Gameplay</h3>
            <p className="text-gray-400 text-sm">Authentic Tetris mechanics with modern enhancements</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Beautiful UI</h3>
            <p className="text-gray-400 text-sm">Stunning visual effects and smooth animations</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">High Performance</h3>
            <p className="text-gray-400 text-sm">Optimized for smooth 60fps gameplay experience</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/20 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">How to Play</h3>
              <div className="space-y-3 text-gray-300">
                <p>• Use arrow keys or WASD to control falling pieces</p>
                <p>• Rotate pieces to fit them into the grid</p>
                <p>• Complete horizontal lines to score points</p>
                <p>• Game speeds up as you progress through levels</p>
                <p>• Try to survive as long as possible!</p>
              </div>
            </div>
            <div className="bg-black/30 rounded-xl p-6 border border-cyan-500/20">
              <h4 className="text-lg font-semibold text-cyan-400 mb-3">Game Features</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✨ Smooth piece movement and rotation</li>
                <li>🎯 Progressive difficulty system</li>
                <li>🏆 High score tracking</li>
                <li>🎨 Modern visual effects</li>
                <li>📱 Responsive design for all devices</li>
                <li>🎵 Optional sound effects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;