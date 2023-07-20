import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../../src/App.css'
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const handelLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                toast.success('your Logout is Successfull !!!')
            })
    }

    const items = <>
        <li className='font-bold'><Link to={'/'}>Home</Link></li>
        <li className='font-bold'><Link to={'/products'}>Products</Link></li>
        {/* <li className='font-bold'><Link to={'/login'}>Login</Link></li> */}
        {
            user?.email ? <li onClick={handelLogout} className='font-bold text-red-400 border-2 border-orange-600 rounded-2xl'><Link to={'/login'}>Logout</Link></li> : <li className='font-bold'><Link to={'/login'}>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-100  rounded-2xl mt-4 w-full items-cards">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {items}
                    </ul>
                </div>
                <Link to={"/"} className=" font-bold ps-5 text-2xl">Vehicle-paradise</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {items}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={'/addProduct'} className="btn btn-active items-cards text-black font-bold mr-5">+ AddVideo</Link>
            </div>
        </div>
    );
};

export default Navbar;