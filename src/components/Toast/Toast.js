import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

import { ToastContext } from '../ToastProvider';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ message, variant, variantIndex }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const { setToasts, toasts } = React.useContext(ToastContext);
  const removeToast = React.useCallback(
    (variantIndex) => {
      const newToast = [...toasts].filter((item, index) => {
        return index !== variantIndex;
      });
      setToasts(newToast);
    },
    [toasts, setToasts]
  );
  return (
    variant && (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Icon size={24} />
        </div>
        <p className={styles.content}>
          <VisuallyHidden>{`${variant}-`}</VisuallyHidden>
          {message}
        </p>
        <button
          className={styles.closeButton}
          onClick={() => removeToast(variantIndex)}
          aria-label="Dismiss message"
          aria-live="off"
        >
          <X size={24} />
        </button>
      </div>
    )
  );
}

export default Toast;
