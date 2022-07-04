import one from '../components/assets/one.png';
import two from '../components/assets/two.png';
import { Link } from 'react-router-dom';



export const Header = () => {
    return (
        <>
            <header className='.h-auto w-full h-100'>

                {/* <!-- Background image --> */}
                <div className="static overflow-hidden bg-no-repeat bg-cover      grid grid-cols-1 gap-4 sm:grid-cols-2 my-10">

                    <img src={one} alt="" className='.h-auto mx-auto rounded-2xl' />
                    <img src={two} alt="" className='.h-auto mx-auto rounded-2xl' />

                </div>
                {/* <!-- Background image --> */}

            </header>
            <div className='text-center'>
                <Link to='/cryptocurrencies' target="_blank"><div className="inline-block px-20 py-5 bg-white text-indigo-600 font-semibold text-lg leading-snug uppercase rounded-xl hover:bg-indigo-600 hover:text-white focus:bg-indigo-700 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-100 ease-in-out my-10">View All Cryptocurrencies </div></Link>
            </div>
        </>
    )
}
// completed