import React from "react";

function useEscapeKey(setToasts) {
  React.useEffect(() => {
    function removeToasts(event) {
      if (event.code === 'Escape') setToasts([]);
    }

    window.addEventListener('keydown', removeToasts);

    return () => {
      window.removeEventListener('keydown', removeToasts);
    };
  }, [setToasts]);
}

export default useEscapeKey;