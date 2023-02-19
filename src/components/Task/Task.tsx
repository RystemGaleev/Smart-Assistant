import {
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ITask } from '../../Interfaces';
import { removeTask, toggleCompletedTask } from '../../redux/TaskSlice';
import style from './Task.module.scss';

interface ITaskProps {
  description: string;
  completed: boolean;
  id: string;
  cardId: string;
}

export const Task = ({ description, completed, id, cardId }: ITaskProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className={style.task}>
      <div
        className={
          completed ? `${style.descr} ${style.completed}` : `${style.descr}`
        }
      >
        {description}
      </div>
      <div className={style.tools}>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            dispatch(toggleCompletedTask({ cardId: cardId, taskId: id }))
          }
          className={`${style.button} ${style.completed}`}
        >
          <IoCheckmarkCircleOutline size={30} />
        </button>
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            dispatch(removeTask({ cardId: cardId, taskId: id }))
          }
          className={`${style.button} ${style.remove}`}
        >
          <IoCloseCircleOutline size={30} />
        </button>
      </div>
    </div>
  );
};
