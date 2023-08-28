import { Sparklines, SparklinesLine } from 'react-sparklines';




export const Cryptodetails1 = ({coin}) => {
    return (
        <>


            <div className="mx-auto text center">
                <img className="mx-auto h-40" src={coin.image?.large}></img>
            </div>



            <div className="px-6 py-4">

                <div className="font-bold text-3xl mb-4 py-1">{coin?.name}</div>

                <div className="font-semibold text-xl mb-4 py-1">{coin.market_data?.current_price ? (<p>Price : ₹ {coin.market_data.current_price.inr.toLocaleString()} ({coin.symbol?.toUpperCase()}/INR)</p>) : null}</div>
                
                <div className="font-base text-lg mb-4 py-1">Market Cap : {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.inr.toLocaleString()}</p>) : null}</div>
                
                <div className="font-base text-lg mb-4 py-1">Total Vol : {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.inr.toLocaleString()}</p>) : null}</div>
                
                <div className="font-base text-lg mb-4 py-1">24h high : {coin.market_data?.high_24hr ? (<p>${coin.market_data.high_24hr.inr.toLocaleString()}</p>) : "Data Unavailable"}</div>
                
                <div className="font-base text-lg mb-4 py-1">24h low : {coin.market_data?.low_24hr ? (<p>${coin.market_data.low_24hr.inr.toLocaleString()}</p>) : "Data Unavailable"}</div>

            </div>

            <Sparklines data={coin.market_data?.sparkline_7d.price} style={{ borderraBottomRadius: "1rem" }}>
                {coin.price_change_percentage_24h > 0 ?
                    (<SparklinesLine color='green' />)
                    :
                    (<SparklinesLine color='red' />)}

            </Sparklines>

            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-green-200 rounded-full px-3 text-sm font-semibold text-gray-700 mb-2 inset-y-0 right-0">7 days</span>
            </div>


        </>
    )
}
