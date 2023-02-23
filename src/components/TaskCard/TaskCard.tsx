import { useRef, useState, useEffect } from 'react';
import { IoChevronForward, IoSettingsOutline, IoAddOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { ICard } from '../../Interfaces';
import { addTask, updateColor, updateStatus } from '../../redux/TaskSlice';
import { CurrentCard } from '../CurrentCard/CurrentCard';
import { CustomModal } from '../CustomModal/CustomModal';
import { TaskList } from '../TaskList/TaskList';
import { UiButton } from '../UI/UiButton/UiButton';
import style from './TaskCard.module.scss';

export const TaskCard = ({ description, title, subTasks, id, status }: ICard) => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({ text: false, taskList: false });
  const [color, setColor] = useState('#2773e5');
  const [textValue, setTextValue] = useState({ description: '', status: 'unknown' });
  const completedTask = subTasks.filter((task) => task.completed);
  const percentage = Math.floor((completedTask.length / subTasks.length) * 100);

  const setStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateStatus({ cardId: id, status: e.target.value as ICard['status'] }));
  };

  useEffect(() => {
    switch (status) {
      case 'Not urgent':
        dispatch(updateColor({ cardId: id, color: '#2773e5' }));
        setColor('#2773e5');
        break;
      case 'Simple':
        dispatch(updateColor({ cardId: id, color: '#b97521' }));
        setColor('#b97521');
        break;
      case 'Critical':
        dispatch(updateColor({ cardId: id, color: '#b92121' }));
        setColor('#b92121');
        break;
      case 'Waiting':
        dispatch(updateColor({ cardId: id, color: '#727272' }));
        setColor('#727272');
        break;
      case 'Completed':
        dispatch(updateColor({ cardId: id, color: '#21b95d' }));
        setColor('#21b95d');
        break;
      case 'Other':
        dispatch(updateColor({ cardId: id, color: '#8327d7' }));
        setColor('#8327d7');
        break;
      default:
        break;
    }
  }, [setStatus]);

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (textValue.description.trim() !== '') {
      dispatch(addTask({ cardId: id, taskDescription: textValue.description }));
      setShowInput(false);
      setTextValue({ description: '', status: '' });
    }
  };

  const toggleText = () => {
    setIsVisible({ ...isVisible, text: isVisible.text ? false : true });
  };
  const toggleTaskList = () => {
    setIsVisible({ ...isVisible, taskList: isVisible.taskList ? false : true });
  };

  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CustomModal toggleModal={showModal} modalVisible={isOpen}>
        <CurrentCard
          status={status}
          setStatus={setStatus}
          setTextValue={setTextValue}
          description={description}
          title={title}
          id={id}
        />
      </CustomModal>
      <div className={style.card}>
        <div className={style.content}>
          <div className={style.top}>
            <div className={style.block}>
              <div className={style.title}>{title}</div>
              <div style={{ backgroundColor: color }} className={style.status}>
                {status}
              </div>
            </div>

            <div className={style.tools}>
              <IoChevronForward
                onClick={toggleText}
                className={isVisible.text ? `${style.icon} ${style.text}` : `${style.icon} ${style.text} ${style.rotate}`}
                size={26}
              />
              <IoSettingsOutline onClick={showModal} className={`${style.settings} ${style.icon}`} size={26} />
            </div>
          </div>
          <div className={isVisible.text ? `${style.descr} ${style.show}` : `${style.descr}`}>{description}</div>
          <div className={style.progress_bar}>
            <div style={{ width: `${percentage}%` }} className={style.progress}></div>
          </div>
          <form onSubmit={handleSubmit} className={style.form_task}>
            <div className={style.btns}>
              <UiButton type="button" onClick={() => setShowInput(!showInput)} size="sm" variant="primary">
                +Add task
              </UiButton>
              <UiButton type="button" onClick={toggleTaskList} size="sm" variant="primary">
                {isVisible.taskList ? 'Hide tasks' : 'Show tasks'}
              </UiButton>
            </div>

            <div className={showInput ? `${style.input_block} ${style.show}` : `${style.input_block}`}>
              <input
                className={style.input_task}
                value={textValue.description}
                ref={inputRef}
                onChange={(e) => setTextValue({ ...textValue, description: e.target.value })}
                type="text"
                placeholder="Write new task..."
              />
              <button className={style.add}>
                <IoAddOutline size={30} className={showInput ? `${style.plus} ${style.show}` : `${style.plus}`} />
              </button>
            </div>
          </form>
          <TaskList subTasks={subTasks} cardId={id} isVisible={isVisible.taskList} />
        </div>
      </div>
    </>
  );
};
