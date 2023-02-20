import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ITask } from '../../Interfaces';
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(toggleCompletedTask({ cardId: cardId, taskId: id }))
          }
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
            dispatch(removeTask({ cardId: cardId, taskId: id }))
          }
          className={style.remove}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

// import { IoCloseCircleOutline, IoCheckmarkCircleOutline } from 'react-icons/io5';
// import { useAppDispatch } from '../../hooks/reduxHooks';
// import { ITask } from '../../Interfaces';
// import { removeTask, toggleCompletedTask } from '../../redux/TaskSlice';
// import style from './Task.module.scss';

// interface ITaskProps {
//   description: string;
//   completed: boolean;
//   id: string;
//   cardId: string;
// }

// export const Task = ({ description, completed, id, cardId }: ITaskProps) => {
//   const dispatch = useAppDispatch();
//   return (
//     <div className={style.task}>
//       <div className={completed ? `${style.descr} ${style.completed}` : `${style.descr}`}>
//         {description}
//       </div>
//       <div className={style.tools}>
//         <button
//           onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
//             dispatch(toggleCompletedTask({ cardId: cardId, taskId: id }))
//           }
//           className={`${style.button} ${style.completed}`}
//         >
//           <IoCheckmarkCircleOutline size={30} />
//         </button>
//         <button
//           onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
//             dispatch(removeTask({ cardId: cardId, taskId: id }))
//           }
//           className={`${style.button} ${style.remove}`}
//         >
//           <IoCloseCircleOutline size={30} />
//         </button>
//       </div>
//     </div>
//   );
// };
