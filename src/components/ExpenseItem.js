import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./UI/Card";

// const ExpenseItem = (props) => {
//디스트럭처링을 통해 props가 아닌 {title}로 바로 가져올 수 있다
const ExpenseItem = ({ title, price, date }) => {
  // 숫자를 화폐 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat("ko-KR").format(price);

  return (
    <Card className={"circle"}>
      <div className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{formattedPrice}원</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
