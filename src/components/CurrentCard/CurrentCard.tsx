import { useAppDispatch } from '../../hooks/reduxHooks';
import { deleteCard, updateTitle, updateDescription } from '../../redux/TaskSlice';

import { UiButton } from '../UI/UiButton/UiButton';
import { ICard } from '../../Interfaces';
import { StatusSelect } from '../UI/Select/StatusSelect';

import { IoCreateOutline } from 'react-icons/io5';
import style from './CurrentCard.module.scss';
import { FormEvent, useState } from 'react';
import { CustomInput } from '../UI/CustomInput/CustomInput';
import { CustomForm } from '../UI/CustomForm/CustomForm';
import { optionsSelect } from '../../Utils';

interface ICurrentCardProps {
  title: string;
  description: string;
  id: string;
  status: ICard['status'];
  setTextValue: (value: { description: string; status: string }) => void;
  setStatus: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrentCard = ({ title, id, description, status, setStatus }: ICurrentCardProps) => {
  const dispatch = useAppDispatch();
  const [showText, setShowText] = useState({
    title: true,
    description: true,
  });
  const [newText, setNewText] = useState({
    newTitle: '',
    newDescription: '',
  });

  const toggleShowTitle = () => {
    setShowText({ ...showText, title: !showText.title });
  };
  const toggleShowDescription = () => {
    setShowText((prev) => ({ ...prev, description: !prev.description }));
  };

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText({ ...newText, newTitle: e.target.value });
  };
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText({ ...newText, newDescription: e.target.value });
  };

  const handleSubmitTitle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateTitle({ cardId: id, newTitle: newText.newTitle }));
    toggleShowTitle();
  };
  const handleSubmitDescription = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateDescription({ cardId: id, newDescription: newText.newDescription }));
    toggleShowDescription();
  };

  return (
    <div className={style.card}>
      <div className={style.top}>
        {showText.title ? (
          <div className={style.title}>{title}</div>
        ) : (
          <CustomForm handleSubmit={handleSubmitTitle}>
            <CustomInput className="input" onChange={handleChangeTitle} value={newText.newTitle} />
          </CustomForm>
        )}
        <div className={style.icon}>
          <IoCreateOutline onClick={toggleShowTitle} size={30} />
        </div>
      </div>
      <div className={style.top}>
        {showText.description ? (
          <div className={style.description}>{description}</div>
        ) : (
          <CustomForm handleSubmit={handleSubmitDescription}>
            <CustomInput className="input" onChange={handleChangeDescription} value={newText.newDescription} />
          </CustomForm>
        )}
        <div className={style.icon}>
          <IoCreateOutline onClick={toggleShowDescription} size={30} />
        </div>
      </div>

      <div className={style.block}>
        <StatusSelect options={optionsSelect} value={status} onChange={setStatus} />
        <UiButton onClick={() => dispatch(deleteCard(id))} size="md" variant="primary">
          Remove card
        </UiButton>
      </div>
    </div>
  );
};
