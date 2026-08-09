import { useState } from "react";

import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleToggle = () => {
    setIsRegister((prev) => !prev);
  };

  return (
    <AuthLayout isRegister={isRegister} onToggle={handleToggle}>
      <LoginForm />
      <RegisterForm />
    </AuthLayout>
  );
};

export default Auth;
