import { NavLink } from 'react-router-dom';
import style from './Navbar.module.scss';

const NavigationLink = [
  { path: '/', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/someone', title: 'someone' },
];

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      {NavigationLink.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            isActive ? style.link_active : style.link
          }
        >
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};
