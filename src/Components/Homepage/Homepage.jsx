import React from 'react';


import './homepage.css';
import HomepageService from './HomepageService/HomepageService';

const Homepage = () => {

    // window.onload = function() {
    //     let image=document.getElementById("hp-slide");
    //     let img_array = [`https://i.ibb.co/zhhytKH/h1-b.jpg`, `https://i.ibb.co/Yyy6HPm/h2.jpg`, `https://i.ibb.co/17TD19N/h3-b.jpg`];
    //     let index=0;
    //     let interval = 2000;
    //     function slide() {
    //         image.src = img_array[index++%img_array.length];
    //     }
    //     setInterval(slide, interval);
    // }
    
    return (
        <div>
            {/* headers part  */}
            <section className="navColor">
                <div className="banner-part">
                    <img id="hp-slide" src="https://i.ibb.co/Yyy6HPm/h2.jpg" alt="" className="" />
                    <div className="banner-des" >
                        <div className="flex items-center justify-center" >
                            <h1 className="text-9xl font-bold">W</h1>
                            <div className="leading-4">
                                <h1 className="text-gray-800 font-extrabold home-title text-left mb-0" >ILD</h1>
                                <h1 className="text-gray-800 font-extrabold home-title text-left mb-0" >ISHES</h1>
                            </div>
                        </div>
                        <p className="text-xl font-bold text-left" >&#8220;Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure or nothing&#8221;</p>
                        <p className="text-lg font-bold text-right">― Helen Keller</p>
                        <button className="explore-btn text-xl font-bold">Explore</button>
                    </div>
                </div>
                <div className="banner-shade" ></div>
                    <img className="home-part-img1" src="https://i.ibb.co/h1Q7ZxG/hp-1.jpg" alt="" />
                    <img className="home-part-img2" src="https://i.ibb.co/vP15NLH/hp-2.jpg" alt="" />
                    <img className="home-part-img3" src="https://i.ibb.co/Xxznf07/hp-3.jpg" alt="" />

            </section>

            {/* services part  */}

            <section className="service-part">
                {/* <div className="service-shade"></div> */}
                <div className="container">
                    {/* <div className="flag">chandan</div> */}
                    <div className="flex flex-col">
                        <h1 className="text-gray-400">Services</h1>
                        <div className="service-underline"></div>
                    </div>

                    <HomepageService />
                </div>
            </section>

            {/* Ongoing events  */}
            <section className="pt-10 pb-20 ongoing-part">
                <div className="container ">
                    <h1 className="text-gray-400">Ongoing Events</h1>
                    <div className="event-underline mb-5"></div>
                    <div className="flex justify-center evant-img-part relative">
                    <img src="https://i.ibb.co/Wghhznr/new.jpg" alt="" className="absolute top-10 even-bg rounded" />
                    <i class="fas fa-hourglass-half text-yellow-400 absolute left-28 top-16 text-lg"></i>
                        <img src="https://i.ibb.co/VCw7w9m/pexels-photo-1122462.jpg" className="w-80 h-80 border-5 event-img border-gray-200 rounded-full" alt="" />
                        <img src="https://i.ibb.co/56FC6n3/pexels-photo-758744.jpg" className="w-80 h-80 border-5 event-img border-gray-200 rounded-full mx-4" alt="" />
                        <img src="https://i.ibb.co/3704NHy/pexels-photo-1305095.jpg" className="w-80 h-80 border-5 event-img border-gray-200 rounded-full" alt="" />
                    </div>
                    <p className="w-2/3 mx-auto text-lg font-semibold text-center text-gray-300 mt-4">Outdoor adventurous activities are typically undertaken for the purposes of recreation or excitement: examples are adventure racing and adventure tourism. Adventurous activities can also lead to gains in knowledge, such as those undertaken by explorers and pioneers – the British adventurer Jason Lewis, for example.</p>
                    <div className="w-full flex flex-col justify-center items-center">
                        <p className=" text-base font-bold text-yellow-400"><i class="fas fa-calendar-alt mr-2"></i> Oct 27, 2021 - Nov 15, 2021</p>
                        <button className="text-white py-2 px-3 font-bold rounded-full join-btn" >Join Us</button>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Homepage;