import { useState } from "react";

import useAuth from "../../hooks/useAuth";

import Button from "../UI/Button";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      await login(formData);

      window.location.href = "/";
    } catch (error) {
      setError(error.response?.data?.message || "Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-3xl font-bold">Welcome Back</h2>

        <p className="mt-2 text-sm opacity-70">
          Login to your account and continue shopping.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Username */}

        <div>
          <label htmlFor="username" className="block mb-2 font-medium">
            Username
          </label>

          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            className="
              w-full
              px-4
              py-3
              rounded-lg
              border
              border-[var(--color-border)]
              bg-[var(--color-background)]
              outline-none
              transition
              focus:border-[var(--color-primary)]
            "
          />
        </div>

        {/* Password */}

        <div>
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            className="
              w-full
              px-4
              py-3
              rounded-lg
              border
              border-[var(--color-border)]
              bg-[var(--color-background)]
              outline-none
              transition
              focus:border-[var(--color-primary)]
            "
          />
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-[var(--color-primary)]" />
            Remember me
          </label>

          <button
            type="button"
            className="
              text-[var(--color-primary)]
              hover:underline
            "
          >
            Forgot password?
          </button>
        </div>

        {/* Error */}

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        {/* Button */}

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={loading}
            className="
              px-10
              py-3
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
