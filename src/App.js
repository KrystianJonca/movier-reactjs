import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import SearchResultPage from './pages/SearchResultPage';
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
          <Routes>
            <Route
              path="/"
              element={<WelcomePage onSubmit={submitHandler} />}
            />
            <Route
              path="/search"
              element={<SearchResultPage value={searchQuery} />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

export default App;
