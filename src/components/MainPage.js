import { Navbar } from "./Navbar"
import { Homepage } from "./Homepage"
import { Cryptocurrencies } from "./Cryptocurrencies"
import { CryptoDetails } from "./CryptoDetails"
import { News } from "./News"
import { Footer } from "./Footer"

import { Signin } from "./Signin"
import { Signup } from "./Signup"
import { Accountpage } from "./Accountpage"


import { Routes, Route, Link, useParams } from 'react-router-dom';

import axios from 'axios';
import { useEffect, useState } from "react"
import { AuthContextProvider } from "../context/Authcontext"





// ================================================================================













export const MainPage = () => {


  const [coins, setCoins] = useState([]);

  const params = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=true`;


  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    })
  }, [url, params]);


  return (
    <>

      <AuthContextProvider>


        <div>
          <Navbar />
        </div>


        <div className="md:container md:mx-auto">
          <div className="md:container md:mx-auto">

            <Routes>

              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/accountpage" element={<Accountpage />} />


              <Route path="/" element={<Homepage />} />

              <Route path="/cryptocurrencies" element={<Cryptocurrencies coins={coins} />} />
              <Route path="/news" element={<News />} />


              <Route path="/crypto/:coinId" element={<CryptoDetails />}>
                <Route path=':coinId' />
              </Route>

            </Routes>
          </div>
        </div>



        <div>
          <Footer />
        </div>


      </AuthContextProvider>

    </>
  )
}
