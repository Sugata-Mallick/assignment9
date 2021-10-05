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
                HERE IS OUR <br /> MUSIC SCHOOL
              </h1>
              <p className="text-white text-center mt-3">
                “Music is the strongest form of magic , Music
                produces a kind of pleasure which human nature cannot do without.” 
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