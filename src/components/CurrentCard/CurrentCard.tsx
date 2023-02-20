import { UiButton } from '../UI/UiButton/UiButton';
import style from './CurrentCard.module.scss';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { deleteCard } from '../../redux/TaskSlice';

interface ICurrentCardProps {
  title: string;

  id: string;
}

export const CurrentCard = ({ title, id }: ICurrentCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.title}>{title}</div>

        <UiButton onClick={() => dispatch(deleteCard(id))} size="md" variant="primary">
          Remove card
        </UiButton>
      </div>
    </div>
  );
};
