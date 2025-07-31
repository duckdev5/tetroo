import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameContainer from './components/GameContainer';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <GameContainer />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;