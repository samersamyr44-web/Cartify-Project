import { FiLogOut, FiUser } from "react-icons/fi";

import useAuth from "../hooks/useAuth";

import Button from "../components/UI/Button";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div
        className="
          w-full
          max-w-md
          p-6
          sm:p-8
          rounded-2xl
          bg-[var(--color-card)]
          shadow-xl
        "
      >
        {/* Profile Icon */}

        <div className="flex justify-center">
          <div
            className="
              w-24
              h-24
              rounded-full
              flex
              items-center
              justify-center
              bg-[var(--color-primary)]
              text-[var(--color-primary-text)]
            "
          >
            <FiUser size={42} />
          </div>
        </div>

        {/* User Name */}

        <div className="mt-5 text-center">
          <h1 className="text-2xl font-bold">
            {user.firstName} {user.lastName}
          </h1>

          <p className="mt-1 text-sm opacity-60">@{user.username}</p>
        </div>

        {/* User Information */}

        <div className="mt-8 space-y-5">
          {/* First Name */}

          <div className="relative">
            <div
              className="
                w-full
                px-4
                pt-6
                pb-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
              "
            >
              <span
                className="
                  absolute
                  left-4
                  top-2
                  text-xs
                  font-medium
                  text-[var(--color-primary)]
                "
              >
                First Name
              </span>

              <span className="font-medium">{user.firstName}</span>
            </div>
          </div>

          {/* Last Name */}

          <div className="relative">
            <div
              className="
                w-full
                px-4
                pt-6
                pb-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
              "
            >
              <span
                className="
                  absolute
                  left-4
                  top-2
                  text-xs
                  font-medium
                  text-[var(--color-primary)]
                "
              >
                Last Name
              </span>

              <span className="font-medium">{user.lastName}</span>
            </div>
          </div>

          {/* Username */}

          <div className="relative">
            <div
              className="
                w-full
                px-4
                pt-6
                pb-3
                rounded-lg
                border
                border-[var(--color-border)]
                bg-[var(--color-background)]
              "
            >
              <span
                className="
                  absolute
                  left-4
                  top-2
                  text-xs
                  font-medium
                  text-[var(--color-primary)]
                "
              >
                Username
              </span>

              <span className="font-medium">@{user.username}</span>
            </div>
          </div>
        </div>

        {/* Logout */}

        <div className="mt-8">
          <Button
            type="button"
            onClick={logout}
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
            "
          >
            <FiLogOut size={20} />
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
