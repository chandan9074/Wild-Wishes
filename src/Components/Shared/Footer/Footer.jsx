import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css'

const Footer = () => {
    return ( 
        <div className="align-footer">

        <div className="footerPart flex justify-end">
            <img src="https://i.ibb.co/dLM1bxJ/footer.jpg" alt="" className="footer-img" />
            <div className="flex flex-col footer-details">
                <h1 className="text-3xl text-white ml-auto mr-14">Wild Wishes</h1>
                <div className="footer-underline mr-14"></div>
                <h1 className="text-xl text-white ml-auto mr-14 mb-4">2021</h1>
                <div className="mx-auto mb-5" >
                    <input type="text" className="sub-inpt" placeholder="Enter your name" />
                    <button className="text-white sub-btn">Subscribe Now</button>
                </div>  
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <h1 className="text-2xl text-gray-200 font-bold">Explore</h1>
                        <Link to="/" className="text-gray-300 text-sm mb-1 hover:text-gray-300">Home</Link>
                        <Link to="/my-booking" className="text-gray-300 text-sm mb-1 hover:text-gray-300">My Bookings</Link>
                        <Link to="/manage-booking" className="text-gray-300 text-sm mb-1 hover:text-gray-300">Manage All Bookings</Link>
                        <Link to="/add-tour" className="text-gray-300 text-sm mb-1 hover:text-gray-300">Add New Adventure</Link>
                    </div>
                    <div>
                        <h1 className="text-2xl text-gray-200 font-bold">Contact</h1>
                        <h3 className="text-sm text-gray-300 font-semibold">Address: Dhaka, Airport</h3>
                        <h3 className="text-sm text-gray-300 font-semibold">Email: chandanraj9074@gmail.com</h3>
                    </div>
                    <div>
                        <h1 className="text-2xl text-gray-200 font-bold">About Us</h1>
                        <h3 className="text-sm text-gray-300 font-semibold">Developers</h3>
                        <h3 className="text-sm text-gray-300 font-semibold">Sponsers</h3>
                    </div>
                </div>
                <div className="footer-hr" ></div>
                <div className="flex justify-between">
                    <h1 className="text-base text-gray-200 ml-14 font-semibold" >Wild Wishes © 2021. All Rights Reserved.</h1>
                    <div className="mr-14">
                        <i class="fab fa-facebook-square text-gray-200 text-2xl ml-5"></i>
                        <i class="fab fa-twitter-square text-gray-200 text-2xl ml-5"></i>
                        <i class="fab fa-linkedin text-gray-200 text-2xl ml-5"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Footer;