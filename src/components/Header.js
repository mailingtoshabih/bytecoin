import one from '../components/assets/one.png';
import two from '../components/assets/two.png';
import { Link } from 'react-router-dom';



export const Header = () => {
    return (
        <div className='my-36'>

            <div className='h-auto w-full h-100'>

                {/* <!-- Background image --> */}
                <div >

                    <p className='text-5xl sm:text-7xl w-fit text-center mx-auto 
                        font-extrabold text-violet-900'>

                        Introducing <br />
                        <span className='text-green-500'>
                            Bytecoin
                        </span>

                    </p>

                    <p className='my-10 text-xl text-center sm:text-3xl font-bold text-gray-600'>
                        Your Gateway to Real-Time Cryptocurrency Prices!
                    </p>

                </div>
                {/* <!-- Background image --> */}

            </div>





            <div className="w-fit mx-auto px-6 py-2 sm:px-20 cursor-pointer sm:py-5 bg-green-500 text-white font-semibold text-md sm:text-lg uppercase rounded-md hover:bg-white hover:text-violet-900 duration-700 my-5">
                <Link to='/cryptocurrencies' target="_blank">
                    View All Coins
                </Link>
            </div>


        </div>
    )
}
// completed