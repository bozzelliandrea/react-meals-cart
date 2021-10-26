import {ACTION} from "./cart.action";

export const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {

    if (action.type === ACTION.CART_ADD) {

        const savedItemIndex = state.items?.findIndex(item => item.id === action.value.id);
        const savedItem = state.items[savedItemIndex];
        const updatedAmount = state.totalAmount + action.value.price * action.value.amount;

        let updatedItems;

        if (savedItem) {
            let updatedItem;

            updatedItem = {
                ...savedItem,
                amount: savedItem.amount + action.value.amount
            };
            updatedItems = [...state.items];
            updatedItems[savedItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.value);
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }

    if (action.type === ACTION.CART_REMOVE) {

        const removedItemIndex = state.items?.findIndex(item => item.id === action.value);
        const removedItem = state.items[removedItemIndex];
        const updatedAmount = state.totalAmount - removedItem.price;

        let updatedItem;
        let updatedItems;

        if(removedItem.amount > 1) {
            updatedItem = {
                ...removedItem,
                amount: removedItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[removedItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.filter(item => item.id !== action.value);
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        };
    }

    return defaultCartState;
};

export default cartReducer;