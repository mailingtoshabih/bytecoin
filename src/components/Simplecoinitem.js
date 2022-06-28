import React from 'react'

export const Simplecoinitem = ({coin}) => {
    return (
        <>

            <tr className="border-b">

                <td className="text-sm text-gray-900 px-6 py-4 whitespace-nowrap">
                    <div className='flex items-center'>
                        <img src={coin.image} alt="" className="object-contain md:object-scale-down w-8" />
                        <h4 className='mx-3 font-semibold'>{coin.symbol.toUpperCase()}</h4>
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

            </tr>











        </>
    )
}
