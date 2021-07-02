import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import classes from './HeroSection.module.css';

const HeroSection = (props) => {
  return (
    <div id={classes.hero_section}>
      <div className={classes.hero_container}>
        <div className={classes.hero_info}>
          <h1 className={classes.hero_title}>Movier</h1>
          <p className={classes.hero_text}>Search for Your fav movies!</p>
          <SearchForm onSubmit={props.onSubmit} dark={true} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
