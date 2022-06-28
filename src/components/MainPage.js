import { Homepage } from "./Homepage"
import { Navbar } from "./Navbar"
import { Cryptocurrencies } from "./Cryptocurrencies"
import { CryptoDetails } from "./CryptoDetails"
import { News } from "./News"
import { Exchanges } from "./Exchanges"

import { Footer } from "./Footer"

import { Routes, Route, Link } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from "react"





// ================================================================================



export const MainPage = () => {


  const [coins, setCoins] = useState([]);

  const url= "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=true";

  useEffect( () => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    })
  },[url]);


  return (
    <>

      <div>
        <Navbar />
      </div>




      <div className="md:container md:mx-auto">


        <div className="md:container md:mx-auto">
          <Routes>

            <Route path="/" element={<Homepage/>} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/cryptocurrencies" element={<Cryptocurrencies coins={coins}/>} />
            <Route path="/news" element={<News />} />

            
            <Route path="/crypto/:coinId" element={<CryptoDetails />}>
              <Route path=':coinId'/>
            </Route>
            

          </Routes>
        </div>


      </div>




        <div>
          <Footer/>
        </div>

    </>
  )
}