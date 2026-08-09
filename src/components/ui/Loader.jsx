const Loader = () => {
  return (
    <div
      className="
        min-h-[60vh]
        flex
        flex-col
        items-center
        justify-center
        gap-5
      "
    >
      {/* Spinner */}

      <div
        className="
          relative
          w-14
          h-14
        "
      >
        <div
          className="
            absolute
            inset-0
            rounded-full
            border-4
            border-[var(--color-primary)]/20
          "
        />

        <div
          className="
            absolute
            inset-0
            rounded-full
            border-4
            border-transparent
            border-t-[var(--color-primary)]
            animate-spin
          "
        />
      </div>

      {/* Brand */}

      <div className="text-center">
        <p
          className="
            text-xl
            font-bold
            text-[var(--color-primary)]
            animate-pulse
          "
        >
          Cartify
        </p>

        <p className="mt-1 text-sm opacity-50">
          Preparing your shopping experience
        </p>
      </div>
    </div>
  );
};

export default Loader;
