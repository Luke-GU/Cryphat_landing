import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import Roadmap from '../components/sections/Roadmap';
import About from '../components/sections/About';
import Tokenomics from '../components/sections/Tokenomics';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Roadmap />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
};

export default Home;
