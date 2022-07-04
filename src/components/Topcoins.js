import axios from "axios";
import { useEffect, useState } from "react";

import { Coinitem } from "./Coinitem";






export const Topcoins = () => {


    const url = "https://api.coingecko.com/api/v3/search/trending";


    const [trending, setTrending] = useState([])

    useEffect(() => {

        axios.get(url).then((response) => {

            setTrending(response.data.coins);
        })
    }, [url]);



    return (
        <>


            <div className="mx-auto my-10 mx-6">
                <h2 className="leading-tight font-bold mt-0 mb-2 text-black-600 text-2xl sm:text-4xl md:text-5xl ">Today's Trending Coins</h2>
            </div>

            

            {/* remove blur and background color */}

            {/*  */}
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 mx-auto">

                {trending.map((coin, index) => (
                    
                    index < 6 ? (<Coinitem coin={coin} key={index}/>) : ("")
                    
                ))}


            </div>
            {/* <div className="flex justify-center text-2xl border-2 border-gray-300 rounded-xl p-3 bg-gray-100">1</div>
                    <div className="flex justify-center text-2xl border-2 border-gray-300 rounded-xl p-3 bg-gray-100">1</div> */}











        </>
    )
}
