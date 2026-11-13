import { HTMLAttributes, ReactNode } from 'react';

export type AlertStatus = 'default' | 'warning' | 'error' | 'success';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Visual status, which sets the background color and icon
   * @default 'default'
   */
  status?: AlertStatus;

  /**
   * Bold heading shown next to the icon
   */
  heading: ReactNode;

  /**
   * Body text
   */
  children?: ReactNode;

  /**
   * Link label. The link is only shown when this is set.
   */
  linkLabel?: ReactNode;

  /**
   * Link destination
   */
  linkHref?: string;

  /**
   * Additional CSS classes
   */
  className?: string;
}
