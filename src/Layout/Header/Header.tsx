import { useState } from 'react';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import style from './Header.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { SideBarMobile } from '../../components/SideBar/SideBarMobile';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div onClick={toggleMenu} className={isOpen ? `${style.overlay} ${style.active}` : `${style.overlay}`}>
        <div
          onClick={(e) => e.stopPropagation()}
          className={isOpen ? `${style.overlay_content} ${style.active}` : `${style.overlay_content}`}
        >
          <AiOutlineClose onClick={toggleMenu} size={30} className={style.close_icon} />
          <SideBarMobile />
        </div>
      </div>
      <header className={style.header}>
        <div className="container">
          <div className={style.wrapper}>
            <Link to="/" className={style.logo}>
              Smart Assistant
            </Link>
            <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        </div>
      </header>
    </>
  );
};
