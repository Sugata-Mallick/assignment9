import React from 'react';
import { Modal } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Classes.css'

const Classes = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="col-md-3 w-25 border-3 m-3 two">
                <div className="cart">

                    <div className="text-area">
                        <h2> Violin</h2>
                        <p>Teaching by Sir Jhon Beth</p>

                        <button className="btn btn-success">Learning Details</button>

                    </div>
                </div>
                <div className="cart">

                    <div className="text-area">
                        <h2>Guitar </h2>
                        <p>Teaching by Sir Jhon Beth</p>
                        <button className="btn btn-success">Learning Details</button>

                    </div>
                </div>
                <div className="cart">

                    <div className="text-area">
                        <h2>Flute </h2>
                        <p>Teaching by Sir Jhon Beth</p>
                        <button className="btn btn-success">Learning Details</button>

                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div >

    );
};

export default Classes;