import React from 'react';
import { NavLink } from 'react-router-dom';
import './MenuBar.css'

const MenuBar = () => {
    return (

        <div className="MenuBar-container">
            <div className="container">
                <div className="row">

                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">

                                <NavLink to="/home" className="items">
                                    <li>Home</li>
                                </NavLink>
                                <NavLink to="/about" className="items">
                                    <li>About</li>
                                </NavLink>
                                <NavLink to="/services" className="items">
                                    <li>Services</li>
                                </NavLink>
                                <NavLink to="/classes" className="items">
                                    <li>Classes</li>
                                </NavLink>


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MenuBar;