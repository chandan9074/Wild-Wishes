// import pakages 
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

//import files
import './serviceDetails.css'

const ServiceDetails = () => {

    const {id} = useParams();
    const {user} = useAuth()
    let history = useHistory();

    const [services, setServices] = useState([]);
    const nameref = useRef();
    const emailref = useRef();
    const phoneref = useRef();
    const transref = useRef();

    const [dataLoding, setDataLoding] = useState(true);

    useEffect(()=>{
        fetch(`https://chilling-moonlight-50293.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(res=>{
            setServices(res)
            setDataLoding(false);
        })
    },[])


    //handle booking submit
    const handleBooking = (e) =>{
        
        const name = nameref.current.value;
        const email = emailref.current.value;
        const phone = phoneref.current.value;
        const trans = transref.current.value;
        const bookID = id;
        const userImg = user.photoURL;
        const oderSt = "Panding";
        const bookTitle = services.name;

        const newBookings = {bookID, bookTitle, userImg, name, email, phone, trans, oderSt }
        
        fetch("https://chilling-moonlight-50293.herokuapp.com/bookings", {
            method:'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newBookings)
            
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.insertedId){
                alert("Welcome our Adventure!! You can cancel your booking between 7 days");
                e.target.reset();
            }
        })
        .then(()=>{
            history.push("/");
        })
        e.preventDefault();
    }

    return ( 
        <div className="booking-details-part py-20">
            {dataLoding ? <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
                </div>:
            <div className="flex flex-col md:flex-row  justify-center">
                <div className="md:w-96 bg-gray-200 py-5 px-5 min-h-40 md:border-r-4 md:border-blue-300 book-left">
                    <i class="fas fa-ghost absolute"></i>
                    <img src={services.img} className="w-56 h-56 rounded-full mx-auto mb-3 border-8 border-white shadow" alt="" />
                    <h1 className="text-2xl font-bold">{services.name}</h1>
                    <p className="text-base font-semibold text-justify">{services.des}</p>
                    <p className="text-base font-semibold text-justify"><i class="fas fa-calendar-alt"></i> {services.date}</p>
                    <div className="flex justify-between">
                        <p className="text-base font-semibold text-justify"><i class="fas fa-calendar-day"></i> {services.days}</p>
                        <p className="text-base font-semibold text-justify"><i class="fas fa-map-marker-alt"></i> {services.place}</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-base font-semibold text-justify"><i class="fas fa-bullhorn"></i> {services.sit_limit}</p>
                        <p className="text-base font-semibold text-justify"><i class="fas fa-money-bill-wave"></i> {services.price}</p>
                    </div>
                </div>
                <div className="md:w-96 p-5 bg-gray-200 flex flex-col h-auto md:border-l-4 md:border-blue-300 book-right">
                    <h1 className="text-4xl mx-auto font-bold">Place Booking</h1>
                    <div className="place-b-underline mb-5 mx-auto"></div>
                    <form onSubmit={handleBooking} className="flex flex-col">
                        <label className="text-xl font-semibold mb-1">Name</label>
                        <input type="text" ref={nameref} readOnly value={user.displayName} className="py-1 px-2 mb-3 shadow focus:outline-none rounded text-base font-semibold" required />
                        <label className="text-xl font-semibold mb-1">Email</label>
                        <input type="email" ref={emailref} value={user.email} readOnly className="py-1 px-2 mb-3 shadow focus:outline-none rounded text-base font-semibold" required/>
                        <label className="text-xl font-semibold mb-1">Phone Number</label>
                        <input type="text" ref={phoneref} placeholder="Enter your phone number" required className="py-1 px-2 mb-3 shadow focus:outline-none rounded text-base font-semibold"/>
                        <label className="text-xl font-semibold mb-1">Transection ID</label>
                        <input type="text" ref={transref} placeholder="Enter bank transection ID" required className="py-1 px-2 mb-3 shadow focus:outline-none rounded text-base font-semibold"/>
                        <input type="submit" value="Book" className="card-sign-btn rounded-lg font-semibold mt-3 mx-auto py-1"/>
                    </form>
                </div>
            </div>}
        </div>
     );
}
 
export default ServiceDetails;