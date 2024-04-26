import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const links =<>
    <li><NavLink to='/' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>Home</NavLink></li>
    <li><NavLink to='all-arts-craft' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>All Arts and Crafts</NavLink></li>
    <li><NavLink to='add-arts-craft'  className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>Add Craft Items</NavLink></li>
    <li><NavLink to='my-arts-craft-list' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>My Art&Craft List</NavLink></li>
    <li><NavLink to='register' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>Register</NavLink></li>
        
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-[#A55E3F] text-xl md:text-2xl">Crafty Canvas</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
  <NavLink to='/login' className="btn bg-[#A55E3F] text-white">Log In</NavLink>
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    
  </div>
</div>
    );
};

export default Navbar;