import style from './CustomModal.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

export const CustomModal = ({ toggleModal, modalVisible, children }: any) => {
  return (
    <div
      className={modalVisible ? `${style.modal} ${style.show}` : `${style.modal}`}
      onClick={toggleModal}
    >
      <div className={style.content} onClick={(event) => event.stopPropagation()}>
        <IoCloseOutline onClick={toggleModal} className={style.close} size={30} />
        {children}
      </div>
    </div>
  );
};
