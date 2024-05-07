import React from 'react';

// 로그인 상태 변수를 관리할 컨텍스트 (중앙 저장소)
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // 함수의 경우에도 Context에 저장 가능
});

export default AuthContext;
