import { faAddressBook, faAmericanSignLanguageInterpreting, faDemocrat, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="flex">
            <div className="rate text-white">
                <h2>All copy right @ by our musical 2017</h2>
                <ul>
                    <div className="foter-phone-icon ">
                        <i class="fab fa-facebook"></i>
                        <h2>facebook</h2>
                    </div>
                    <div className="foter-phone-icon">
                        <i class="fab fa-instagram-square"></i>
                        <h2>instagram</h2>
                    </div>
                </ul>
            </div>

            <div>
                <ul>
                    <h3> Contract us : +123456789 </h3>

                    <div className="foter-phone-icon">
                        <i class="fas fa-mail-bulk"></i>
                        <h2>abc@gmail.com</h2>
                    </div>

                </ul>
            </div>

        </div>
    );
};

export default Footer;