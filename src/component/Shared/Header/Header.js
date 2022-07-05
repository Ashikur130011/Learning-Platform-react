import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
     let activeStyle = {
         textDecoration: "underline",
         color:"red"
     };
    return (
        <div className='nav-container'>
            <div className='nav-detail'>
                <h3>Learning Tech</h3>
            </div>
            <div className='nav-link'>
                <NavLink className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/home">Home</NavLink>
                <NavLink className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/courses">Courses</NavLink>
                <NavLink className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/about">About</NavLink>
                <NavLink className='link' style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/contact">Contact</NavLink>

            </div>
        </div>
    );
};

export default Header;