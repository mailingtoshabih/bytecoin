// trending coin cards

export const Coinitem = ({coin}) => {
    return (
        <>


            <div className="flex justify-center">

                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" style={{
                        width:"300",
                        height:"auto"

                    }}>

                    
                    
                    <div className="p-6 flex flex-col justify-start">
                        
                        <h5 className="text-gray-900 text-xl font-semibold mb-2">{coin.item.name}<hr /></h5>
                        <h5 className="text-gray-500 text-xs font-medium mb-2">{coin.item.symbol.toUpperCase()}</h5>
                        
                        <p className="text-gray-700 text-base mb-4"> Price : {coin.item.price_btc.toFixed(7)} BTC </p>
                        <p className="text-gray-700 text-base text-green-600 mb-4"> Rank  : {coin.item.market_cap_rank} </p>
                        

                    </div>
                </div>

            </div>





        </>
    )
}
