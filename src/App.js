import React from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  //지출 항목 객체 배열

  const expenses = [
    {
      id: 1,
      title: "바나나",
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      id: 2,
      title: "BBQ치킨",
      price: 20000,
      date: new Date(2022, 5 - 1, 21),
    },
    {
      id: 3,
      title: "도미노피자",
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
    {
      id: 4,
      title: "엽기떡볶이",
      price: 18000,
      date: new Date(2024, 5 - 1, 1),
    },
  ];

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log("App 컴포넌트에서 응답함!");
    console.log("newExpense: ", newExpense);
    expenses.push(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
