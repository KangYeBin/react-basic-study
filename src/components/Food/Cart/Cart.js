import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import CartModal from './../../UI/Modal/CartModal';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const Cart = ({ onHideCart }) => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  const { items, totalPrice } = useContext(CartContext);

  return (
    <CartModal onHideCart={onHideCart}>
      {/* 주문 내역(카트 안의 음식 내역) */}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => {
          return <CartItem key={cartItem.id} cart={cartItem} />;
        })}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>
          {new Intl.NumberFormat('ko-KR').format(totalPrice)}원
        </span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onHideCart}>
          닫기
        </button>
        {items.length > 0 && <button className={button}>주문</button>}
      </div>
    </CartModal>
  );
};

export default Cart;
