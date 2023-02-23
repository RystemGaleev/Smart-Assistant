import style from './CustomModal.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect } from 'react';

interface IModalProps {
  toggleModal: () => void;
  modalVisible: boolean;
  children: React.ReactElement;
}

export const CustomModal = ({ toggleModal, modalVisible, children }: IModalProps) => {
  useEffect(() => {
    const body = document.querySelector('body');
    if (body !== null) {
      body.style.marginRight = modalVisible ? '17px' : '0';
      body.style.overflow = modalVisible ? 'hidden' : 'auto';
    }
  }, [modalVisible]);

  return (
    <div className={modalVisible ? `${style.modal} ${style.show}` : `${style.modal}`} onClick={toggleModal}>
      <div className={style.content} onClick={(event) => event.stopPropagation()}>
        <IoCloseOutline onClick={toggleModal} className={style.close} size={30} />
        {children}
      </div>
    </div>
  );
};
