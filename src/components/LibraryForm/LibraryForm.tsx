import { useState } from 'react';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { IModalProps } from '../../Interfaces';
import { addPost } from '../../redux/LibrarySlice';
import { UiButton } from '../UI/UiButton/UiButton';
import style from './LibraryForm.module.scss';

export const LibraryForm = ({ toggleModal }: IModalProps) => {
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');
  const [postValue, setPostValue] = useState({
    title: '',
    description: '',
    img: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = postValue;
    if (title.trim() !== '' && description.trim() !== '') {
      dispatch(addPost(postValue));
      setPostValue({ title: '', description: '', img: '' });
      toggleModal();
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || '';
      const reader = new FileReader();
      reader.readAsDataURL(fileRef);
      reader.onload = (ev: any) => {
        setPostValue({ ...postValue, img: ev.target.result });
      };
    }
  }
  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <div className={style.title}>Create new post</div>
      {error && error && <p className={style.error}>{error}</p>}
      <div className={style.block}>
        <input
          className={style.input}
          value={postValue.title}
          onChange={(e) => setPostValue({ ...postValue, title: e.target.value })}
          name="title"
          type="text"
          placeholder="Title"
        />
        <textarea
          className={style.textarea}
          value={postValue.description}
          onChange={(e) => setPostValue({ ...postValue, description: e.target.value })}
          name="descr"
          placeholder="Description"
        />
        <input accept=".jpg,.jpeg,.png" type="file" onChange={(e) => convertFile(e.target.files)} />
      </div>
      <UiButton variant="primary" size="md">
        Create
      </UiButton>
    </form>
  );
};
function useRef(arg0: null) {
  throw new Error('Function not implemented.');
}
