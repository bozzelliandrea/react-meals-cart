import style from './Header.module.css';
import { Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={style.header}>
            <h1>Meals Shopping</h1>
            <HeaderCartButton onCartClick={props.onShowCart}/>
        </header>
        <div className={style['main-image']}>
            <div />
        </div>
    </Fragment>;
}

export default Header;
