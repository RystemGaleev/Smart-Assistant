import style from './Header.module.scss';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <div className={style.logo}>Task Helper</div>
        </div>
      </div>
    </header>
  );
};
