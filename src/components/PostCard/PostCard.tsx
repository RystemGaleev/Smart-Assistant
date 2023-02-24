import { useState } from 'react';
import { deletePost } from '../../redux/LibrarySlice';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useDropDown } from '../../hooks/useDropDown';

import { PostFullView } from '../PostFullView/PostFullView';
import { CustomModal } from '../UI/CustomModal/CustomModal';
import { DropDown } from '../UI/DropDown/DropDown';

import { IoEllipsisVerticalOutline, IoExpandOutline, IoCloseOutline } from 'react-icons/io5';
import { IPost } from '../../Interfaces';
import style from './PostCard.module.scss';

export const PostCard = (props: IPost) => {
  const dispatch = useAppDispatch();
  const [postVisible, setPostVisible] = useState(false);
  const { toggleDropDown, isDrop, setIsDrop } = useDropDown();
  const { title, description, index, img, id } = props;

  const deleteCurrentPost = () => {
    if (id) {
      dispatch(deletePost({ id: id }));
    }
  };
  const showPost = () => {
    setPostVisible((prev) => !prev);
    setIsDrop(false);
  };

  return (
    <>
      <CustomModal toggleModal={showPost} modalVisible={postVisible}>
        <PostFullView {...props} />
      </CustomModal>
      <div className={style.post}>
        <div className={style.content}>
          <div className={img ? `${style.block} ` : `${style.block} ${style.full}`}>
            <div className={style.title}>{title}</div>
            <div className={style.description}>{description}</div>
          </div>
          {img ? (
            <div className={style.img}>
              <img src={img} alt={title} />
            </div>
          ) : null}
        </div>
        <div className={style.tools_block}>
          <IoEllipsisVerticalOutline onClick={toggleDropDown} className={style.drop} size={30} />
          <DropDown isDrop={isDrop}>
            <div className={style.drop_menu}>
              <div onClick={deleteCurrentPost} className={style.drop_item}>
                Delete
                <IoCloseOutline size={26} />
              </div>
              <div onClick={showPost} className={style.drop_item}>
                View
                <IoExpandOutline size={26} />
              </div>
            </div>
          </DropDown>
        </div>
      </div>
    </>
  );
};
