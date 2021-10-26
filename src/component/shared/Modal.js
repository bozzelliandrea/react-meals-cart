import style from './Modal.module.css';
import {Fragment} from "react";
import ReactDOM from "react-dom";

const Backdrop = props => {
    return <div className={style.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = props => {
    return <div className={style.modal}>
        <div className={style.content}>{props.children}</div>
    </div>
}

const overlaysElement = document.getElementById('overlays');

export const Modal = props => {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, overlaysElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlaysElement)}
    </Fragment>
}