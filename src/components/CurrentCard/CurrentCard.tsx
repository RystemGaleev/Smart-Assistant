import { UiButton } from '../UI/UiButton/UiButton';
import style from './CurrentCard.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { deleteCard } from '../../redux/TaskSlice';
import { ICard } from '../../Interfaces';
import { StatusSelect } from '../UI/Select/StatusSelect';

interface ICurrentCardProps {
  title: string;
  description: string;
  id: string;
  status: ICard['status'];
  setTextValue: (value: { description: string; status: string }) => void;
  setStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrentCard = ({ title, id, description, status, setStatus }: ICurrentCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.card}>
      <div className={style.title}>{title}</div>
      <div className={style.description}>{description}</div>
      <div className={style.block}>
        <StatusSelect value={status} onChange={setStatus} />
        <UiButton onClick={() => dispatch(deleteCard(id))} size="md" variant="primary">
          Remove card
        </UiButton>
      </div>
    </div>
  );
};
