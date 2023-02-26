import style from './BurgerMenu.module.scss';
interface IBurger {
  toggleMenu: () => void;
  isOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isOpen }: IBurger) => {
  return (
    <div onClick={toggleMenu} className={style.burger}>
      <span className={isOpen ? `${style.line_active}` : `${style.line}`}></span>
      <span className={isOpen ? `${style.line_active}` : `${style.line}`}></span>
      <span className={isOpen ? `${style.line_active}` : `${style.line}`}></span>
    </div>
  );
};
