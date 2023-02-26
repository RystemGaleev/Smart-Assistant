import { useState } from 'react';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import style from './Header.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { SideBarMobile } from '../../components/SideBar/SideBarMobile';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className={isOpen ? `${style.overlay} ${style.active}` : `${style.overlay}`}>
        <div className={isOpen ? `${style.overlay_content} ${style.active}` : `${style.overlay_content}`}>
          <AiOutlineClose onClick={toggleMenu} size={30} className={style.close_icon} />
          <SideBarMobile />
        </div>
      </div>
      <header className={style.header}>
        <div className="container">
          <div className={style.wrapper}>
            <div className={style.logo}>Smart Assistant</div>
            <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </header>
    </>
  );
};
