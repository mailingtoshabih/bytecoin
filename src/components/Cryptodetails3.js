import DOMPurify from 'dompurify';









export const Cryptodetails3 = ({ coin }) => {

    const appDescription = "Bytecoin is a single page application that allows you to keep track of the price of your favorite cryptocurrencies. The site has a beautiful interface that shows the prices of Bitcoin, Ethereum, and other currencies in a clean and easy to read format. There is also a section where you can track the market cap of each currency, as well as how much each currency has grown or shrunk in the past day. The site also has a section where you can check out a live graph of the price changes over the past week."

    return (
        <>


            <div className="px-6 py-4">



                <div className="font-bold text-xl my-5">Description
                    <span className="inline-block bg-yellow-400 rounded-full px-2  text-sm font-semibold text-black mb-2 mx-3">Beta</span>
                </div>

                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coin.description ? (coin.description.en.substring(0, 1200) + "...") : appDescription) }} className="text-md font-light leading-relaxed mt-1 mb-1 text-gray-800">
                    {/* {coin.description.en}     */}
                </p>



            </div>

            {/* <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 inset-y-0 right-0">7 days</span>
            </div> */}




        </>
    )
}
