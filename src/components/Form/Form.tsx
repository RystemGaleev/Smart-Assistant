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
  const [error, setError] = useState('');
  const [taskValue, setTaskValue] = useState({
    title: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = taskValue;
    if (title.trim() !== '' && description.trim() !== '') {
      dispatch(addCard(taskValue));
      setTaskValue({ title: '', description: '' });
      toggleModal();
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.title}>Create new card</div>
      <div className={style.inputs}>
        {error && error ? <p className={style.error}>{error}</p> : null}
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
