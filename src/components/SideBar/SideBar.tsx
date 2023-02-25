import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

import { Logo } from '../UI/Logo';
import { IoListOutline, IoHomeOutline, IoLibraryOutline, IoReceiptOutline, IoRainyOutline } from 'react-icons/io5';
import { WiDayLightWind, WiDayFog } from 'react-icons/wi';
import style from './SideBar.module.scss';

const NavigationLink = [
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
  const { theme, toggleTheme } = useContext(ThemeContext) || {
    theme: 'default',
    toggleTheme: () => {},
  };
  return (
    <div className={style.sidebar}>
      <div className={style.content}>
        <div className={style.logo}>
          <Logo />
        </div>

        {NavigationLink.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? `${style.link} ${style.active}` : style.link)}
          >
            {link.title}
            {link.icon}
          </NavLink>
        ))}
      </div>
      <div className={style.theme}>
        <div className={theme !== 'dark' ? `${style.theme_text} ${style.active}` : `${style.theme_text}`}>Dark</div>
        <button className={style.theme_btn} onClick={toggleTheme}>
          {theme === 'dark' ? (
            <WiDayLightWind className={style.theme_icon} size={40} />
          ) : (
            <WiDayFog className={style.theme_icon} size={40} />
          )}
        </button>
        <div className={theme === 'dark' ? `${style.theme_text} ${style.active}` : `${style.theme_text}`}>Light</div>
      </div>
    </div>
  );
};
{
  /* <button className={style.theme} onClick={toggleTheme}>
{theme === 'dark' ? (
  <WiDayLightWind className={style.theme_icon} size={40} />
) : (
  <WiDayFog className={style.theme_icon} size={40} />
)}
</button> */
}
