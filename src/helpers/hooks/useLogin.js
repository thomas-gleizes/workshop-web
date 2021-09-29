import { useEffect, useState } from "react";

const LOGIN_KEY = "isLogin";

const getStorage = () => !!window.localStorage.getItem(LOGIN_KEY);

const useLogin = () => {
  const [log, setLog] = useState(getStorage());

  useEffect(() => {
    const interval = window.setInterval(() => {
      const state = getStorage();
      if (state !== log) setLog(state);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return !!log;
};

export default useLogin;
