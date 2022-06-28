import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Simplecoinitem } from "./Simplecoinitem";



export const Simpletable = () => {


    const [simpletable, setSimpletable] = useState([])

    const url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=true";

    useEffect(() => {
        axios.get(url).then((response) => {
            setSimpletable(response.data);
        })

    },[url])
    

    return (
        <div>
            <div className="mx-auto mx-4 mt-10">
                <h2 className="leading-tight font-bold mt-0 mb-2 text-black-600 md:text-5xl">Popular Cryptocurrencies</h2>
            </div>
            <div className="mx-auto mx-4 my-10 font-semibold text-blue-500">
                <Link to="/cryptocurrencies">View Advanced Data ▶️</Link>
            </div>



            {/* ----------------------------------------------------------------------- */}


            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-x-auto">



                            <table className="min-w-full">

                                <thead className="border-b rounded-3xl">

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

                                    {simpletable.map((coin) => (

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
