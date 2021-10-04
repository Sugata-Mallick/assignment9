
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './About.css'
const About = () => {

    const [abos, setAbos] = useState([]);
    const [allAbos, setAllAbos] = useState([]);


    useEffect(() => {
        fetch(
            './abos.JSON'
        )
            .then((res) => res.json())
            .then((data) => setAllAbos(data));
    }, [abos]);
    return (
        <div>
            <MenuBar></MenuBar>

            <div className="container all-teams">

                <div className="all-team">
                    <h1>About</h1>
                </div>

                <div className="bodys">
                    <div className="row">
                        {allAbos?.map((pd) => (
                            <div className="col-md-3 two">
                                {/* <div className="cart"> */}
                                <div className="cart-details">
                                    <img className="w-100 p-1 " src={pd.img} alt="" />
                                </div>

                            </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2 className="bg-info border border-primary border-4">Since 1947, the Music Academy of the West has been making a unique and enduring contribution to the world of music by Advancing the development of the next generation of great classically trained musicians Cultivating discerning, appreciative, and adventurous audiences The Music Academy of the West is among the nation’s preeminent summer schools and festivals for gifted young classically-trained musicians. At its ocean-side, ten-acre campus in Santa Barbara, California, the Academy provides these musicians with the opportunity for advanced study and performance under the guidance of internationally renowned faculty artists, guest conductors, and soloists during its Summer School and Festival, presenting nearly 200 public events on campus and in downtown Santa Barbara. The 2022 Summer.
                A Bienen School of Music education provides students with skills and values — superb musicianship, a mastery of communication, a sense of discipline, a commitment to excellence — that will prepare them for success wherever their interests may lead. We at Northwestern look forward to guiding the next generation of musicians on that journey.</h2>
            <Footer></Footer>
        </div>
    );
};

export default About;