import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classes from './SearchForm.module.css';

const SearchForm = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(event.target[0].value);
    if (!location.pathname.includes('/search')) navigate('/search');
  };

  return (
    <form className={classes.search_form} onSubmit={submitHandler}>
      <input
        className={
          !props.dark ? classes.search_input_dark : classes.search_input
        }
        type="text"
        name="search"
        defaultValue={props.value ? props.value : ''}
        placeholder="etc. Star Wars"
        required
      />
    </form>
  );
};

export default SearchForm;
