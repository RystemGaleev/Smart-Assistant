import { FormEvent } from 'react';
import style from './CustomForm.module.scss';

interface CustomFormProps {
  children: React.ReactElement;
  title?: string;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const CustomForm = ({ children, title, handleSubmit }: CustomFormProps) => {
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      {title ? <div className={style.title}>{title}</div> : null}
      {children}
    </form>
  );
};
