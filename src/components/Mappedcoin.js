// import { AiOutlineStar } from 'react-icons/ai';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Link } from 'react-router-dom';






export const Mappedcoin = ({coin, key}) => {
    return (
        <>


            <tr className="border-b hover:bg-gray-100">

                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{AiOutlineStar}</td> */}

                {/* <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{coin.market_cap_rank}</td> */}


                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    
                        <div className='flex items-center'>
                            <img src={coin.image} alt="" className="object-contain md:object-scale-down w-8" />
                            <div className='mx-3 font-base text-lg text-blue-700'>{coin.symbol.toUpperCase()}</div>
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
