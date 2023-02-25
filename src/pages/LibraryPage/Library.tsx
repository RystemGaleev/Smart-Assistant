import { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useDebounce } from '../../hooks/useDebounce';
import { filterItems } from '../../Utils';

import { Search } from '../../components/UI/Search/Search';
import { addPost } from '../../redux/LibrarySlice';
import { PostCard } from '../../components/PostCard/PostCard';
import { UiButton } from '../../components/UI/UiButton/UiButton';
import { CustomModal } from '../../components/UI/CustomModal/CustomModal';
import { CustomForm } from '../../components/UI/CustomForm/CustomForm';
import { CustomInput } from '../../components/UI/CustomInput/CustomInput';
import { CustomTextarea } from '../../components/UI/CustomTextarea/CustomTextarea';

import { motion } from 'framer-motion';
import { AnimationPage, PageTranstition } from '../../Animation/Animation';
import { Layout } from '../../Layout/Layout';
import './Library.scss';

export const Library = () => {
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const { posts } = useAppSelector((state) => state.library);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [postValue, setPostValue] = useState({ title: '', description: '', img: '' });

  const [searchValue, setSearchValue] = useState('');
  const debouncedValue = useDebounce(searchValue, 1500);
  const filteredPosts = filterItems(posts, debouncedValue);

  const toggleModal = () => setIsOpen((prev) => !prev);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = postValue;
    if (title.trim() !== '' && description.trim() !== '') {
      dispatch(addPost(postValue));
      setPostValue({ title: '', description: '', img: '' });
      if (inputRef && inputRef.current) {
        inputRef.current.value = '';
      }
      toggleModal();
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };

  const convertFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || '';
      const reader = new FileReader();
      reader.readAsDataURL(fileRef);
      reader.onload = (ev: any) => {
        setPostValue({ ...postValue, img: ev.target.result });
      };
    }
  };

  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} modalVisible={isOpen}>
        <CustomForm handleSubmit={handleSubmit} title="Create new post">
          <>
            {error && error && <p className="error-message">{error}</p>}
            <CustomInput
              value={postValue.title}
              onChange={(e) => setPostValue({ ...postValue, title: e.target.value })}
              name="title"
              type="text"
              placeholder="Title"
              className="input"
            />
            <CustomTextarea
              value={postValue.description}
              onChange={(e) => setPostValue({ ...postValue, description: e.target.value })}
              name="descr"
              placeholder="Description"
              className="textarea"
            />
            <CustomInput
              customRef={inputRef}
              accept=".jpg,.jpeg,.png"
              type="file"
              onChange={(e) => convertFile(e.target.files)}
            />
            <UiButton variant="primary" size="md">
              Create
            </UiButton>
          </>
        </CustomForm>
      </CustomModal>

      <motion.section
        className="library"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <div className="library__top">
            <h2 className="title">Library</h2>
            <div className="library__tools">
              <Search setSearchValue={setSearchValue} searchValue={searchValue} />
              <UiButton onClick={toggleModal} size="md" variant="primary">
                Create post
              </UiButton>
            </div>
          </div>
          <div className="library__wrapper">
            {filteredPosts.length ? (
              filteredPosts?.map((post, index) => <PostCard key={post.id} {...post} index={index + 1} />)
            ) : (
              <div className="library__error">Unfortunately nothing was found :(</div>
            )}
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
