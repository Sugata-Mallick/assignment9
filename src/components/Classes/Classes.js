import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Carousel, Modal, ModalBody, ModalDialog } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './Classes.css'

const Classes = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    const [bodys, setBodys] = useState([]);
    const [allBodys, setAllBodys] = useState([]);


    useEffect(() => {
        fetch(
            './class.JSON'
        )
            .then((res) => res.json())
            .then((data) => setAllBodys(data));
    }, [bodys]);
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="container">


                <div>
                    <Carousel >
                        <Carousel.Item>
                            <img className="w-75" src="https://dz01iyojmxk8t.cloudfront.net/wp-content/uploads/2020/11/01125750/indian-classical-music-FB.jpg" alt="" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="w-75" src="https://th.bing.com/th/id/OIP.RobxnAm9g2SDHMYcIVIQ7QHaE8?pid=ImgDet&rs=1" alt="" />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="w-75" src="https://th.bing.com/th/id/OIP.spWhKKCTsC9U3TNkg4Se-AHaEN?pid=ImgDet&rs=1" alt="" />
                        </Carousel.Item>

                    </Carousel>
                </div>

                <div className="bodys">
                    <div className="row">
                        {allBodys?.map((pd) => (
                            <div className="col-md-3">
                                <div className="cart">
                                    <div className="cart-details">
                                        <img className="w-100" src={pd.img} alt="" />
                                    </div>
                                    <div className="text-area">

                                        <h2>Name:{pd.name} </h2>
                                        <p>Teaching By:{pd.teaching}</p>



                                        <Button className="btn btn-success" onClick={handleShow}>
                                            Launch demo modal
                                        </Button>

                                        <Modal className="hf" show={show} onHide={handleClose}>

                                            <Modal.Body >Are You Want To Join?</Modal.Body>
                                            <Modal.Footer>
                                                <Button className="ig" onClick={handleClose}>
                                                    Yes
                                                </Button>
                                                <Button className="ig" onClick={handleClose}>
                                                    No
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>







                                    </div>


                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    )
}
export default Classes;