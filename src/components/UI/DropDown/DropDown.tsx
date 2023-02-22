import style from './DropDown.module.scss';

interface DropDownProps {
  children: React.ReactElement;
  isDrop: boolean;
}

export const DropDown = ({ children, isDrop }: DropDownProps) => {
  return <div className={isDrop ? `${style.drop} ${style.show}` : `${style.drop}`}>{children}</div>;
};
