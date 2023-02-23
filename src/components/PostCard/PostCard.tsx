import { useState } from 'react';
import { IoEllipsisVerticalOutline, IoExpandOutline, IoCloseOutline } from 'react-icons/io5';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useDropDown } from '../../hooks/useDropDown';
import { IPost } from '../../Interfaces';
import { deletePost } from '../../redux/LibrarySlice';
import { CustomModal } from '../UI/CustomModal/CustomModal';
import { PostFullView } from '../PostFullView/PostFullView';
import { DropDown } from '../UI/DropDown/DropDown';
import style from './PostCard.module.scss';
// IoCreateOutline IoEllipsisVerticalOutline
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
  const dropDownList = [
    { label: 'Delete', icon: <IoCloseOutline onClick={deleteCurrentPost} size={26} /> },
    { label: 'View', icon: <IoExpandOutline onClick={showPost} size={26} /> },
  ];

  return (
    <>
      <CustomModal toggleModal={showPost} modalVisible={postVisible}>
        <PostFullView {...props} />
      </CustomModal>
      <div className={style.post}>
        <div className={style.content}>
          <div className={style.num}>{index}</div>
          <div className={style.block}>
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
              {dropDownList.map((item) => (
                <div key={item.label} className={style.drop_item}>
                  {item.label}
                  {item.icon}
                </div>
              ))}
            </div>
          </DropDown>
        </div>
      </div>
    </>
  );
};
