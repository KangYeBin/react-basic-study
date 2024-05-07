import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import Card from '../../UI/Card';
import Button from './../../UI/Button/Button';

const Login = ({ onLogin }) => {
  // 이메일 입력값을 저장
  const [enteredEmail, setEnteredEmail] = useState('');
  // 이메일 입력이 정상적인지 확인
  const [emailIsValid, setEmailIsValid] = useState();
  // 패스워드 입력값을 저장
  const [enteredPassword, setEnteredPassword] = useState('');
  // 패스워드 입력이 정상적인지 확인
  const [passwordIsValid, setPasswordIsValid] = useState();
  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // 입력란(이메일, 비밀번호)을 모두 체크하여 form의 버튼 disabled를 해제하는
  // 상태변수 formIsValid의 side effect를 처리하는 영역
  useEffect(() => {
    // formIsValid의 유효성 검증을 1초 뒤에 실행하도록 setTimeout 사용
    // 1초 이내에 새로운 입력값이 들어옴 -> 상태 변경 -> 재랜데링 -> useEffect 또 호출
    const timer = setTimeout(() => {
      console.log('useEffect called in Login.js');

      setFormIsValid(
        enteredEmail.includes('@') &&
          enteredPassword.trim().length > 6,
      );
    }, 1000);

    // cleanup 함수 : 컴포넌트가 업데이트되거나 없어지기 직전에 실행된다
    // 사용자가 1초 이내에 추가 입력 -> 상태 변경 -> 위의 timer 취소
    return () => {
      console.log('clean up!');
      clearTimeout(timer);
    };

    //의존성 배열의 상태변수가 바뀔 때마다 useEffect가 재실행된다
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${
            emailIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            passwordIsValid === false ? styles.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
