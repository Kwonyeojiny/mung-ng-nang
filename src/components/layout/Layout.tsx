import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Copyright from './Copyright';

const Layout = () => {
  return (
    <div className="flex flex-col gap-20 min-h-screen font-Jua bg-brand-blue">
      <Navbar />
      <main className="flex-grow flex items-center justify-center text-black border-black">
        <Outlet />
      </main>
      <Copyright />
    </div>
  );
};

export default Layout;
