import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
// în src/api.js, imediat după create():
console.log("BASE URL:", api.defaults.baseURL);


/* Injectăm JWT-ul la fiecare request */
api.interceptors.request.use(cfg => {
  const token = localStorage.getItem("jwt");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

export default api;
