import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:8000/api",
  // baseURL: "http://101.53.148.53:8000/api",
  baseURL:"http://imara.safarimarketingpro.com:8000/api"
});

export default API;
