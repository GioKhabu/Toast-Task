import React from "react";
import { ToastContext } from '../ToastProvider';



function Variants({ variant }) {
  const { checkedVariant, setCheckedVariant } = React.useContext(ToastContext);
  return (
    <>
      <label htmlFor={`variant-${variant}`}>
        <input
          id={`variant-${variant}`}
          type="radio"
          name="variant"
          value={variant}
          checked={variant === checkedVariant}
          onChange={(event) => setCheckedVariant(event.target.value)}
        />
        {variant}
      </label>
    </>
  );
}

export default Variants;
