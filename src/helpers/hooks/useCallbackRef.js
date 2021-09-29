import { useState, useCallback } from "react";

const useCallbackRef = () => {
  const [state, setState] = useState();

  const ref = useCallback(
    (node) => {
      if (node) setState(node);
    },
    [state]
  );

  return [state, ref];
};

export default useCallbackRef;
