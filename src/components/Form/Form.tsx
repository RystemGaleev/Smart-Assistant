import { ChangeEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { UiButton } from '../UI/UiButton/UiButton';
import { addCard } from '../../redux/TaskSlice';
import { ICard, IModalProps } from '../../Interfaces';
import style from './Form.module.scss';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import { CustomTextarea } from '../UI/CustomTextarea/CustomTextarea';
import { CustomForm } from '../UI/CustomForm/CustomForm';

export const Form = ({ toggleModal }: IModalProps) => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');
  const [taskValue, setTaskValue] = useState<ICard>({
    title: '',
    description: '',
    status: 'Not urgent',
    id: '',
    subTasks: [],
    color: '#2773e5',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = taskValue;
    if (title.trim() !== '' && description.trim() !== '') {
      dispatch(addCard(taskValue));
      setTaskValue({ title: '', description: '', status: 'Not urgent', color: '#2773e5', id: '', subTasks: [] });
      toggleModal();
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <CustomForm handleSubmit={handleSubmit} title={'Create new card'}>
      <>
        <div className={style.inputs}>
          {error && error && <p className={style.error}>{error}</p>}
          <CustomInput
            value={taskValue.title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskValue({ ...taskValue, title: e.target.value })}
            type="text"
            name="title"
            placeholder="Title"
            className="input"
          />
          <CustomTextarea
            value={taskValue.description}
            onChange={(e) => setTaskValue({ ...taskValue, description: e.target.value })}
            name="descr"
            className="textarea"
            placeholder="Description"
          />
        </div>
        <UiButton size="md" variant="primary">
          Create
        </UiButton>
      </>
    </CustomForm>
  );
};

{
  /* <form onSubmit={handleSubmit} className={style.form}>
<div className={style.title}>Create new card</div>
<div className={style.inputs}>
  {error && error && <p className={style.error}>{error}</p>}
  <CustomInput
    value={taskValue.title}
    onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskValue({ ...taskValue, title: e.target.value })}
    type="text"
    name="title"
    placeholder="Title"
    className="input"
  />
  <CustomTextarea
    value={taskValue.description}
    onChange={(e) => setTaskValue({ ...taskValue, description: e.target.value })}
    name="descr"
    className="textarea"
    placeholder="Description"
  />
</div>
<UiButton size="md" variant="primary">
  Create
</UiButton>
</form> */
}
