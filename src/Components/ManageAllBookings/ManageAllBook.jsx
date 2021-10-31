//import pakages
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';


const ManageAllBook = () => {

    const [allbook, setAllbook] = useState([]);
    const {user} = useAuth()

    const [dataLoding, setDataLoding] = useState(true);

    useEffect(()=>{
        getServices()
    }, [])

    const getServices = () =>{
        fetch("https://chilling-moonlight-50293.herokuapp.com/my-bookings")
            .then(res => res.json())
            .then(res =>{
                setAllbook(res);
                setDataLoding(false)
            })
    }

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
                    const remainingUser = allbook.filter(user => user._id !== id);
                    setAllbook(remainingUser);
                }
            })
        }
    }

    const handleUpdate = (id, orderSt) =>{
        if(orderSt==="Panding"){
            const newOrderSt = "Aproved";
            const updateUser ={newOrderSt}
            fetch(`https://chilling-moonlight-50293.herokuapp.com/bookings/${id}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateUser)
            })
            .then(res=>res.json())
            .then(res=>{
                if(res.modifiedCount > 0){
                    alert("updated successfully")
                    getServices();
                }
            })
        }
    }

    return ( 
        <div className="my-orders-part pb-20 pt-10">
            <div className="container w-full">
                <h1 className="text-gray-300">All Bookings</h1>
                <div className="all-order-underline mb-5"></div>
                {dataLoding ? <div class="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
                </div> : 
                <div>
                {allbook.length===0? <div className="w-full flex justify-center"><img src="https://i.ibb.co/L81J3wt/no-result.png" alt="" className="w-96" /></div>:
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
                    { allbook.map(book=>(
                    <div className="flex items-center bg-white py-3 rounded-md mt-3">
                        <div className="flex flex-col md:flex-row items-center justify-center w-96">
                            {book.userImg ?
                            <img src={book.userImg} alt="" className="w-10 rounded-full"/>
                            : <i class="fas fa-user-alt"></i>}
                            <p className="my-0 mt-2 md:mt-0 ml-5 text-lg font-semibold">{book.name}</p>
                        </div>
                        <p className="my-0 px-3 md:px-0 text-lg text-center font-semibold w-96 overflow-ellipsis overflow-hidden">{book.bookTitle}</p>
                        <div className="flex flex-col md:flex-row items-center justify-center w-96">
                            {book.oderSt === "Panding" ? 
                            <p className="my-0 mr-5 py-1 rounded-full px-3 text-lg font-semibold panding-btn">Panding</p>
                            :<p className="my-0 mr-5 py-1 rounded-full px-3 text-lg font-semibold aprove-btn">Aproved</p>}
                            <i onClick={()=>handleDelete(book._id)} class="fas fa-trash text-red-800 text-lg cursor-pointer p-1 rounded-full my-2 md:my-0 mr-5"></i>
                            {book.oderSt === "Panding" ? 
                            <i onClick={()=>handleUpdate(book._id, book.oderSt)} title="Aprove?" class="fas fa-check-circle text-green-500 mr-5 md:mr-0 text-xl cursor-pointer rounded-full" ></i>: null}
                        </div>
                    </div>
                    ))}
                </div>}
                </div>}
            </div>
        </div>
     );
}
 
export default ManageAllBook;