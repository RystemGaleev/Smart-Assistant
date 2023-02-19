import { useState } from 'react';
import {
  IoChevronForward,
  IoSettingsOutline,
  IoAddOutline,
} from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { ICard } from '../../Interfaces';
import { addTask } from '../../redux/TaskSlice';
import { TaskList } from '../TaskList/TaskList';
import { UiButton } from '../UI/UiButton/UiButton';

import style from './TaskCard.module.scss';

export const TaskCard = ({ description, title, subTasks, id }: ICard) => {
  const dispatch = useAppDispatch();
  const [showInput, setShowInput] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [textValue, setTextValue] = useState({
    description: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTask({ cardId: id, taskDescription: textValue.description }));
    setShowInput(false);
    setTextValue({ description: '' });
  };

  const addNewTask = () => {};
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

        <form onSubmit={handleSubmit}>
          <UiButton
            onClick={() => setShowInput(!showInput)}
            size="sm"
            variant="primary"
          >
            +Add task
          </UiButton>
          <div
            className={
              showInput
                ? `${style.input_block} ${style.show}`
                : `${style.input_block}`
            }
          >
            <input
              className={style.input_task}
              value={textValue.description}
              onChange={(e) =>
                setTextValue({ ...textValue, description: e.target.value })
              }
              type="text"
              placeholder="Write new task..."
            />
            <button className={style.add}>
              <IoAddOutline size={30} className={style.plus} />
            </button>
          </div>
        </form>

        <TaskList subTasks={subTasks} cardId={id} />
      </div>
    </div>
  );
};
