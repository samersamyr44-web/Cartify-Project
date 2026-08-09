import axios from "axios";

const authApi = axios.create({
  baseURL: "https://cartify-backend-fawn.vercel.app/api",
});

export default authApi;
