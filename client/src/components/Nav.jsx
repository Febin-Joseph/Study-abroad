import React from 'react';
import { logo, menu } from '../constants';

const Nav = () => {
  return (
    <nav className="max-container flexBetween padding-container relative z-30 py-5  bg-blue-40 h-[70px]">
      <a href="/"><img
        src={logo}
        alt="logo"
        width={74}
        height={29}
      /></a>
      <div className='hidden lg:flex'>
        <ul className='hidden h-full gap-12 lg:flex regular-16 text-gray-50 flexCenter cursor-pointer'>
          <p className='pb-1.5 transition-all hover:font-semibold'><a href="/">Home</a></p>
          <p className="pb-1.5 transition-all hover:font-semibold"
            onClick={() => document.getElementById('contact').showModal()}>
            Contact
          </p>
        </ul>
      </div>

      {/* Modal popup for contact */}
      <dialog id="contact" className="modal">
        <div className="modal-box">
          <h1 className="font-bold text-lg">Contact Me!</h1>
          <p className="py-4 font-semibold text-[17px] text-black text-opacity-7">Mobile : +91 9995367561</p>
          <p className="py-3 font-semibold text-[17px] text-black text-opacity-7">Email : febinachu123@gmail.com</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <img
        src={menu}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden bg-white"
      />
    </nav>
  );
};

export default Nav;