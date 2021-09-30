import axios from "axios";

const appAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

const Api = {
  login: (payload) => appAxios.post("/polls/login/", payload),
  verify: (payload) => appAxios.post("/polls/auth/", payload),
  candidates: () => appAxios.get("/polls/accueil/"),
  vote: (payload) => appAxios.post("/polls/vote/", payload),
};

export default Api;
