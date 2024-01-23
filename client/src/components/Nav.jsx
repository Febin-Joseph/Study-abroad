import React, { useState } from 'react';
import { logo, menu } from '../constants';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="max-container flexBetween padding-container relative z-30 py-5  bg-blue-40 h-[70px]">
      <a href="/">
        <img src={logo} alt="logo" width={74} height={29} />
      </a>

      {/* Navigation links for larger screens */}
      <div className='hidden lg:flex'>
        <ul className='hidden h-full gap-12 lg:flex regular-16 text-gray-50 flexCenter cursor-pointer'>
          <p className='pb-1.5 transition-all hover:font-semibold'>
            <a href="/">Home</a>
          </p>
          <p
            className="pb-1.5 transition-all hover:font-semibold"
            onClick={() => document.getElementById('contact').showModal()}
          >
            Contact
          </p>
        </ul>
      </div>


      {/* Menu icon for smaller screens */}
      <div className="lg:hidden dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className=" m-1"
          onClick={toggleDropdown}
        >
          <img
        src={menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden bg-white"
        onClick={toggleDropdown}
      />
        </div>
        {isDropdownOpen && (
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a
                onClick={() => document.getElementById('contact').showModal()}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
      

      {/* Modal popup for contact */}
      <dialog id="contact" className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-lg">Contact Me!</h1>
          <p className="py-4 font-semibold text-[17px] text-black text-opacity-7">Mobile: +91 9995367561</p>
          <p className="py-3 font-semibold text-[17px] text-black text-opacity-7">Email: febinachu123@gmail.com</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </nav>
  );
};

export default Nav;