import { ChangeEvent } from 'react';
import style from './CustomTextarea.module.scss';

interface CustomTextareaProps {
  type?: string;
  name?: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export const CustomTextarea = ({ value, onChange, name, placeholder = '', className }: CustomTextareaProps) => {
  return <textarea value={value} onChange={onChange} name={name} placeholder={placeholder} className={style[`${className}`]} />;
};
