import LightLogo from "../../assets/logos/light_mode_logo.png";

const AuthLayout = ({ children, isRegister, onToggle }) => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Auth Container */}

      <div
        className="
    relative
    w-full
    max-w-6xl
    min-h-[650px]
    lg:h-[80vh]
    lg:max-h-[800px]
    overflow-hidden
    rounded-2xl
    shadow-2xl
    bg-[var(--color-card)]
  "
      >
        {/*  Mobile Authentication */}

        <div className="lg:hidden min-h-[650px] flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            {/* Form */}

            {isRegister ? children[1] : children[0]}

            {/* Mobile Toggle */}

            <div className="mt-6 text-center">
              <p className="text-sm opacity-70">
                {isRegister
                  ? "Already have an account?"
                  : "Don't have an account?"}
              </p>

              <button
                type="button"
                onClick={onToggle}
                className="
                  mt-2
                  font-medium
                  text-[var(--color-primary)]
                  hover:underline
                  transition
                "
              >
                {isRegister ? "Back to Login" : "Create Account"}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Authentication */}

        <div className="hidden lg:flex absolute inset-0">
          {/* Login Side */}

          <div
            className="
              w-1/2
              h-full
              flex
              items-center
              justify-center
              p-8
              xl:p-12
            "
          >
            {children[0]}
          </div>

          {/* Register Side */}

          <div
            className="
              w-1/2
              h-full
              flex
              items-center
              justify-center
              p-8
              xl:p-12
            "
          >
            {children[1]}
          </div>
        </div>

        {/* Animated Brand Panel */}

        <div
          className="
            hidden
            lg:flex
            absolute
            top-0
            right-0
            z-20
            w-1/2
            h-full
            items-center
            justify-center
            overflow-hidden
            bg-[var(--color-primary)]
            transition-transform
            duration-700
            ease-in-out
          "
          style={{
            transform: isRegister ? "translateX(-100%)" : "translateX(0)",
          }}
        >
          {/* Top Circle */}

          <div
            className="
              absolute
              -top-32
              -left-32
              w-80
              h-80
              rounded-full
              bg-white/10
            "
          />

          {/* Bottom Circle */}

          <div
            className="
              absolute
              -bottom-40
              -right-32
              w-[420px]
              h-[420px]
              rounded-full
              bg-black/10
            "
          />

          {/* Brand Content */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              items-center
              justify-center
              text-center
              px-8
              max-w-lg
            "
          >
            {/* Logo */}

            <div
              className="
                        w-56
                        h-28
                        flex
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/90
                        shadow-xl
                        transition-transform
                        duration-300
                        hover:scale-105
                      "
            >
              <img
                src={LightLogo}
                alt="Cartify Logo"
                className="w-44 h-20 object-contain"
              />
            </div>

            {/* Title */}

            <h2
              className="
                mt-8
                text-4xl
                font-bold
                text-white
              "
            >
              {isRegister ? "Welcome to Cartify" : "Welcome Back"}
            </h2>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-md
                text-base
                leading-relaxed
                text-white/80
              "
            >
              {isRegister
                ? "Create your account and start your shopping journey with us."
                : "Login to your account and continue your shopping journey."}
            </p>

            {/* Switch Button */}

            <button
              type="button"
              onClick={onToggle}
              className="
                mt-8
                px-8
                py-3
                rounded-lg
                border
                border-white
                text-white
                font-medium
                transition-all
                duration-300
                hover:bg-white
                hover:text-[var(--color-primary)]
                hover:scale-105
              "
            >
              {isRegister ? "Back to Login" : "Create Account"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
