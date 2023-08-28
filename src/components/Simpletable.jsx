import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Simplecoinitem } from "./Simplecoinitem";



export const Simpletable = () => {


    const [simpletable, setSimpletable] = useState([]);

    const url= "https://api.coingecko.com/";

    useEffect(() => {
        axios.get(url + "api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true").then((response) => {
            setSimpletable(response.data);
        }).catch((e)=>console.log(e.message))

    },[])
    

    return (
        <div className="px-3">
            <div className="mx-auto mt-10">
                <h2 className="font-semibold mt-0 mb-2 text-gray-800  text-2xl sm:text-4xl md:text-5xl ">Popular Cryptocurrencies</h2>
            </div>
            <div className="mx-auto my-5 font-semibold text-violet-800">
                <Link to="/cryptocurrencies" target="_blank">Market</Link>
            </div>



            {/* ----------------------------------------------------------------------- */}


            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-8 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">



                            <table className="min-w-full">
                                <thead className="bg-white border-b">

                                    <tr>

                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Cryptocurrency
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            24h Change
                                        </th>

                                    </tr>

                                </thead>


                                {/* ----------------------------------------------------------------------- */}

                                <tbody>

                                    {simpletable?.map((coin) => (

                                        <Simplecoinitem key={coin.id} coin={coin}/>
                                    ))}

                                </tbody>



                            </table>


                        </div>
                    </div>
                </div>
            </div>






        </div>
    )
}
