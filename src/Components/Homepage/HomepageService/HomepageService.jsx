import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

import './service.css'

const HomepageService = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(res=>{
            setServices(res)
            console.log(res)
        })
    },[])

    return ( 
        <div className="grid grid-cols-3 gap-40">
            {
                services.map(service=> <SingleService key={service._id} service={service} /> )
            }
        </div>
     );
}
 
export default HomepageService;