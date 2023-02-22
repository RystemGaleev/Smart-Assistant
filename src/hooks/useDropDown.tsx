import { useState } from 'react';

export const useDropDown = () => {
  const [isDrop, setIsDrop] = useState(false);

  const toggleDropDown = () => {
    setIsDrop((prev) => !prev);
  };

  return { isDrop, setIsDrop, toggleDropDown };
};
