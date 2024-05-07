import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/Store/auth-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

// App.js를 Context의 Consumer로 사용하기 위해
// 따로 분할해놓은 AuthContextProvider의 childern으로 전달
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
);
