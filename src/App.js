import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import WelcomePage from './components/Pages/WelcomePage';
import SearchResultPage from './components/Pages/SearchResultPage';
import './App.css';

function App(props) {
  const [searchQuery, setSearchQuery] = useState();
  const location = useLocation();

  const submitHandler = (value) => {
    setSearchQuery(value);
  };

  return (
    <>
      <TransitionGroup>
        <CSSTransition key={location.key} timeout={300} classNames="fade">
          <Switch location={location}>
            <Route exact path="/">
              <WelcomePage onSubmit={submitHandler} />
            </Route>
            <Route exact path="/search">
              <SearchResultPage value={searchQuery} />
            </Route>
            <Route path="*">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
