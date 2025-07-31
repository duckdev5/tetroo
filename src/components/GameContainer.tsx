import React from 'react';

const GameContainer: React.FC = () => {
  return (
    <section id="game" className="py-12 px-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl border border-purple-500/20 p-6 shadow-2xl">
          <div className="aspect-[4/3] w-[400px] bg-black rounded-lg border-2 border-purple-500/30 overflow-hidden">
            <iframe
              src="/tetris/webgodot.html"
              className="w-full h-full border-0"
              title="Tetris Game"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameContainer;
