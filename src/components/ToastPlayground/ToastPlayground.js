import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Variants from '../Variants';
import ToastShelf from '../ToastShelf';
import { ToastContext } from '../ToastProvider';
// import FocusLock from 'react-focus-lock';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const { toasts, setToasts, setTypedMessage, typedMessage, setCheckedVariant, checkedVariant } =
    React.useContext(ToastContext);

  function addToasts() {
    if (typedMessage === '') {
      return;
    }
    const newToast = [
      ...toasts,
      { id: crypto.randomUUID(), message: typedMessage, variant: checkedVariant },
    ];
    setToasts(newToast);
    setTypedMessage('');
    setCheckedVariant('notice');
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          addToasts();
        }}
      >
        <div className={styles.row}>
          <label htmlFor="message" className={styles.label} style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={typedMessage}
              onChange={(event) => setTypedMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, index) => {
              return <Variants variant={variant} key={index} />;
            })}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
