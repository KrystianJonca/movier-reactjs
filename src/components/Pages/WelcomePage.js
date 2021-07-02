import React from 'react';
import HeroSection from '../HeroSection/HeroSection';

const WelcomePage = (props) => {
  return (
    <div className="page">
      <HeroSection onSubmit={props.onSubmit} />
    </div>
  );
};

export default WelcomePage;
