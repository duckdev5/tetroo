import React from 'react';
import { ArrowDown, Zap, Trophy, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              TETRIS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Classic Puzzle Gaming Experience
            </p>
          </div>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg text-gray-400 leading-relaxed">
            Immerse yourself in the timeless puzzle game that has captivated players for decades. 
            Stack blocks, clear lines, and challenge yourself to reach new heights in this custom Tetris experience.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#game" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
            >
              <Zap className="h-5 w-5" />
              <span>Play Now</span>
            </a>
            <a 
              href="#about" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Learn More</span>
            </a>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast & Smooth</h3>
              <p className="text-gray-400">Optimized gameplay with responsive controls and smooth animations.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">High Scores</h3>
              <p className="text-gray-400">Track your progress and compete for the highest scores.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Experience</h3>
              <p className="text-gray-400">Tailored gameplay experience with modern web technologies.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;