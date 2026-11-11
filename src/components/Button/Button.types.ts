import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  isLoading?: boolean;

  /**
   * Whether to show the leading icon
   * @default false
   */
  showLeadingIcon?: boolean;

  /**
   * Leading icon component
   */
  leadingIcon?: ReactNode;

  /**
   * Whether to show the trailing icon
   * @default false
   */
  showTrailingIcon?: boolean;

  /**
   * Trailing icon component
   */
  trailingIcon?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}
