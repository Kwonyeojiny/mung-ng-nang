import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex flex-col gap-20 min-h-screen font-Jua bg-brand-blue">
      <main className="flex-grow flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
