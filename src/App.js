import './App.css';
import React, { useContext } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';
import AuthContext from './components/Store/auth-context';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login />}
      </main>
    </>
  );
};

export default App;
