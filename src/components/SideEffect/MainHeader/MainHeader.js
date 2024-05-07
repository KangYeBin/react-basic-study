import React from 'react';
import classes from './MainHeader.module.css';
import Navigation from '../Navigation/Navigation';

const MainHeader = ({ onLogout }) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
