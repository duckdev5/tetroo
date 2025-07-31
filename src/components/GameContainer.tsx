import React from 'react';

const GameContainer: React.FC = () => {
  return (
    <section id="game" className="min-h-screen px-4 py-8 bg-black">
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center h-[90vh]">
        <div className="w-full max-w-[1280px] aspect-[4/3] bg-black rounded-lg border-2 border-purple-500/30 overflow-hidden shadow-2xl">
          <iframe
            src="/tetris/webgodot.html"
            className="w-full h-full border-0"
            title="Tetris Game"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default GameContainer;
