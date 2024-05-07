import React, { useRef, useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import ErrorModal from '../UI/Modal/ErrorModal';
import { name } from 'eslint-plugin-prettier';

const AddUsers = () => {
  // 에러 상태 관리
  const [error, setError] = useState(null);

  // useRef로 기억된 input 요소 가져오기
  const nameInput = useRef();
  const ageInput = useRef();

  const userSubmitHandler = (e) => {
    e.preventDefault();

    const userName = nameInput.current.value;
    const age = ageInput.current.value;

    if (userName.trim() === '' || age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하면 안됩니다!',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1 이상의 숫자로 작성해주세요',
      });
      return;
    }

    console.log(nameInput.current);
    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form
          className={styles.input}
          onSubmit={userSubmitHandler}
        >
          <label htmlFor="username">이름</label>
          <input
            id="username"
            type="text"
            ref={nameInput}
          />
          <label htmlFor="age">나이</label>
          <input id="age" type="number" ref={ageInput} />
          <Button type="submit">가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
