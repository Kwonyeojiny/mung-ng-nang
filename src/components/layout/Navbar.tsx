import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggined, setIsLoggined] = useState(false);

  const handleLog = () => {
    setIsLoggined(!isLoggined);
  };

  return (
    <nav className="flex justify-between px-4 py-2 text-white bg-brand-deep-blue">
      <Link to="/" className="text-2xl flex items-center gap-2">
        <img src="./icon.png" className="w-8 h-7" />
        멍는거냥
      </Link>
      <div className="flex gap-8 items-center">
        {!isLoggined ? (
          <Link to="/login" onClick={handleLog}>
            로그인
          </Link>
        ) : (
          <>
            <Link to="/mypage">마이페이지</Link>
            <Link to="/" onClick={handleLog}>
              로그아웃
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
