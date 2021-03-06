import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    const {user,logOut}=useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt=""></img>
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">order</NavLink>
                <NavLink to="inventory">Manage Inventory here</NavLink>
                {
                    user?.email  && <span style={{color:"white"}}>Hello {user.displayName}</span>
                }

                {
                    user?.email ? <button onClick={logOut}>Log out</button> : <NavLink to="/login">Login</NavLink>
                }
            </nav>
        
        </div>
    );
};

export default Header;