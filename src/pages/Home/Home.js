import React from 'react';
import About from '../../components/About/About';
import Category from '../../components/Category/Category';
import Partners from '../../components/Partneri/Partners';
import IntroComponent from '../../components/Showcase/IntroComponent';
import Showcase from '../../components/Showcase/Showcase';

const Home = () => {
  return (
    <div>
      <IntroComponent />
      <About />
      <Category />
      <Partners />
    </div>
  );
};

export default Home;
