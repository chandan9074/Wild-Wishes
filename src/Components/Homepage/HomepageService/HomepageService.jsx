//import pakages
import React, { useEffect, useState } from 'react';


//import files
import SingleService from './SingleService';
import './service.css'

const HomepageService = () => {

    const [services, setServices] = useState([]);
    const [dataLoding, setDataLoding] = useState(true);

    //get data
    useEffect(()=>{
        fetch("https://chilling-moonlight-50293.herokuapp.com/services")
        .then(res=>res.json())
        .then(res=>{
            setServices(res)
            setDataLoding(false)
        })
    },[])

    return ( 
        <div>
            {dataLoding ? <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
                </div>:
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-40 ml-5 md:ml-0">
            {
                services.map(service=> <SingleService key={service._id} service={service} /> )
            }
        </div>}
        </div>
     );
}
 
export default HomepageService;