import { useEffect, useState } from "react";

const useLogin = (key) => {
  const [state, setState] = useState(window.localStorage.getItem(key));

  useEffect(() => {
    const interval = window.setInterval(() => {
      const storage = window.localStorage.getItem(key);

      if (storage !== state) setState(storage);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return state;
};

export default useLogin;
