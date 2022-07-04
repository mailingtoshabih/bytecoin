// Consists : all coin table (coin search table), search bar

import { Mappedcoin } from "./Mappedcoin";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";





export const Cryptocurrencies = ({coins}) => {

  const [search, setSearch] = useState('');







  return (
    <>

      <div className="mx-auto mx-4 mt-10">
        <h2 className="leading-tight font-bold mt-0 mb-2 text-black-600 text-3xl sm:text-4xl md:text-5xl ">Cryptocurrencies</h2>
        <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-2 inset-y-0 right-0">LIVE</span>



        <div className="flex justify-left mt-5">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">

              <input type="search" className=" form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search by cryptocurrency name" aria-label="Search" aria-describedby="button-addon2"
                onChange={(e) => setSearch(e.target.value)} />

            </div>
          </div>
        </div>

      </div>



      {/* ----------------------------------------------------------------------- */}


      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-x-auto">



              <table className="min-w-full">

                <thead className="border">

                  <tr>


                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Add
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Cryptocurrency
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Price
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      24h Change
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Last 7 days
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      24h Volume
                    </th>
                    <th scope="col" className="text-md font-medium text-gray-900 px-6 py-4 text-left">
                      Market Cap
                    </th>
                  </tr>




                </thead>


                {/* ----------------------------------------------------------------------- */}

                <tbody>

                  {coins
                    .filter((value) => {
                      if (search === '') {
                        return value;
                      } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
                        return value;
                      }
                    })
                    .map((coin) => (

                      <Mappedcoin key={coin.id} coin={coin} />

                    ))}

                </tbody>



              </table>


            </div>
          </div>
        </div>
      </div>



    </>
  )
}
