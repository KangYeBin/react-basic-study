import React from 'react'
import './ExpenseItem.css';

// const ExpenseItem = (props) => {
//디스트럭처링을 통해 props가 아닌 {title}로 바로 가져올 수 있다
const ExpenseItem = ({title, price, date}) => {
   
   // 한자리 수를 두자리로 변환해주는 함수
   const make2digit = (text) => {
      return text.toString().padStart(2, '0');
   }

   // 날짜 format 변환 함수 정의
   const makeFormattedDate = () => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
   }

   // 숫자를 화폐 표기법으로 변환
   const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

   return (
      <div>
         <div className='expense-item'>
            <div>{makeFormattedDate()}</div>
            <div className='expense-item__description'>
               <h2>{title}</h2>
               <div className='expense-item__price'>{formattedPrice}원</div>
            </div>
         </div>
      </div>
   )
}

export default ExpenseItem