import { UiButton } from '../UI/UiButton/UiButton';
import style from './CurrentCard.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { deleteCard } from '../../redux/TaskSlice';

interface ICurrentCardProps {
  title: string;
  description: string;
  id: string;
  newStatus: string;
  setNewStatus: (newStatus: string) => void;
  setStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrentCard = ({ title, id, description, newStatus, setStatus }: ICurrentCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.card}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.block}>
        <select className={style.select} name="status" value={newStatus} onChange={setStatus}>
          <option value="Not urgent">Not urgent</option>
          <option value="Simple">Simple</option>
          <option value="Critical">Critical</option>
          <option value="Waiting">Waiting</option>
          <option value="Completed">Completed</option>
        </select>
        <UiButton onClick={() => dispatch(deleteCard(id))} size="md" variant="primary">
          Remove card
        </UiButton>
      </div>
    </div>
  );
};
