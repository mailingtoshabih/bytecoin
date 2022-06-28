import { useState, useEffect } from "react";
import axios from "axios";

import { Cryptodetails1 } from "./Cryptodetails1";
import { Cryptodetails2 } from "./Cryptodetails2";
import { Cryptodetails3 } from "./Cryptodetails3";








export const CryptoDetails = () => {


  const [coin, setCoin] = useState({});

  const url = "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true"

  useEffect(() => {

    axios.get(url).then((response) => {
      setCoin(response.data);
    })
  }, [url]);




  return (
    <>


      <div className="mx-auto mt-10 ml-10">
        <h2 className="leading-tight font-bold mb-2 text-black-600 md:text-5xl">Coin Details</h2>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 inset-y-0 right-0">LIVE</span>
      </div>


      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 my-10">

        <div className="flex-none max-w-sm rounded-xl overflow-hidden shadow-lg">
          <Cryptodetails1 coin={coin} />
        </div>



        <div className="flex-none max-w-sm rounded-xl overflow-hidden shadow-lg">
          <Cryptodetails2 coin={coin} />
        </div>

        <div className="flex-none max-w-sm rounded-xl overflow-hidden shadow-lg">
          <Cryptodetails3 coin={coin}/>
        </div>

      </div>

    </>
  )
}
