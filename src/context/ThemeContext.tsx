import { createContext, ReactNode, useEffect, useState } from 'react';

interface IThemeContext {
  toggleTheme: () => void;
  theme: string;
}

interface IPropsTheme {
  children: ReactNode;
}

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider = ({ children }: IPropsTheme) => {
  const [theme, setTheme] = useState(getDefaultTheme());

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  function getDefaultTheme() {
    const saveTheme = localStorage.getItem('theme');
    return saveTheme ? saveTheme : 'light';
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
