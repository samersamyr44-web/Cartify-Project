import { createContext, useEffect, useState } from "react";

import {
  loginUser,
  registerUser,
  getCurrentUser,
} from "../services/authService";

import authApi from "../services/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  // Attach JWT token to every auth request
  useEffect(() => {
    const requestInterceptor = authApi.interceptors.request.use((config) => {
      const currentToken = localStorage.getItem("token");

      if (currentToken) {
        config.headers.Authorization = `Bearer ${currentToken}`;
      }

      return config;
    });

    return () => {
      authApi.interceptors.request.eject(requestInterceptor);
    };
  }, []);

  // Restore user when app starts
  useEffect(() => {
    const restoreUser = async () => {
      const savedToken = localStorage.getItem("token");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser();

        setUser(response.data.user);
        setToken(savedToken);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, []);

  // Login
  const login = async (data) => {
    const response = await loginUser(data);

    const { token, user } = response.data;

    localStorage.setItem("token", token);

    setToken(token);
    setUser(user);

    return response;
  };

  // Register
  const register = async (data) => {
    const response = await registerUser(data);

    return response;
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);
    setUser(null);

    window.location.href = "/login";
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
