import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultState = {
  items: [],
  totalPrice: 0,
};

// 리듀서 함수 정의 : 여러가지 복잡한 상태 관리를 중앙 집중화
// state : 업데이트 하기 전의 상태값
// action : 어떤 업데이트를 할 지에 대한 정보와 필요값들(dispatch 함수에 의해 전달)
const cartReducer = (state, action) => {
  // 상태 변화의 타입이 ADD라면
  if (action.type === 'ADD') {
    //신규 아이템 받기
    const newCartItem = action.item;

    // 기존 장바구니에 등록된 메뉴인지 아닌지 확인
    // findIndex : 콜백을 통해 배열을 순화하면서 지정한 조건에 맞는 요소의 인덱스 반환
    const index = state.items.findIndex(
      (item) => item.id === newCartItem.id,
    );

    // 기존 장바구니 아이템
    const existingItem = [...state.items]; // 기존 배열 복사
    const prevCartItem = existingItem[index]; // 위에서 찾은 인덱스로 요소를 하나만 지목

    let updatedItem;
    if (index === -1) {
      // 신규 아이템
      updatedItem = [...state.items, newCartItem];
    } else {
      // 이미 추가됐던 아이템
      // prevCartItem.amount++; (x) -> 바깥 화면에서는 상품이 여러 개의 수량이 올라갈 수 있으므로
      prevCartItem.amount += newCartItem.amount;
      updatedItem = [...existingItem]; // 복사 배열을 갱신
    }

    // 기존 상태가 갖고 있는 장바구니 항목에 새로운 항목 추가

    const updatedPrice =
      state.totalPrice + newCartItem.price * newCartItem.amount;

    // 변경된 상태를 객체 형태로 리턴 -> cartState로 전달
    return {
      items: updatedItem,
      totalPrice: updatedPrice,
    };
  } else if (action.type === 'REMOVE') {
    // // 지우려는 항목의 id와 일치하지 않는 항목만 따로 배열로 받아서 리턴 (filter)
    // const removedItem = state.items.filter(
    //   (item) => item.id !== action.id,
    // );
    // return {
    //   items: removedItem, // 최신 상태로 상태를 업데이트 -> cartState로 전달됨
    // };

    // 최신 상태의 배열을 복사
    const existingItem = [...state.items];

    // 수량을 감소시킬 대상의 인덱스 찾기
    const index = existingItem.findIndex(
      (item) => item.id === action.id,
    );

    // 제거 대상 아이템을 가져온다
    const delTargetItem = existingItem[index];

    // 총액 계산
    const updatePrice = state.totalPrice - delTargetItem.price;

    // 업데이트 전의 수량이 1이라면 - 버튼을 눌렀을 때 장바구니에서 제외
    // 1보다 크다면 제거하지 않고 기존 배열에서 수량만 -1해서 업데이트
    let removedItems;
    if (delTargetItem.amount === 1) {
      removedItems = state.items.filter(
        (item) => item.id !== action.id,
      );
    } else {
      delTargetItem.amount--;
      removedItems = [...existingItem];
    }

    return {
      items: removedItems,
      totalPrice: updatePrice,
    };
  }

  return defaultState;
};

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultState,
  );

  // Provider의 value는 실제로 관리할 데이터 객체 (consumer들이 사용할 객체 정의)
  const cartContext = {
    items: cartState.items, // 장바구니에 담긴 항목 배열
    totalPrice: cartState.totalPrice,
    addItem: (item) => {
      dispatchCartAction({
        type: 'ADD',
        item: item,
      });
    },
    removeItem: (id) => {
      dispatchCartAction({
        type: 'REMOVE',
        id: id,
      });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
