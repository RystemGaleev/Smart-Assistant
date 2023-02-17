import {
  IoCloseCircleOutline,
  IoCheckmarkCircleOutline,
} from 'react-icons/io5';
import style from './Task.module.scss';

export const Task = () => {
  return (
    <div className={style.task}>
      <div className={style.descr}>Did someone you want wednesday</div>
      <div className={style.tools}>
        <button className={`${style.button} ${style.completed}`}>
          <IoCheckmarkCircleOutline size={30} />
        </button>
        <button className={`${style.button} ${style.remove}`}>
          <IoCloseCircleOutline size={30} />
        </button>
      </div>
    </div>
  );
};
