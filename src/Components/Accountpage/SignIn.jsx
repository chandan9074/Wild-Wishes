// import pakages
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth'; 

// import files 
import './accounts.css';
import SingUp from './SignUp';

const SignIn = (props) => {

    const {setEmail, setPassword, signInWithEmail, googleSignIn, error, setError} = useAuth();
    const [isLogin , setIsLogin] = useState(true);

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    
    // handle accounts toggle
    const handleLogin = () =>{
        setIsLogin(true);
        setError("");
    }
    const handleSignIn = () =>{
        setIsLogin(false);
        setError("");
    }
    

    return ( 
        <div>
            {isLogin?
        <div className="sign-part flex justify-center items-center">
            <div className="sing-back-part flex flex-col justify-end md:justify-center items-end">
                <p className="text-gray-800 text-xl md:text-2xl font-bold mr-11">Create a new account?</p> 
                <button onClick={handleSignIn} className="back-card-sign-btn rounded-lg font-semibold py-1">Sign Up</button>
            </div>
            <div className="Sign-card py-10 px-10 flex flex-col items-center">
                <h1 className="text-gray-800 pb-3 font-bold">Sign In</h1>
                <form onSubmit={(e)=>signInWithEmail(e)}  className="flex flex-col justify-center">
                    <input type="email" required onChange={handleEmail} placeholder="Enter Email" className="inpt-f text-base w-60 md:w-72 p-2 mb-2 rounded-md shadow focus:outline-none border-2 border-blue-500"/>
                    <input type="password" required onChange={handlePassword} placeholder="Enter Password" className="inpt-f focus:outline-none text-base w-60 md:w-72 p-2 mb-2 rounded-md shadow border-2 border-blue-500" />
                    {error ? <p className="p-2 text-xs md:text-base w-60 md:w-72 bg-yellow-300 rounded-lg mt-2 mb-0">{error}</p>:null}
                    <button type="submit" className="card-sign-btn rounded-lg font-semibold mt-3 mx-auto py-1">Sign In</button>
                </form>
                <p className="text-gray-700 font-semibold text-md mt-2">or sign in using</p>
                <div className="flex justify-center">
                    <button onClick={googleSignIn} ><img src="https://i.ibb.co/4thYQDm/118-1181708-google-icon-google-logo-design-flaws-hd-png.png" alt="" className="w-12 rounded-full shadow-lg" /></button>
                </div>
            </div>
        </div>: <SingUp handleLogin={handleLogin} /> }
        </div>
     );
}
 
export default SignIn;