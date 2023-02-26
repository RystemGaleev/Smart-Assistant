import { NavLink } from 'react-router-dom';
import { Logo } from '../UI/Logo';
import { IoListOutline, IoHomeOutline, IoLibraryOutline, IoRainyOutline } from 'react-icons/io5';
import style from './SideBar.module.scss';
import { ThemeToggler } from '../UI/ThemeToggler/ThemeToggler';

export const NavigationLinks = [
  {
    path: '/',
    title: 'Home',
    icon: <IoHomeOutline className={style.icon} size={26} />,
  },
  {
    path: '/taskmanager',
    title: 'Task manager',
    icon: <IoListOutline className={style.icon} size={26} />,
  },
  {
    path: '/library',
    title: 'Library',
    icon: <IoLibraryOutline className={style.icon} size={26} />,
  },
  {
    path: '/weather',
    title: 'Weather',
    icon: <IoRainyOutline className={style.icon} size={26} />,
  },
];

export const SideBar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.content}>
        <div className={style.logo}>
          <Logo />
        </div>

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
    </div>
  );
};
