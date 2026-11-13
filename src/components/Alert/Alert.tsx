import React from "react";
import { cn } from "../../utils/cn";
import informationCircleIcon from "../../assets/icons/information-circle.svg";
import exclamationTriangleIcon from "../../assets/icons/exclamation-triangle.svg";
import xCircleIcon from "../../assets/icons/x-circle.svg";
import checkCircleIcon from "../../assets/icons/check-circle.svg";
import type { AlertProps, AlertStatus } from "./Alert.types";
import "./Alert.scss";

const statusIcons: Record<AlertStatus, string> = {
  default: informationCircleIcon,
  warning: exclamationTriangleIcon,
  error: xCircleIcon,
  success: checkCircleIcon,
};

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      status = "default",
      heading,
      children,
      linkLabel,
      linkHref,
      className,
      ...props
    },
    ref,
  ) => {
    const isUrgent = status === "error" || status === "warning";

    return (
      <div
        ref={ref}
        role={isUrgent ? "alert" : "status"}
        className={cn("alert", `alert--${status}`, className)}
        {...props}
      >
        <img
          className="alert__icon"
          src={statusIcons[status]}
          width={20}
          height={20}
          alt=""
          aria-hidden="true"
        />
        <div className="alert__body">
          <p className="alert__heading">{heading}</p>
          {children && <div className="alert__text">{children}</div>}
          {linkLabel && (
            <a className="alert__link" href={linkHref}>
              {linkLabel}
            </a>
          )}
        </div>
      </div>
    );
  },
);

Alert.displayName = "Alert";
