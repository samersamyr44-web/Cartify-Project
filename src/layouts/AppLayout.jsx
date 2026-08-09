import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import useTheme from "../hooks/useTheme";

const AppLayout = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      <Toaster
        key={theme}
        position="top-right"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3000,

          style: {
            background: isDark ? "#1f2937" : "#ffffff",
            color: isDark ? "#ffffff" : "#111827",
            border: isDark ? "1px solid #374151" : "1px solid #e5e7eb",
            borderRadius: "12px",
            padding: "12px 16px",
            boxShadow: isDark
              ? "0 10px 30px rgba(0, 0, 0, 0.35)"
              : "0 10px 30px rgba(0, 0, 0, 0.12)",
            fontSize: "14px",
            fontWeight: "500",
          },

          success: {
            iconTheme: {
              primary: "#00df9a",
              secondary: isDark ? "#1f2937" : "#ffffff",
            },
          },

          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: isDark ? "#1f2937" : "#ffffff",
            },
          },
        }}
      />

      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
};

export default AppLayout;
