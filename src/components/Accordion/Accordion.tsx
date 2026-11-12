import React, { useId, useState } from "react";
import { cn } from "../../utils/cn";
import arrowDownIcon from "../../assets/icons/arrow-down.svg";
import type { AccordionItemProps, AccordionProps } from "./Accordion.types";
import "./Accordion.scss";

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={cn("accordion", className)} {...props}>
      {children}
    </div>
  ),
);

Accordion.displayName = "Accordion";

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      headline,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      className,
      ...props
    },
    ref,
  ) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = openProp !== undefined;
    const open = isControlled ? openProp : uncontrolledOpen;

    const id = useId();
    const triggerId = `${id}-trigger`;
    const contentId = `${id}-content`;

    const toggle = () => {
      const next = !open;
      if (!isControlled) setUncontrolledOpen(next);
      onOpenChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={cn("accordion-item", open && "accordion-item--open", className)}
        {...props}
      >
        <button
          type="button"
          id={triggerId}
          className="accordion-item__trigger"
          aria-expanded={open}
          aria-controls={contentId}
          onClick={toggle}
        >
          <span className="accordion-item__headline">{headline}</span>
          <img
            className="accordion-item__icon"
            src={arrowDownIcon}
            width={24}
            height={24}
            alt=""
            aria-hidden="true"
          />
        </button>
        <div
          id={contentId}
          role="region"
          aria-labelledby={triggerId}
          className="accordion-item__content"
          hidden={!open}
        >
          {children}
        </div>
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
