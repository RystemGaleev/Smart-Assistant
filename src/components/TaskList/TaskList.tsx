import { ITask } from '../../Interfaces';
import { Task } from '../Task/Task';
import style from './TaskList.module.scss';

interface ITaskListProps {
  subTasks: ITask[];
  cardId: string;
}

export const TaskList = ({ subTasks, cardId }: ITaskListProps) => {
  return (
    <div className={style.list}>
      {subTasks.map((task) => (
        <Task cardId={cardId} key={task.id} {...task} />
      ))}
    </div>
  );
};
