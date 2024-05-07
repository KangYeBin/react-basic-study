import './App.css';
import React, { useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';

const App = () => {
  // 로그인 상태를 관리하는 함수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링될 때 LocalStorage를 확인해서
  // 현재 login-flag가 존재하는지 검사
  console.log('로그인 검사 수행!');
  const storedLoginFlag = localStorage.getItem('login-flag');
  if (storedLoginFlag === '1') {
    setIsLoggedIn(true);
  }

  // 서버로 로그인을 요청하는 함수 (나중에는 fetch로)
  const loignHandler = (email, password) => {
    // 로그인 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장
    // 이전 프로젝트에서는 로그인 유지를 session 상ㅇ -> 이제는 사용 불가

    // localStorage " 브라우저에서 저장하는 저장소"
    localStorage.setItem('login-flag', 1);
    setIsLoggedIn(true);
  };
  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loignHandler} />}
      </main>
    </>
  );
};

export default App;
