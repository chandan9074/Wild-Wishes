//import pakages
import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    // distructure service 
    const {_id, img, name, des} = props.service;

    return ( 
        <div>
            <div className="single-service-part">
                <img src={img} alt="" className="service-img" />
                <div className="service-details">
                    <h1 className="text-2xl text-gray-200 service-title" title={name} >{name}</h1>
                    <p className="texl-lg text-gray-300 service-des" >{des}</p>
                    <Link to={`/booking-details/${_id}`} ><button className="book-btn">Book Now</button></Link>
                </div>
            </div>

        </div>
     );
}
 
export default SingleService;