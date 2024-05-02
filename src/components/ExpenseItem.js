import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

// const ExpenseItem = (props) => {
//디스트럭처링을 통해 props가 아닌 {title}로 바로 가져올 수 있다
const ExpenseItem = ({ title, price, date }) => {
  // 숫자를 화폐 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

  // 값이 변경되어 화면에 반영되어야 하는 값들은
  // useState 훅을 통해 상태 변수로 관리해야한다.
  // (훅 : React에서 직접 코드 작성 없이 다양한 기능을 사용할 수 있게 도와주는 라이브러리)

  // useState(상태 변수의 초기값) -> 배열 리턴
  // 디스트럭처링해서 받음
  // 첫 번째 요소는 관리할 상태값
  // 두 번째 요소는 상태값을 변경하는 setter 함수
  const [itemTitle, setItemTitle] = useState(title);

  const clickHandler = (e) => {
    // state로 관리하는 변수는 반드시 setter로만 변경
    // setItemTitle("메롱메롱");

    // * 콜백함수를 통한 방법을 더 선호
    setItemTitle((snapshot) => {
      console.log("snapshot : ", snapshot);
      // setter함수의 매개값으로 콜백 함수 선언
      // -> 콜백 함수의 매개값으로 현재 상태 변수 값이 전달
      // return 값이 변경될 상태값으로 지정
      // return 값이 snapshot과 다를 경우 화면이 리렌더링, 같을 경우 리렌더링 하지 않음
      return "메롱메롱";
    });
  };

  return (
    <Card className="circle">
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{itemTitle}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </div>

      <button onClick={clickHandler}>수정</button>
      <button
        onClick={(e) => {
          console.log("삭제 버튼 클릭");
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
