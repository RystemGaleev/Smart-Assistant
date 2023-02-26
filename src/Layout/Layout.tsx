import { Header } from './Header/Header';

type Layout = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
