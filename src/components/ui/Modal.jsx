import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const Modal = ({ isOpen, onClose, title, children }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);

      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        p-4
        bg-[var(--color-overlay)]
        backdrop-blur-sm
        ${
          isClosing
            ? "animate-[modalFadeOut_0.2s_ease-in]"
            : "animate-[modalFadeIn_0.2s_ease-out]"
        }
      `}
      onClick={handleOverlayClick}
    >
      <div
        className={`
          relative
          w-full
          max-w-lg
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          bg-[var(--color-card)]
          text-[var(--color-text)]
          shadow-2xl
          p-6
          ${
            isClosing
              ? "animate-[modalScaleOut_0.2s_ease-in]"
              : "animate-[modalScaleIn_0.2s_ease-out]"
          }
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between mb-6">
          {title && <h2 className="text-xl font-bold">{title}</h2>}

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="
              ml-auto
              p-2
              rounded-lg
              opacity-60
              hover:opacity-100
              hover:bg-black/5
              dark:hover:bg-white/5
              transition
            "
          >
            <FiX size={22} />
          </button>
        </div>

        {/* Content */}

        {children}
      </div>
    </div>
  );
};

export default Modal;
