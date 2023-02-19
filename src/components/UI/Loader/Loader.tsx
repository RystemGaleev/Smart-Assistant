import style from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.spinner}>
      <div className={style.loader}>
        <svg id="triangle" width="128" height="128" viewBox="-3 -4 39 39">
          <polygon
            fill="transparent"
            stroke="teal"
            strokeWidth="1"
            points="16,0 32,32 0,32"
          />
        </svg>
        LOADING
      </div>
    </div>
  );
};
