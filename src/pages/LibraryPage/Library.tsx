import { useState } from 'react';
import { CustomModal } from '../../components/UI/CustomModal/CustomModal';
import { LibraryForm } from '../../components/LibraryForm/LibraryForm';
import { PostCard } from '../../components/PostCard/PostCard';
import { PostFullView } from '../../components/PostFullView/PostFullView';
import { UiButton } from '../../components/UI/UiButton/UiButton';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Layout } from '../../Layout/Layout';
import './Library.scss';

export const Library = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { posts } = useAppSelector((state) => state.library);
  const showModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Layout>
      <CustomModal toggleModal={showModal} modalVisible={isOpen}>
        <LibraryForm toggleModal={showModal} />
      </CustomModal>
      <div className="library">
        <div className="container">
          <div className="library__top">
            <h2 className="title">Library</h2>
            <UiButton onClick={showModal} size="md" variant="primary">
              Create post
            </UiButton>
          </div>
          <div className="library__wrapper">
            {posts?.map((post, index) => (
              <PostCard key={post.id} {...post} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
