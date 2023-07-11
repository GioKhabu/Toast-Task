import React from "react";
import useEscapeKey from "../../hooks/hooks";
export const ToastContext = React.createContext()

function ToastProvider({children}) {
  const [typedMessage, setTypedMessage] = React.useState('');
  const [checkedVariant, setCheckedVariant] = React.useState('notice');
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(setToasts);

  return (
    <ToastContext.Provider
      value={{
        typedMessage,
        checkedVariant,
        toasts,
        setToasts,
        setTypedMessage,
        setCheckedVariant,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
