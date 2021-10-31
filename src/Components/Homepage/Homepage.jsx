import React from 'react';


import './homepage.css';
import HomepageService from './HomepageService/HomepageService';

const Homepage = () => {

    const handleRate = () =>{
        alert("Thank you for your rating!!");
    }

    const handleJoin = () =>{
        alert("Thank you for joining us!! We will contact with you as soon as possible.")
    }
    
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
                        <button onClick={handleJoin} className="text-white py-2 px-3 font-bold rounded-full join-btn" >Join Us</button>
                    </div>
                </div>
            </section>

            {/* feedback part  */}

            <section  className="pt-10 pb-20 ongoing-part">
                <div className="container">
                    <h1 className="text-gray-300">User feedback</h1>
                    <div className="feed-underline mb-5"></div>
                    <div className="flex justify-center flex-col">
                        <div className=" flex justify-center w-full">
                            <div className="w-80 relative">
                                    <img src="https://i.ibb.co/N3TMdh6/Handsome-mid-adult-man-with-beard-standing-with-crossed-hands-and-looking-at-camera-Mature-middle-ea.jpg" alt="" className=" absolute w-24 h-24 rounded-full" />
                                <button onClick={handleRate} className="bg-yellow-400 text-base font-semibold absolute rate-btn py-1 px-2 rounded-lg ">Rate us</button>
                                <div className=" mt-10 ml-12 w-3/4 rounded-lg border-4 border-gray-400 py-3 px-4  text-justify">
                                    <h1 className="text-xl text-gray-200 text-end">Adriand <span className="text-yellow-300">Ade</span></h1>
                                    <p className="text-gray-200 feedback-des">Everything was perfect, and I would have to say it was the vacation of a life time. I will do all I can to promote your company and your services.</p>
                                    <div className="flex justify-center mb-4">
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-80 relative">
                                    <img src="https://i.ibb.co/8d3vDHP/Portrait-of-happy-young-man-leaning-against-wall-isolated-on-grey-background-with-a-big-smile-Handso.jpg" alt="" className=" absolute w-24 h-24 rounded-full" />
                                <button onClick={handleRate} className="bg-yellow-400 text-base font-semibold absolute rate-btn py-1 px-2 rounded-lg ">Rate us</button>
                                <div className=" mt-10 ml-12 w-3/4 rounded-lg border-4 border-gray-400 py-3 px-4  text-justify">
                                    <h1 className="text-xl text-gray-200 text-end">Andrew <span className="text-yellow-300">Andy</span></h1>
                                    <p className="text-gray-200 feedback-des">If I were speaking to someone about Amerika Venture, I would stress that you are a "blue chip" travel company, with accommodation and dining near the top of your priorities. I myself have usually traveled in a little less style. At the same time, it was not so expensive and I thoroughly enjoyed the comforts. Thanks!</p>
                                    <div className="flex justify-center mb-4">
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-80 relative">
                                    <img src="https://i.ibb.co/X2TWJR1/Handsome-young-man-on-grey-background-looking-at-camera-Portrait-of-laughing-young-man-with-hands-in.jpg" alt="" className=" absolute w-24 h-24 rounded-full" />
                                <button onClick={handleRate} className="bg-yellow-400 text-base font-semibold absolute rate-btn py-1 px-2 rounded-lg ">Rate us</button>
                                <div className=" mt-10 ml-12 w-3/4 rounded-lg border-4 border-gray-400 py-3 px-4  text-justify">
                                    <h1 className="text-xl text-gray-200 text-end">Brenton <span className="text-yellow-300">Brent</span></h1>
                                    <p className="text-gray-200 feedback-des">Absolutely! Will use you again. You were recommended to us by a couple friends of mine. I'm glad they had such a good experience with you. I also want to personally thank you for being so flexible when Brenda and I had to cancel our first trip with you due to a skiing accident she had. You were so gracious and accommodating. Really a class act!
</p>
                                    <div className="flex justify-center mb-4">
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="fas fa-star text-yellow-300 mr-1"></i>
                                        <i class="far fa-star text-yellow-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center mt-20">
                            <div className="w-4/5 flex justify-around bg-yellow-400 py-4 px-5 rounded-lg">
                                <div>
                                    <h1 className="text-center text-4xl font-bold">Adventure Done</h1>
                                    <div className="feed-details-underline"></div>
                                    <h3 className="text-center mt-4 text-3xl font-bold">125+</h3>
                                </div>
                                <div>
                                    <h1 className="text-center text-4xl font-bold">Rating</h1>
                                    <div className="feed-details-underline"></div>
                                    <h3 className="text-center mt-4 text-3xl font-bold">4.5</h3>
                                    <div className="flex justify-center">
                                        <i class="fas fa-star text-red-800 mr-1"></i>
                                        <i class="fas fa-star text-red-800 mr-1"></i>
                                        <i class="fas fa-star text-red-800 mr-1"></i>
                                        <i class="fas fa-star text-red-800 mr-1"></i>
                                        <i class="fas fa-star-half-alt text-red-800"></i>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-center text-4xl font-bold">Members</h1>
                                    <div className="feed-details-underline"></div>
                                    <h3 className="text-center mt-4 text-3xl font-bold">11,000+</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Homepage;