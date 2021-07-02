import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import SearchResults from '../SearchResults/SearchResults';
import classes from './SearchResultPage.module.css';
import { Link } from 'react-router-dom';
const SearchResultPage = (props) => {
  const [searchQuery, setSearchQuery] = useState(
    props.value ? props.value : ''
  );
  const submitHandler = (value) => {
    setSearchQuery(value);
  };
  return (
    <div className="page">
      <header className={classes.search_header}>
        <h1 className={classes.search_title}>
          <Link to="/" className={classes.search_title_link}>
            Movier
          </Link>
        </h1>
        <SearchForm value={searchQuery} onSubmit={submitHandler} />
      </header>
      <main className={classes.search_main}>
        {searchQuery ? (
          <SearchResults movieName={searchQuery} />
        ) : (
          <p>Please search for movies ;)</p>
        )}
      </main>
      <footer className={classes.search_footer}></footer>
    </div>
  );
};

export default SearchResultPage;
