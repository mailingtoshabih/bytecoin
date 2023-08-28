import { Watchlist } from "./Watchlist"
import { UserAuth } from "../context/Authcontext"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"





export const Accountpage = () => {

    
    




    const {user, logout} = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async (e) => {
        try{
            await logout();
            navigate('/');

        } catch(e){
            alert(e.message)
        }
    }


    return (
        <div>


            <h2 className="leading-tight font-bold mb-2 text-black-600  text-2xl sm:text-4xl md:text-5xl  mx-8 mt-10">Watchlist</h2>
            <div className="py-3 text-xl font-medium mx-8 mb-2 text-gray-400">
                        Welcome, User</div>


            <div className="flex justify-center mt-10 text-center bg-gray-200">
                <div className="block rounded-lg shadow-lg bg-white w-full">
                    <div className=" px-6 text-xl font-medium text-center mb-2 mb-5">
                        Added Coins
                        
                    </div>
                    




                    <div>

                        <Watchlist/>

                    </div>












                    <div className="py-3 px-6 border-gray-300 text-gray-600">
                        <Link to="/cryptocurrencies"><button className='mx-3 font-semibold text-lg text-blue-800'>Add coins to your watchlist</button></Link>
                    </div>

                </div>
            </div>



        </div>
    )
}
