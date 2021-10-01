import axios from "axios";

const appAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

const Api = {
  login: (payload) => appAxios.post("/api/login", payload),
  verify: (payload) => appAxios.post("/api/auth", payload),
  candidates: () => appAxios.get("/api/accueil"),
  vote: (payload) => appAxios.post("/api/vote", payload),
};

export default Api;
