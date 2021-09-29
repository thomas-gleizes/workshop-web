import axios from "axios";

const appAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

const Api = {
  get: () => appAxios.get("/"),
  login: (data) => appAxios.post("/login", data),
  verify: (data) => appAxios.post("/verify", data),
};

export default Api;
