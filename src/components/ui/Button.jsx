const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        px-5
        py-2
        rounded-lg
        transition
        duration-200
        text-[var(--color-button-text)]
        bg-[var(--color-button)]
        hover:bg-[var(--color-button-hover)]
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
