import React from 'react';

// 로그인 상태 변수를 관리할 컨텍스트 (중앙 저장소)
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
