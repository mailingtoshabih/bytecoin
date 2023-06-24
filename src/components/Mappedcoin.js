// import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';

import { UserAuth } from '../context/Authcontext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

import { Toast } from './Toast';








export const Mappedcoin = ({ coin, key }) => {

    const [savedCoin, setSavedcoin] = useState(false);
    const { user } = UserAuth();


    const coinPath = doc(db, 'users', `${user?.email}`);

    const saveCoin = async () => {

        if (user?.email) {
            setSavedcoin(true);
            await updateDoc(coinPath, {

                watchList: arrayUnion({
                    id: coin.id,
                    name: coin.name,
                    image: coin.image,
                    rank: coin.market_cap_rank,
                    symbol: coin.symbol
                    
                })
            })
        }
        else {
            alert("Please sign in to save a coin to your watchlist.")
        }


    }





    return (
        <>


            <tr className="border-b hover:bg-gray-100">

                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {savedCoin ? 
                    (
                    <button className=" bg-violet-300 rounded-full p-2  font-semibold right-0 text-lg text-white"></button>
                    ) 
                    : 
                    (
                    <button className="inline-block border-2 rounded-full px-2 font-semibold py-2 right-0 text-lg text-gray-800"  onClick={saveCoin} ></button>
                    )
                }
                    
                </td>


                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">

                    <div className='flex items-center'>
                        <img src={coin.image} alt="" className="object-contain md:object-scale-down w-8" />
                        <Link to={`/crypto/${coin.id}`}>
                            <div className='mx-3 font-semibold text-lg text-blue-800'>{coin.symbol.toUpperCase()}</div>
                        </Link>
                        <p className='.text-normal  text-gray-500'>{coin.name}</p>
                    </div>

                </td>


                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    ₹ {coin.current_price}
                    <p>INR</p>
                </td>


                <td className="text-sm text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">

                    {coin.price_change_percentage_24h > 0 ?
                        (<p className='text-green-600'>+ {coin.price_change_percentage_24h.toFixed(2)} %</p>)
                        :
                        (<p className='text-red-600'>- {-(coin.price_change_percentage_24h.toFixed(2))} %</p>)}

                </td>


                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">

                    <Sparklines data={coin.sparkline_in_7d.price} style={{ width: "150px" }}>
                        {coin.price_change_percentage_24h > 0 ?
                            (<SparklinesLine color='green' />)
                            :
                            (<SparklinesLine color='red' />)}

                    </Sparklines>
                </td>



                <td className="text-sm text-gray px-6 py-4 whitespace-nowrap">
                    {coin.total_volume}
                </td>
                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    ₹ {coin.market_cap}
                </td>


            </tr>



        </>
    )
}
