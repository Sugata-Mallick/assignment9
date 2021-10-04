import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import './Header.css'
const Header = () => {
    return (
        <div className="header-container ">
            <div className="">
                <div className="row d-flex header align-items-center justify-content-center">

                    <div className="col-md-6">
                        <h1 className="title">
                            HERE IS OUR  <br /> MUSIC SCHOOL
                        </h1>
                        <p className="text-white text-center mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                        <button className="mt-3 about-btn">About</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;