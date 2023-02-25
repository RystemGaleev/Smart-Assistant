import { ICard } from '../../../Interfaces';
import style from './StatusSelect.module.scss';

interface ISelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: ICard['status'];
  options: [{ value: string; label: string }];
}

export const StatusSelect = ({ value, onChange, options }: ISelectProps) => {
  return (
    <select value={value} onChange={onChange} className={style.select}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
