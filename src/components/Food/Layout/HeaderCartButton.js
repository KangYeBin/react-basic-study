import React, { useContext, useEffect, useState } from 'react';
import styles from './HeaderCartButton.module.scss';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = ({ onShowCart }) => {
  // bump 애니메이션을 제어하는 상태 변수
  const [isBump, setIsBump] = useState(false);

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce(
    (accu, item) => accu + item.amount,
    0,
  );

  useEffect(() => {
    if (items.length === 0) return;
    console.log('useEffect in CartBtn!');
    setIsBump(true);

    // 다음 담기 애니메이션을 위해 bump 클래스 이름 제거
    // 애니메이션 동작 시간까지 기다려주기 (300ms)
    const aniTimer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    // 300ms 이내에 다시 버튼을 누르면 timer 취소
    return () => clearTimeout(aniTimer);
  }, [items]);

  return (
    <button
      className={`${button} ${isBump ? bump : ''}`}
      onClick={onShowCart}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
