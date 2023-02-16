import { Navbar } from '../../components/Navbar/Navbar';
import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          HEADER
          <Navbar />
        </div>
      </div>
    </header>
  );
};
