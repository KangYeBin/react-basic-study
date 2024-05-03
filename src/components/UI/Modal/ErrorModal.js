import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "../Card";
import Button from "../Button/Button";

// Modal을 사용하는 쪽에서 제목과 메시지가 props로 전달될 것이다

// onConfirm -> AddUsers쪽에서 상태 관리하고 있는 모달 노출 여부를 제어하는 함수
const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <div className={styles.backdrop} onClick={onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={onConfirm}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
