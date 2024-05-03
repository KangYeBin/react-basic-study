import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ onAddExpense }) => {
  const [expenseToggle, setExpenseToggle] = useState(false);

  const startInsertModeHandler = () => setExpenseToggle(true);
  const stopInserModeHandler = () => setExpenseToggle(false);

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );

  if (expenseToggle) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onToggle={stopInserModeHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
