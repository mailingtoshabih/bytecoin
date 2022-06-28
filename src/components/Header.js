import header1 from '../components/assets/headerr.png';



export const Header = () => {
    return (
        <>
            <header className='my-20 .h-auto'>

                {/* <!-- Background image --> */}
                <div className="relative overflow-hidden bg-no-repeat bg-cover">

                    <img src={header1} alt="" className='.h-auto mx-auto rounded-3xl blur-3xl' />

                </div>
                {/* <!-- Background image --> */}

            </header>
            <div className='text-center'>
                <button type="button" class="inline-block px-20 py-5 bg-white text-blue-600 font-semibold text-lg leading-snug uppercase rounded-2xl hover:bg-blue-600 hover:text-white focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-700 ease-in-out">Cryptocurrencies </button>
            </div>
        </>
    )
}
// completed