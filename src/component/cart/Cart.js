import style from './Cart.module.css';
import { Modal } from "../shared/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart.context";
import CartItem from "./CartItem";

const Cart = props => {

    const cartContext = useContext(CartContext);

    const onAddHandler = item => {
        cartContext.addItem({...item, amount: 1});
    };

    const onRemoveHandler = id => {
        cartContext.removeItem(id);
    };

    const totalAmount = cartContext.totalAmount.toFixed(2) + '€';
    const cartItems = cartContext.items?.map(item => <CartItem key={item.id}
                                                               name={item.name}
                                                               amount={item.amount}
                                                               price={item.price}
                                                               onRemove={onRemoveHandler.bind(null, item.id)}
                                                               onAdd={onAddHandler.bind(null, item)}/>)

    return (
        <Modal onClose={props.onCloseEvent}>
            <ul className={style['cart-items']}>{cartItems}</ul>
            <div className={style.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={style.actions}>
                <button onClick={props.onCloseEvent} className={style['button--alt']}>Close</button>
                {cartItems?.length > 0 && <button className={style.button}>Order</button>}
            </div>
        </Modal>
    )
};

export default Cart;