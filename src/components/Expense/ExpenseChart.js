import React from "react";
import Chart from "../Chart/Chart";

const ExpenseChart = ({ expenses }) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // 선택년도의 모든 지출 데이터를 꺼내서 월을 추출하면서
  // 해당 월의 지출 총액을 chartDataPoints의 월 value에 누적
  expenses.forEach((exp) => {
    // 월 정보는 실제 월에서 1이 감소되어있으므로
    // 오히려 index 지목하기 편하다
    const expenseMonth = exp.date.getMonth();
    const expensePrice = exp.price;

    chartDataPoints[expenseMonth].value += expensePrice;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
