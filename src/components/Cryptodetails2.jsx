




export const Cryptodetails2 = ({ coin }) => {
    return (
        <>





            {/* <div className="mx-auto text center">
                <img className="mx-auto h-40" src={coin.image?.large}></img>
            </div> */}



            <div className="px-6 py-4">

                <div className="font-bold text-3xl my-10">Market Statistics</div>

                <div className="mt-10 font-semibold text-xl mb-5">Market Capital Rank {coin.market_data?.current_price ? (<span className="inline-block bg-blue-900 rounded-full px-3 py-1 text-sm font-semibold text-white mb-2 inset-y-0 right-0 ml-5">{coin.market_cap_rank}</span>) : null}</div>

                <div className="font-base text-lg mb-5">Hashing Algorithm  {coin.hashing_algorithm ? (<span className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5 my-auto">{coin.hashing_algorithm}</span>) : null}</div>

                <div className="font-base text-lg mb-5">Trust Score {coin.tickers ? (<span className="inline-block bg-teal-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.liquidity_score.toFixed(2)}</span>) : null}</div>

                <div className="font-base text-lg mb-5">Price Change (24 Hour)  {coin.market_data ? ((coin.market_data.price_change_percentage_24h > 0) ? ((<span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_24h.toFixed(2)} % </span>)) : (<span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_24h.toFixed(2)} % </span>)) : "Data Unavailable"}</div>

                <div className="font-base text-lg mb-5">Price Change (7 Days)  {coin.market_data ? ((coin.market_data.price_change_percentage_7d > 0) ? ((<span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_7d.toFixed(2)} % </span>)) : (<span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_7d.toFixed(2)} % </span>)) : "Data Unavailable"}</div>

                <div className="font-base text-lg mb-5">Price Change (14 Days)  {coin.market_data ? ((coin.market_data.price_change_percentage_14d > 0) ? ((<span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_14d.toFixed(2)} % </span>)) : (<span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_14d.toFixed(2)} % </span>)) : "Data Unavailable"}</div>

                <div className="font-base text-lg mb-5">Price Change (30 Days)  {coin.market_data ? ((coin.market_data.price_change_percentage_30d > 0) ? ((<span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_30d.toFixed(2)} % </span>)) : (<span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_30d.toFixed(2)} % </span>)) : "Data Unavailable"}</div>

                <div className="font-base text-lg mb-5">Price Change (60 Days)  {coin.market_data ? ((coin.market_data.price_change_percentage_60d > 0) ? ((<span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_60d.toFixed(2)} % </span>)) : (<span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_60d.toFixed(2)} % </span>)) : "Data Unavailable"}</div>

                <div className="font-base text-lg mb-5">Price Change (1 Year)  {coin.market_data ? ((coin.market_data.price_change_percentage_1y > 0) ? ((<span className="inline-block bg-green-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_1y.toFixed(2)} % </span>)) : (<span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mb-2 inset-y-0 right-0 ml-5">{coin.market_data.price_change_percentage_1y.toFixed(2)} % </span>)) : "Data Unavailable"}</div>



            </div>



            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 inset-y-0 right-0">7 days</span>
            </div> */}




        </>
    )
}
