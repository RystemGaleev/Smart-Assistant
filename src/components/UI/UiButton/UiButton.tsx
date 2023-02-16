import { FC } from 'react';
import './UiButton.scss';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  variant: string;
  size: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const UiButton: FC<ButtonProps> = ({
  children,
  variant,
  size,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={clsx('btn', {
        [`btn-${variant} btn-${size}`]: true,
      })}
    >
      {children}
    </button>
  );
};
