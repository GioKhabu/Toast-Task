import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';



function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
      {toasts?.map((toast, index) => {
        return (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast
              variant={toast.variant}
              variantIndex={index}
              message={toast.message}
            >
              Example notice toast
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
