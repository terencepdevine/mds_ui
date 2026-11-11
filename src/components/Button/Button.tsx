import React from "react";
import { cn } from "../../utils/cn";
import type { ButtonProps } from "./Button.types";
import "./Button.scss";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      children,
      isLoading = false,
      showLeadingIcon = false,
      leadingIcon,
      showTrailingIcon = false,
      trailingIcon,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "button",
          `button--${variant}`,
          `button--${size}`,
          isLoading && "button--loading",
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {showLeadingIcon && leadingIcon && (
          <span className="button__icon button__icon--leading">
            {leadingIcon}
          </span>
        )}
        {isLoading ? "Loading..." : children}
        {showTrailingIcon && trailingIcon && (
          <span className="button__icon button__icon--trailing">
            {trailingIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
