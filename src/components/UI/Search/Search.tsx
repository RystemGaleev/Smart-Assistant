import style from './Search.module.scss';
import { TfiSearch } from 'react-icons/tfi';
import { IoCloseOutline } from 'react-icons/io5';

interface SearchProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className={style.block}>
      <input
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className={style.search}
        placeholder="Enter what you are looking for..."
      />
      {!searchValue.length ? (
        <TfiSearch size={24} className={style.icon} />
      ) : (
        <IoCloseOutline onClick={clearSearch} size={24} className={style.icon} />
      )}
    </div>
  );
};
