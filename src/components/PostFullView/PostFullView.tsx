import { IPost } from '../../Interfaces';
import style from './PostFullView.module.scss';

export const PostFullView = ({ title, description, index, img }: IPost) => {
  return (
    <div className={style.post}>
      <div className={style.title}>{title}</div>
      {img ? (
        <div className={style.img}>
          <img src={img} alt={title} />
        </div>
      ) : null}
      <div className={style.description}>{description}</div>
    </div>
  );
};
