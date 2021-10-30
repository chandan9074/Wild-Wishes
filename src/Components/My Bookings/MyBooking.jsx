import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useBookings from '../../hooks/useBooking';


import './myBooking.css';

const MyBooking = () => {

    // const [bookings] = useBookings();
    const [mybook, setMybook] = useState([]);
    const {user} = useAuth()

    useEffect(()=>{
        fetch("http://localhost:5000/my-bookings")
            .then(res => res.json())
            .then(res =>{
                const userBook = res.filter(book => book.email === user.email);
                setMybook(userBook);
                console.log(userBook);
            })
        // console.log("hello", bookings)
    }, [])

    const handleDelete = (id) =>{
        // console.log("dukhche")
        const confirmed = window.confirm("Are you sure, you want to delete this bookings?");
        if(confirmed){
            const url = `http://localhost:5000/bookings/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(res =>{
                if(res.deletedCount > 0){
                    alert("deleted successfully");
                    const remainingUser = mybook.filter(user => user._id !== id);
                    setMybook(remainingUser);
                }
            })
        }
    }

    return ( 
        <div className="my-orders-part pb-20 pt-10">
            <div className="container w-full">
                <h1 className="text-gray-300">My Orders</h1>
                <div className="my-order-underline mb-5"></div>
                <div className="w-10/12 mx-auto">

                    <div className="flex items-center bg-white py-2 mb-3 rounded-md">
                        <div className="flex items-center justify-center w-96">
                            <p className="my-0 ml-5 text-base font-bold">Name</p>
                        </div>
                        <p className="my-0 text-base text-center font-bold w-96">Transection ID</p>
                        <div className="flex items-center justify-center w-96">
                            <p className="my-0 mr-5 text-base font-bold">Order Status</p>
                        </div>
                    </div>
                    { mybook.map(book=>(
                    <div key={book._id} className="flex items-center bg-white py-3 rounded-md mt-3">
                        <div className="flex items-center justify-center w-96">
                            {book.userImg ?
                            <img src={book.userImg} alt="" className="w-10 rounded-full"/>
                            : <i class="fas fa-user-alt"></i>}
                            <p className="my-0 ml-5 text-lg font-semibold">{book.name}</p>
                        </div>
                        <p className="my-0 text-lg text-center font-semibold w-96">{book.trans}</p>
                        <div className="flex items-center justify-center w-96">
                            {book.oderSt === "Panding" ? 
                            <p className="my-0 mr-5 py-1 rounded-full px-3 text-lg font-semibold panding-btn">Panding</p>
                            :<p className="my-0 mr-5 py-1 rounded-full px-3 text-lg font-semibold aprove-btn">Aprove</p>}
                            <i onClick={()=>handleDelete(book._id)} class="fas fa-trash text-red-800 text-lg cursor-pointer p-1 rounded-full"></i>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
     );
}
 
export default MyBooking;