import React from 'react';
import Hero from '../../components/Home/Hero';
import OurStory from '../../components/Home/OurStory';
import OurBelife from '../../components/Home/OurBelife';
import Build from '../../components/Home/Build';
import OurFormat from '../../components/Home/OurFormat';
import OurProof from '../../components/Home/OurProof';
import Behind from '../../components/Home/Behind';
import Eat from '../../components/Home/Eat';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="w-full min-h-screen relative">
      <Hero />
      <OurStory />
      <OurBelife />
      <Build />
      <OurFormat />
      <OurProof />
      <Behind />
      <Eat />
      <Footer />
    </div>
  );
};

export default Home;
