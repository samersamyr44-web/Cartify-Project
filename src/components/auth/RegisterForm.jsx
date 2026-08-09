import { useState } from "react";

import { registerUser } from "../../services/authService";

import Button from "../ui/Button";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await registerUser(formData);

      setSuccess("Account created successfully.");

      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      });
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-3xl font-bold">Create Account</h2>

        <p className="mt-2 text-sm opacity-70">Create your Cartify account.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Names */}

        <div className="grid grid-cols-2 gap-3">
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
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
              focus:border-[var(--color-primary)]
            "
          />

          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
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
              focus:border-[var(--color-primary)]
            "
          />
        </div>

        {/* Username */}

        <input
          name="username"
          type="text"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
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
            focus:border-[var(--color-primary)]
          "
        />

        {/* Password */}

        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
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
            focus:border-[var(--color-primary)]
          "
        />

        {/* Messages */}

        {success && (
          <p className="text-sm text-green-500 text-center">{success}</p>
        )}

        {error && <p className="text-sm text-red-500 text-center">{error}</p>}

        {/* Button */}

        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={loading}
            className="
              px-8
              py-3
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Creating..." : "Create Account"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
