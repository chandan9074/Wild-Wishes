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
        </div>
     );
}
 
export default Homepage;