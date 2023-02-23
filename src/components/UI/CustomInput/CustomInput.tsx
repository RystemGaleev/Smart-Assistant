import { ChangeEvent } from 'react';
import style from './CustomInput.module.scss';

interface CustomInputProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  customRef?: React.RefObject<HTMLInputElement>;
  accept?: string;
  className?: string;
}

export const CustomInput = ({
  value,
  onChange,
  type,
  name,
  placeholder = '',
  customRef,
  accept,
  className,
}: CustomInputProps) => {
  return (
    <input
      accept={accept}
      ref={customRef}
      type={type}
      placeholder={placeholder}
      className={style[`${className}`]}
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};
