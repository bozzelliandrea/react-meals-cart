import style from './MealItem.module.css'
import {useContext} from "react";
import CartContext from "../../store/cart.context";
import MealItemForm from "./MealItemForm";

const MealItem = props => {
    const cartContext = useContext(CartContext);
    const price = props?.price.toFixed(2) + '€';

    const onAddToCartHandler = amount => {
        cartContext.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
            description: props.description
        });
    };

    return (
        <li className={style.meal}>
            <div>
                <h3>{props?.name}</h3>
                <div className={style.description}>{props?.description}</div>
                <div className={style.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={onAddToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;