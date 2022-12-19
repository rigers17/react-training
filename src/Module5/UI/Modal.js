import classes from './Modal.module.css';
import { Fragment } from 'react';
import  ReactDOM  from 'react-dom';

const Back = props =>{
return <div className={classes.backdrop} onClick={props.onClose}/>
};

const ModalOverlays = props => {
    return <div className={classes.modal}>
    <div className={classes.content}>{props.children}
    </div>
    </div>
};

const portalElement = document.getElementById('under');


const Modal = (props) => {
   return (
   <Fragment>
    {ReactDOM.createPortal(<Back onClose ={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
   </Fragment>
   );
};

export default Modal;