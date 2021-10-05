import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Body.css'

const Body = () => {


    const [bodys, setBodys] = useState([]);
    const [allBodys, setAllBodys] = useState([]);


    useEffect(() => {
        fetch(
            './tools.JSON'
        )
            .then((res) => res.json())
            .then((data) => setAllBodys(data));
    }, [bodys]);
    return (
        <div className="container all-teams">
            <div className="all-team">
                <h1>Our School</h1>
            </div>
            <div className="cart-details ">


                <img className="w-25 col-md-2 border border-primary border-3 m-3" src={"https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2020/11/01125750/indian-classical-music-FB.jpg"
                } alt="" />
                <img className="w-25 col-md-2 border border-primary border-3 m-3 " src={"https://th.bing.com/th/id/OIP.spWhKKCTsC9U3TNkg4Se-AHaEN?pid=ImgDet&rs=1"} alt="" />


            </div>

            <div className="bodys">
                <div className="row">
                    {allBodys?.map((pd) => (
                        <div className="col-md-3">
                            <div className="cart">
                                <div className="cart-details">
                                    <img className="w-75" src={pd.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h2>Name :{pd.name}</h2>
                                    <p>Price: ${pd.price}</p>
                                    <button className="btn btn-success">Details</button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default Body;
