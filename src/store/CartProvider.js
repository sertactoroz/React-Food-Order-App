import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updateadItems =state.item.concat(action.item);
        const updatedTotatlAmount = state.totalAmount + action.item.price * action.item.amount;
        return{
            items:updatedItems,
            totalAmount: updatedAmount
        };
    }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
   
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE',id:id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
