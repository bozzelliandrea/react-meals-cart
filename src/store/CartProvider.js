import CartContext from "./cart.context";
import {useReducer} from "react";
import cartReducer, {defaultCartState} from "./cart.reducer";
import {ACTION} from "./cart.action";

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemHandler = (item) => {
        dispatchCartAction({type: ACTION.CART_ADD, value: item});
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({type: ACTION.CART_REMOVE, value: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;