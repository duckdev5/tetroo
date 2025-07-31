import React from 'react';
import { Play, RotateCcw, Pause } from 'lucide-react';

const GameContainer: React.FC = () => {
  return (
    <section id="game" className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Play Tetris
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the classic puzzle game with modern graphics and smooth gameplay. 
            Clear lines, level up, and achieve the highest score!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Game Area */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-2xl">
              <div className="aspect-[4/3] bg-black rounded-lg border-2 border-purple-500/30 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder for your Tetris game */}
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-white font-semibold">Game Loading Area</p>
                    <p className="text-gray-400 text-sm">Upload your Tetris game files to the public folder</p>
                    <p className="text-gray-500 text-xs">Then update the iframe src or embed your game here</p>
                  </div>
                </div>
                
                {/* Uncomment and update the src when you upload your game files */}
                <iframe 
                  src="/tetris/index.html" 
                  className="w-full h-full border-0"
                  title="Tetris Game"
                />
              </div>
              
              {/* Game Controls */}
              <div className="flex justify-center mt-6 space-x-4">
                <button className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Start Game</span>
                </button>
                <button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <Pause className="h-5 w-5" />
                  <span>Pause</span>
                </button>
                <button className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center space-x-2">
                  <RotateCcw className="h-5 w-5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Game Info Sidebar */}
          <div className="space-y-6">
            {/* Score Card */}
            <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-md rounded-xl border border-purple-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Game Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Score:</span>
                  <span className="text-2xl font-bold text-purple-400">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Level:</span>
                  <span className="text-xl font-bold text-cyan-400">1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Lines:</span>
                  <span className="text-xl font-bold text-pink-400">0</span>
                </div>
              </div>
            </div>

            {/* Controls Guide */}
            <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-md rounded-xl border border-cyan-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Controls</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Move Left:</span>
                  <span className="text-cyan-400 font-mono">← A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Move Right:</span>
                  <span className="text-cyan-400 font-mono">→ D</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Rotate:</span>
                  <span className="text-cyan-400 font-mono">↑ W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Soft Drop:</span>
                  <span className="text-cyan-400 font-mono">↓ S</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Hard Drop:</span>
                  <span className="text-cyan-400 font-mono">SPACE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Pause:</span>
                  <span className="text-cyan-400 font-mono">P</span>
                </div>
              </div>
            </div>

            {/* Next Piece Preview */}
            <div className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-md rounded-xl border border-pink-500/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Next Piece</h3>
              <div className="w-20 h-20 bg-black rounded-lg border border-pink-500/30 mx-auto flex items-center justify-center">
                <div className="text-pink-400 text-xs">Preview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameContainer;