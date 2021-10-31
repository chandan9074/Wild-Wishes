//import pakage
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

//import files
import './myBooking.css';

const MyBooking = () => {

    const [mybook, setMybook] = useState([]);
    const {user} = useAuth()

    const [dataLoding, setDataLoding] = useState(true);

    useEffect(()=>{
        fetch("https://chilling-moonlight-50293.herokuapp.com/my-bookings")
            .then(res => res.json())
            .then(res =>{
                const userBook = res.filter(book => book.email === user.email);
                setMybook(userBook);
                setDataLoding(false);
            })
    }, [])

    //handle delete part
    const handleDelete = (id) =>{
        const confirmed = window.confirm("Are you sure, you want to delete this bookings?");
        if(confirmed){
            const url = `https://chilling-moonlight-50293.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(res =>{
                if(res.deletedCount > 0){
                    alert("deleted successfully!! You get back your money less then 7 days");
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
                {dataLoding ? <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
                </div> : 
                <div>
                {mybook.length===0? <div className="w-full flex justify-center"><img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="w-96" /></div>:
                <div className="md:w-10/12 w-full mx-auto">

                    <div className="flex items-center bg-white py-2 mb-3 rounded-md">
                        <div className="flex items-center justify-center w-96">
                            <p className="my-0 ml-5 text-base font-bold">Name</p>
                        </div>
                        <p className="my-0 text-base text-center font-bold w-96">Adventure Name</p>
                        <div className="flex items-center justify-center w-96">
                            <p className="my-0 mr-5 text-base font-bold">Order Status</p>
                        </div>
                    </div>
                    { mybook.map(book=>(
                    <div key={book._id} className="flex items-center bg-white py-3 rounded-md mt-3">
                        <div className="flex flex-col md:flex-row items-center justify-center w-96">
                            {book.userImg ?
                            <img src={book.userImg} alt="" className="w-10 rounded-full"/>
                            : <i class="fas fa-user-alt"></i>}
                            <p className="my-0 ml-5 text-lg font-semibold">{book.name}</p>
                        </div>
                        <p className="my-0 px-3 md:px-0 text-lg text-center font-semibold w-96 overflow-ellipsis overflow-hidden">{book.bookTitle}</p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-96">
                            {book.oderSt === "Panding" ? 
                            <p className="my-0 mr-5 py-1 rounded-full px-3 text-lg font-semibold panding-btn">Panding</p>
                            :<p className="my-0 mr-5 py-1 rounded-full px-3 text-lg font-semibold aprove-btn">Aproved</p>}
                            <i onClick={()=>handleDelete(book._id)} class="fas fa-trash my-2 md:my-0 mr-5 md:mr-0 text-red-800 text-lg cursor-pointer p-1 rounded-full"></i>
                        </div>
                    </div>
                    ))}
                </div> }
                </div>}
            </div>
        </div>
     );
}
 
export default MyBooking;