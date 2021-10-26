import style from './HeaderCartButton.module.css'
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart.context";
import {CartIcon} from "../cart/CartIcon";

const HeaderCartButton = props => {
    const [buttonBump, setButtonBump] = useState(false);
    const cartContext = useContext(CartContext);

    const totalItems = cartContext.items?.reduce((current, item) => {
        return current + item.amount;
    }, 0);

    const cartButtonClasses = `${style.button} ${buttonBump ? style.bump : ''}`;

    useEffect(() => {
        if(cartContext.items.length === 0){
            return;
        }
        setButtonBump(true);

        const timer = setTimeout(() => {
            setButtonBump(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [cartContext.items]);

    return <button className={cartButtonClasses} onClick={props.onCartClick}>
        <span className={style.icon}>
            <CartIcon/>
        </span>
        <span>Your Cart</span>
        <span className={style.badge}>{totalItems}</span>
    </button>
}

export default HeaderCartButton;