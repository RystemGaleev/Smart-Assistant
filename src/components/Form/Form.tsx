import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { UiButton } from '../UI/UiButton/UiButton';
import { addCard } from '../../redux/TaskSlice';
import style from './Form.module.scss';

interface IModalProps {
  toggleModal: () => void;
}

export const Form = ({ toggleModal }: IModalProps) => {
  const dispatch = useAppDispatch();
  const [taskValue, setTaskValue] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCard(taskValue));
    setTaskValue({ title: '', description: '' });
    toggleModal();
  };

  console.log(taskValue);
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.title}>Create new task</div>
      <div className={style.inputs}>
        <div className={style.block}>
          <label htmlFor="title">Title</label>
          <input
            value={taskValue.title}
            onChange={(e) =>
              setTaskValue({ ...taskValue, title: e.target.value })
            }
            type="text"
            name="title"
            className={style.input}
          />
        </div>
        <div className={style.block}>
          <label htmlFor="descr">Description</label>
          <textarea
            value={taskValue.description}
            onChange={(e) =>
              setTaskValue({ ...taskValue, description: e.target.value })
            }
            name="descr"
            className={style.textarea}
          />
        </div>
      </div>
      <UiButton size="md" variant="primary">
        Create
      </UiButton>
    </form>
  );
};
