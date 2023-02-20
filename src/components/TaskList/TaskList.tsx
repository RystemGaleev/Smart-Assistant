import { ITask } from '../../Interfaces';
import { Task } from '../Task/Task';
import style from './TaskList.module.scss';

interface ITaskListProps {
  subTasks: ITask[];
  cardId: string;
  isVisible: boolean;
}

export const TaskList = ({ subTasks, cardId, isVisible }: ITaskListProps) => {
  return (
    <>
      {subTasks.length > 0 ? (
        <div className={isVisible ? `${style.list} ${style.show}` : `${style.list}`}>
          {subTasks.map((task, index) => (
            <Task cardId={cardId} key={task.id} {...task} index={index} />
          ))}
        </div>
      ) : null}
    </>
  );
};
