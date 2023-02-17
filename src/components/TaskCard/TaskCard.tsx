import { useState } from 'react';
import {
  IoChevronForward,
  IoSettingsOutline,
  IoChevronDownOutline,
} from 'react-icons/io5';
import { ITasks } from '../../Interfaces';
import { TaskList } from '../TaskList/TaskList';
import style from './TaskCard.module.scss';

export const TaskCard = ({ description, title }: ITasks) => {
  const [isVisible, setIsVisible] = useState(true);

  const showText = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div className={style.card}>
      <div className={style.content}>
        <div className={style.top}>
          <div className={style.title}>{title}</div>
          <div className={style.tools}>
            <IoChevronForward
              onClick={showText}
              className={
                isVisible
                  ? `${style.icon} ${style.text}`
                  : `${style.icon} ${style.text} ${style.rotate}`
              }
              size={26}
            />
            <IoSettingsOutline
              className={`${style.settings} ${style.icon}`}
              size={26}
            />
          </div>
        </div>

        <div
          className={
            isVisible ? `${style.descr} ${style.show}` : `${style.descr}`
          }
        >
          {description}
        </div>

        <div className={style.progress_bar}>
          <div className={style.progress}></div>
        </div>
        <TaskList />
      </div>
    </div>
  );
};
