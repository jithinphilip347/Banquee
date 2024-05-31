import  { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-white">
      <div className="flex items-center justify-between px-5 py-5 sm:px-10 lg:px-20">
        <div className="flex items-center">
          <h1 className="text-customGreen font-semibold text-2xl md:text-3xl hover:cursor-pointer">Banquee.</h1>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-customGreen"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex gap-4 font-inter text-base font-normal leading-7">
            <li className="flex items-center gap-1">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 relative top-[2px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
            <li>Compare</li>
            <li>Support</li>
            <li className="flex items-center gap-1">
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 relative top-[2px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex items-center gap-5 font-inter text-sm font-normal leading-7">
          <p className="text-customGreen p-1 hover:cursor-pointer">Login</p>
          <button className="bg-customGreen text-white rounded-md w-36 h-10 hover:cursor-pointer">Open Account</button>
        </div>
      </div>
      {menuOpen && (
        <div className="sm:hidden">
          <ul className="flex flex-col gap-4 px-5 py-5 font-inter text-base font-normal leading-7">
            <li className="flex items-center gap-1">
              Features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 relative top-[2px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
            <li>Compare</li>
            <li>Support</li>
            <li className="flex items-center gap-1">
              Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 relative top-[2px]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </li>
            <li className="text-customGreen p-1 hover:cursor-pointer">Login</li>
            <li>
              <button className="bg-customGreen text-white rounded-md w-full h-10 hover:cursor-pointer">Open Account</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
