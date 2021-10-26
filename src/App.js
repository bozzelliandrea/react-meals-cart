import {useState} from "react";

import Header from "./component/layout/Header";
import Meals from "./component/meals/Meals";
import Cart from "./component/cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

    const [toggleCart, setToggleCart] = useState(false);

    const showCartHandler = () => {
      setToggleCart(true);
    };

    const hideCartHandler = () => {
        setToggleCart(false);
    };

    return (
        <CartProvider>
            {toggleCart && <Cart onCloseEvent={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
