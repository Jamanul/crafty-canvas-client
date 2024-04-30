import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../FirebaseAuth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [theme,setTheme] =useState('light')
  const handleToggle=(e)=>{
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }


  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const localTheme =localStorage.getItem('theme')
    document.querySelector('html').setAttribute('data-theme',localTheme)
  },[theme])
    const {user,logOut}= useContext(AuthContext)
    const handleLogout =()=>{
      logOut()
      .then(
      toast.success('Logged out successfully')
      )
      .catch(error=>console.error(error))
    
    }
    //console.log(user)
    const links =<>
    <li><NavLink to='/' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>Home</NavLink></li>
    <li><NavLink to='all-arts-craft' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>All Arts and Crafts</NavLink></li>
    <li><NavLink to='add-arts-craft'  className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>Add Craft Items</NavLink></li>
    <li><NavLink to={`my-arts-craft-list`} className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>My Art&Craft List</NavLink></li>
    {user? '':<> 
    <li><NavLink to='register' className={({isActive})=>isActive ? 'text-[#A55E3F] border-b border-[#A55E3F] rounded-none bg-none':'text-[#A55E3F]'}>Register</NavLink></li></>}
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[99] p-2 shadow bg-base-100 rounded-box w-52">
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
    {/* theme controller */}
  <label className="cursor-pointer grid place-items-center">
  <input type="checkbox" onChange={handleToggle} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
    {user? '': <NavLink to='/login' className="btn bg-[#A55E3F] text-white">Log In</NavLink>}
  
  {
    user ? <div className="dropdown dropdown-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user? user.photoURL : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
      </div>
    </div>
    <ul tabIndex={0} className="mt-3 z-[99] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <li>
         <button> {user?user.displayName: 'your name'}</button>
      </li>
      
      <li><button onClick={handleLogout}>Logout</button></li>
    </ul>
  </div> : ''
  }

  </div>
</div>
    );
};

export default Navbar;