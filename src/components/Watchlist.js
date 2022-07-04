import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore"
import { db } from "../firebase"
import { UserAuth } from "../context/Authcontext"





export const Watchlist = () => {


    const [coins, setCoins] = useState([])

    const { user } = UserAuth();

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
            setCoins(doc.data()?.watchList)
        })
    }, [user.email])


    const coinPath = doc(db, 'users', `${user.email}`);

    const deleteCoin = async (passedid) => {
        try{
            const result = coins.filter((item) => item.id !== passedid)
            await updateDoc(coinPath, {
                watchList : result
            })
        }
        catch(e){
            alert(e.message);
        }
    }






    return (
        <>

            {coins.length !== 0 ?
                (

                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-8 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">

                                        <thead className="bg-white border-b">
                                            <tr className="text-center">


                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                    Market Rank
                                                </th>

                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                    Cryptocurrencies
                                                </th>

                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                                    <button>Remove from Watchlist</button>
                                                </th>

                                            </tr>
                                        </thead>


                                        <tbody>

                                            {coins.map((coin) => (

                                                <tr className="bg-gray-100 border-b" key={coin.id}>

                                                    <td className="py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                                                        {coin.rank}
                                                    </td>

                                                    <td className="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">

                                                        <div className='flex items-center justify-center'>
                                                            <img src={coin.image} alt="" className="object-contain md:object-scale-down w-8" />

                                                            <Link to={`/crypto/${coin.id}`}>
                                                                <div className='mx-3 font-semibold text-lg text-blue-800'>{coin.symbol.toUpperCase()}</div>
                                                            </Link>

                                                            <p className='.text-normal  text-gray-500'>{coin.name}</p>
                                                        </div>

                                                    </td>


                                                    <td className="text-sm text-gray-900 font-light  whitespace-nowrap">
                                                        <button onClick={()=>deleteCoin(coin.id)} className="text-red-500">Remove</button>
                                                    </td>
                                                </tr>

                                            ))}






                                        </tbody>


                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>





                )

                :

                (<p className="text-gray-500 my-40">You dont have any coins saved. Please add a coin to your watchlist first.</p>)}









        </>
    )
}
