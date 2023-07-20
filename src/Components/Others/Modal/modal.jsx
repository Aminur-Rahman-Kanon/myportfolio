import React from 'react';
import styles from './modal.module.css';
import ReactDom from 'react-dom';

function Modal({ modal, children }) {
    if (!modal) return;

    return ReactDom.createPortal(<div className={styles.modalContainer}>
        {children}
    </div>, document.getElementById('portal'));
}

export default Modal;
