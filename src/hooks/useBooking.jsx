import { useEffect, useState } from 'react';

const useBookings = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/my-bookings")
            .then(res => res.json())
            .then(res => setBookings(res))
    }, [])
    
    // return corses data 
    return [bookings];
}
 
export default useBookings;