import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../../CSS/nav.css'
import '../../CSS/font.css'
import useUserData from '../../Hooks/useUserData';
import useAuth from '../../Hooks/useAuth';
import logo from '../../assets/planzone-logo.png'

const routes = [
    {id: 1, name: "Home" , path: '/'},
    {id: 2, name: "Events" , path: '/events'},
    {id: 3, name: "Add Event" , path: '/add-event'},
    {id: 4, name: "My Event" , path: '/my-event'}]

const Navbar = () => {
    const userData= useUserData()

    const { logout , user } = useAuth()

    const handleLogout = () => {
        logout()
    }

    return (
        <div className='shadow'>
            <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {
                        routes?.map((route) => <li key={route?.id}><Link to={route?.path}>{route?.name}</Link></li>)
                    }
                    </ul>
                    </div>
                     <div className='flex items-center gap-1'>
                        <img className='w-12 h-12 rounded-full' src={logo} alt="" />
                        <Link to={'/'} className="text-3xl font-bold text-teal-600 font">Planzone</Link>
                     </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-7 text-gray-700 font-semibold font text-lg">
                    {
                        routes?.map((route) => <li key={route?.id}><NavLink to={route?.path}>{route?.name}</NavLink></li>)
                    }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user 
                        ? 
                        <>
                        <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className=""><img className='w-10 h-10 rounded-full' src={userData?.photoURL} alt={userData?.name}/></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm">
                            <li className='font-semibold mb-2'>Name: {userData?.name}</li>
                            <li><button onClick={handleLogout} className='border flex items-center justify-center bg-teal-600 text-white font-semibold hover:bg-teal-700'>Sign Out</button></li>
                        </ul>
                        </div>
                        </>
                        :
                        <Link to={'/login'} className="bg-teal-500 hover:bg-teal-700 text-white px-3 py-1.5 rounded-md font-medium transition duration-300">Sing In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;