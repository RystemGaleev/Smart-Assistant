import style from './SideBarMobile.module.scss';
import { NavigationLinks } from './SideBar';
import { NavLink } from 'react-router-dom';
import { ThemeToggler } from '../UI/ThemeToggler/ThemeToggler';

export const SideBarMobile = () => {
  return (
    <div className={style.list}>
      {NavigationLinks.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
        >
          {link.title}
          {link.icon}
        </NavLink>
      ))}
      <ThemeToggler />
    </div>
  );
};
