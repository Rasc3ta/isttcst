import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div className="fixed min-w-[400px] top-0 w-full left-0  bg-blue-700 md:px-10 flex justify-center">
        <div className="navbar  max-w-7xl justify-between text-white ">
          <div className="">
            <div className="drawer lg:hidden">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu bg-blue-700 text-white flex flex-col gap-1  min-h-full w-[200px] p-4">
                  {/* Sidebar content here */}
                  <li className="flex items-center justify-center border-[2px] border-blue-700">
                    <a>Sidebar Item 1</a>
                  </li>
                  <li className=" flex items-center justify-center border-[2px] border-blue-700">
                    <a>Sidebar Item 2</a>
                  </li>
                </ul>
              </div>
            </div>

            <Link
              className="btn btn-ghost text-xl flex flex-nowrap flex-row items-center "
              to={"/"}
            >
              <img
                src="https://i.ibb.co.com/CJ4kxjj/logo.png"
                //   src="https://drive.google.com/file/d/1AworyMp2xBNNUE2jBlP3tgDijkoYAV57/view?usp=sharing"
                className="w-[40px]"
              />
              <span className="flex flex-row flex-nowrap items-center">
                ISTT Unify
              </span>
            </Link>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal gap-1 px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className=" flex items-center justify-center gap-1">
            <Link className="btn text-blue-700">Log in</Link>
            <Link className="btn text-blue-700">Register</Link>
          </div>

          {/*  */}

          {/*  */}
        </div>
      </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;