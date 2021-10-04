import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Services.css'

const Services = () => {

    const [services, setServices] = useState([]);
    const [allServices, setAllServices] = useState([]);


    useEffect(() => {
        fetch(
            './service.JSON'
        )
            .then((res) => res.json())
            .then((data) => setAllServices(data));
    }, [services]);
    return (
        <div>


            <div className="container all-teams">
                <MenuBar></MenuBar>
                <div className="all-team">
                    <h1>Our Services</h1>
                </div>

                <div className="bodys">
                    <div className="row">
                        {allServices?.map((pd) => (
                            <div className="col-md-3">
                                <div className="cart">
                                    <div className="cart-details">
                                        <img className="w-75" src={pd.img} alt="" />
                                    </div>
                                    <div className="text-area">
                                        <h4>Name :{pd.name}</h4>
                                        <p>Price: ${pd.price}</p>
                                        <p>Description:{pd.description}</p>
                                        <button className="btn btn-success">Details</button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;