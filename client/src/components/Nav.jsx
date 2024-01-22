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
        <p className='pb-1.5 transition-all hover:font-semibold'>Home</p>
        <p className="pb-1.5 transition-all hover:font-semibold">Contact</p>
      </ul>
      </div>

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