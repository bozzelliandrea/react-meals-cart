import style from './MealItemForm.module.css';
import {Input} from "../shared/Input";
import {useRef, useState} from "react";

const MealItemForm = props => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = +amountRef.current.value;

        if (amountRef.current.value.trim().length === 0
            || enteredAmount < 1
            || enteredAmount > 10) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    };

    return (
        <form className={style.form} onSubmit={submitHandler}>
            <Input ref={amountRef} label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>Add</button>
            {!amountIsValid && <p>Enter a valid amount (1-10).</p>}
        </form>
    )
}

export default MealItemForm;