import { useContext } from 'react';
import { WiDayLightWind, WiDayFog } from 'react-icons/wi';
import { ThemeContext } from '../../../context/ThemeContext';
import style from './ThemeToggler.module.scss';

export const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext) || {
    theme: 'default',
    toggleTheme: () => {},
  };
  return (
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
  );
};
