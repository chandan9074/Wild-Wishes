import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

import './service.css'

const HomepageService = () => {

    const [services, setServices] = useState([]);
    const [dataLoding, setDataLoding] = useState(true);

    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(res=>{
            setServices(res)
            console.log(res)
            setDataLoding(false)
        })
    },[])

    return ( 
        <div>
            {dataLoding ? <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
                </div>:
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-40">
            {
                services.map(service=> <SingleService key={service._id} service={service} /> )
            }
        </div>}
        </div>
     );
}
 
export default HomepageService;