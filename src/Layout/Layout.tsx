type Layout = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Layout) => {
  return <div>{children}</div>;
};
