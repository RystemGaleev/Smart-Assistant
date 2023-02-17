import { SideBar } from '../components/SideBar/SideBar';

type Layout = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
};
