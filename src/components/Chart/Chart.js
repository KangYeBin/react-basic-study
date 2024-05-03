import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  // 배율 기준을 설정하기 위해 1년치 지출 총액이 필요하다
  const dataPointsValue = dataPoints.map((dp) => dp.value); // value만 들어있는 배열로 추출

  // reduce : 누산함수
  // a : 리턴 결과에 대한 누적값, b : 배열에서 하나씩 꺼낸 값
  // 0 : 시작 index - 0이면 처음부터 끝까지
  const totalValue = dataPointsValue.reduce((a, b) => a + b, 0);
  return (
    <div className="chart">
      {dataPoints.map(({ label, value }) => {
        return (
          <ChartBar
            key={label}
            label={label}
            currentValue={value}
            totalValue={totalValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
