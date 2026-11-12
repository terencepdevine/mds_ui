import { HTMLAttributes, ReactNode } from 'react';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * AccordionItem elements
   */
  children: ReactNode;
}

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Headline shown in the trigger
   */
  headline: ReactNode;

  /**
   * Content revealed when the item is open
   */
  children: ReactNode;

  /**
   * Controlled open state
   */
  open?: boolean;

  /**
   * Initial open state when uncontrolled
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Called when the trigger toggles the open state
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}
