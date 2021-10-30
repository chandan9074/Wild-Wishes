import React, { useRef } from 'react';


import './addTour.css';

const AddTour = () => {

    const titleref = useRef();
    const desref = useRef();
    const destinationref = useRef();
    const spendref = useRef();
    const dateSref = useRef();
    const dateEref = useRef();
    const feeref = useRef();
    const limitref = useRef();
    const imgref = useRef();

    const handleTour = (e) =>{
        
        const name = titleref.current.value;
        const des = desref.current.value;
        const place = destinationref.current.value;
        const days = spendref.current.value;
        const dateS = dateSref.current.value;
        const dateE = dateEref.current.value;
        const price = feeref.current.value;
        const sit_limit = limitref.current.value;
        const img = imgref.current.value;
        // const newUser = { "name": name, "email":email }
        
        const date = dateS.concat(" - ", dateE)

        const newTour = {img, name, des, date, place, days, price, sit_limit}
        
        fetch("http://localhost:5000/services", {
            method:'POST',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(newTour)
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.insertedId){
                alert("successfully created the users");
                e.target.reset();
            }
        })
        e.preventDefault();

    }

    return ( 
        <div className="py-40 add-tour-part">
            <div className="w-full flex justify-center items-center relative">
                <img src="https://i.ibb.co/f18Zd1V/pexels-photo-2859169.jpg" alt="" className="add-tour-img" />
                <div className="bg-gray-200 py-5 px-5 add-tour-card">
                    <h1 className="text-gray-800 font-bold">New Adventure</h1>
                    <div className="add-tour-underline mb-3"></div>
                    <form onSubmit={handleTour} className="flex flex-col justify-center">
                        <label className="text-xl font-semibold mb-1">Title</label>
                        <input type="text" ref={titleref} required placeholder="Enter title" className="inpt-f text-base w-full p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                        <label className="text-xl font-semibold mb-1">Cover Image URL</label>
                        <input type="text" ref={imgref} required placeholder="Enter image url" className="inpt-f text-base w-full p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                        <label className="text-xl font-semibold mb-1">Description</label>
                        <textarea name="" ref={desref} className="resize-none p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500" cols="10" rows="6" placeholder="About this Adventure.."></textarea>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label className="text-xl font-semibold mb-1">Destination</label>
                                <input type="text" ref={destinationref} required placeholder="Enter destination" className="inpt-f text-base w-52 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-semibold mb-1">Spend Days</label>
                                <input type="text" ref={spendref} required placeholder="Enter num of spend days" className="inpt-f text-base w-52 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                            </div>
                        </div>
                        <label className="text-xl font-semibold mb-1">Date</label>
                        <div className="flex justify-between">
                            <input type="text" ref={dateSref} required placeholder="Enter starting date" className="inpt-f text-base w-52 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                            <input type="text" ref={dateEref} required placeholder="Enter ending date" className="inpt-f text-base w-52 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                        </div>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <label className="text-xl font-semibold mb-1">Fee</label>
                                <input type="text" ref={feeref} required placeholder="Enter entry fee" className="inpt-f text-base w-52 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-semibold mb-1">Limit</label>
                                <input type="text" ref={limitref} required placeholder="Enter avaiable sit number" className="inpt-f text-base w-52 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                            </div>
                        </div>
                        <button type="submit" className="card-sign-btn rounded-lg font-semibold mt-3 mx-auto py-2">Add Adventure</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default AddTour;