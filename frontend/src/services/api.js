import axios from "axios";

const api = axios.create({
  baseURL: "https://todo-backend-6fei.onrender.com/api",
});

export default api;