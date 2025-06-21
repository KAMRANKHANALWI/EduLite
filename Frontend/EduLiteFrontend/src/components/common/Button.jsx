import React from "react";
import PropTypes from "prop-types";

/**
 * Reusable Button component for EduLite, styled with Tailwind CSS.
 *
 * Props:
 * - children: Content inside the button (text, icon, etc.)
 * - onClick: Click handler function
 * - type: 'primary' | 'secondary' | 'danger' (visual style)
 * - size: 'sm' | 'md' | 'lg' (button size)
 * - disabled: If true, button is disabled
 * - className: Additional Tailwind classes
 * - ...rest: Any other button attributes (e.g., aria-label)
 *
 * Usage examples:
 * <Button onClick={...}>Default</Button>
 * <Button type="secondary" size="sm">Secondary Small</Button>
 * <Button type="danger" disabled>Delete</Button>
 */
const baseStyles =
  "cursor-pointer inline-flex items-center justify-center font-medium rounded " +
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "transition-all ease-in-out duration-150 " +
  "disabled:opacity-50 disabled:cursor-not-allowed " +
  "active:scale-[.98]";

const typeStyles = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
  secondary:
    "bg-white text-blue-700 border border-blue-600 hover:bg-blue-50 focus-visible:ring-blue-400",
  danger: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const widthStyles = {
  auto: "w-auto",
  full: "w-full",
  half: "w-1/2",
  "one-third": "w-1/3",
  "two-thirds": "w-2/3",
  "one-fourth": "w-1/4",
  "three-fourths": "w-3/4",
};

const Button = React.forwardRef(
  (
    {
      children,
      onClick,
      type = "primary",
      size = "md",
      width = "auto",
      disabled = false,
      className = "",
      ...rest
    },
    ref,
  ) => {
    const style = [
      baseStyles,
      typeStyles[type] || typeStyles.primary,
      sizeStyles[size] || sizeStyles.md,
      widthStyles[width] || widthStyles.auto,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={style}
        onClick={onClick}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  width: PropTypes.oneOf(Object.keys(widthStyles)),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
