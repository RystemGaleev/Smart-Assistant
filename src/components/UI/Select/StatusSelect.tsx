import { ICard } from '../../../Interfaces';
import style from './StatusSelect.module.scss';

const options = [
  { value: 'All', label: 'All' },
  { value: 'Completed', label: 'Completed' },
  { value: 'Waiting', label: 'Waiting' },
  { value: 'Other', label: 'Other' },
  { value: 'Not urgent', label: 'Not urgent' },
  { value: 'Simple', label: 'Simple' },
  { value: 'Critical', label: ' Critical' },
];
interface ISelectProps {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: ICard['status'];
}

export const StatusSelect = ({ value, onChange }: ISelectProps) => {
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
