import { Task } from '../Task/Task';
import style from './TaskList.module.scss';

export const TaskList = () => {
  return (
    <div className={style.list}>
      <Task />
      <Task />
    </div>
  );
};
