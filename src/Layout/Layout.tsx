import { SideBar } from '../components/SideBar/SideBar';
import { Header } from './Header/Header';

type Layout = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <>
      <Header />
      <SideBar />
      {children}
    </>
  );
};
