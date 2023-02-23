import { useAppDispatch } from '../../hooks/reduxHooks';
import { removeTask, toggleCompletedTask } from '../../redux/TaskSlice';
import style from './Task.module.scss';

interface ITaskProps {
  description: string;
  completed: boolean;
  id: string;
  cardId: string;
  index: number;
}

export const Task = ({ description, completed, id, cardId, index }: ITaskProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.task}>
      <div className={completed ? `${style.descr} ${style.completed}` : `${style.descr}`}>
        {index + 1}. {description}
      </div>
      <div className={style.tools}>
        <input
          className={style.checkbox}
          type="checkbox"
          id="cb1"
          name="cb1"
          checked={completed ? true : false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(toggleCompletedTask({ cardId: cardId, taskId: id }))}
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => dispatch(removeTask({ cardId: cardId, taskId: id }))}
          className={style.remove}
        >
          &times;
        </button>
      </div>
    </div>
  );
};
