import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Xmark, Plus } from 'iconoir-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  return (
    <>
      <nav className="bg-black shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button onClick={toggleSidebar} className="sm:hidden text-white focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <Link to="/" className="text-xl font-bold text-white hidden sm:block">Market</Link>
            {/* <button onClick={toggleDropdown} className="sm:hidden text-white focus:outline-none flex flex-row ml-4">
              All 
              {
                isDropdownOpen === false ? <Plus /> : <Xmark/>
              }
            </button> */}
            <div className="relative w-64 sm:w-80 ml-3 flex items-center">
              <input
                type="search"
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 rounded-lg bg-white text-black focus:outline-none focus:bg-indigo-100"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <Link to="/cart" className="ml-3 text-white lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6h15l-1.5 9h-15l-1.5-9z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="20" cy="20" r="1" />
                </svg>
              </Link>
            </div>
            <div className="space-x-4 hidden sm:flex">
              <Link to="/login" className="text-white hover:text-gray-300 font-bold">Login</Link>
              <Link to="/register" className="text-white hover:text-gray-300 font-bold">Signup</Link>
              <Link to="/blogs" className="text-white hover:text-gray-300 font-bold">Blogs</Link>
              <Link to="/cart" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6h15l-1.5 9h-15l-1.5-9z" />
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="20" cy="20" r="1" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* {isDropdownOpen && (
        <div className="absolute top-16 left-0 w-full bg-black shadow-lg sm:hidden">
          <div className="container mx-auto px-4 py-2">
            <Link to="/category/electronics" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={toggleDropdown}>Electronics</Link>
            <Link to="/category/fashion" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={toggleDropdown}>Fashion</Link>
            <Link to="/category/home" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={toggleDropdown}>Home</Link>
            <Link to="/category/toys" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={toggleDropdown}>Toys</Link>
          </div>
        </div>
      )} */}

      {/* Sidebar */}
      <div className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden`}>
        <div className="fixed inset-y-0 left-0 w-64 bg-black shadow-lg p-4">
          <button onClick={closeSidebar} className="text-white mb-4 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <Link to="/" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={closeSidebar}>Home</Link>
          <Link to="/login" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={closeSidebar}>Login</Link>
          <Link to="/register" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={closeSidebar}>Signup</Link>
          <Link to="/blogs" className="block text-white hover:text-gray-300 font-bold mb-2" onClick={closeSidebar}>Blogs</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
