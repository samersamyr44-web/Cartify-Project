import authApi from "./authApi";

export const loginUser = (data) => {
  return authApi.post("/auth/login", data);
};

export const registerUser = (data) => {
  return authApi.post("/auth/register", data);
};

export const getCurrentUser = () => {
  return authApi.get("/auth/me");
};