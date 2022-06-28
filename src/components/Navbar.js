import { Link } from 'react-router-dom';
import logo from '../components/assets/logo.png'




// -----------------------------------------------------------------------------------------------------------




export const Navbar = () => {
    return (
        <>


            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}

            <nav className=''>

                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

                    <div className="relative flex items-center justify-between h-16">

                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            {/* <!-- Mobile menu button--> */}

                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                {/* <!--
                                Icon when menu is closed.
                                Heroicon name: outline/menu
                                Menu open: "hidden", Menu closed: "block"--> */}

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                {/* <!--
                                Icon when menu is open.
                                Heroicon name: outline/x
                                Menu open: "block", Menu closed: "hidden" --> */}

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>

                            </button>

                        </div>






                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                            <div className="flex-shrink-0 flex items-center">
                                <Link to='/'><img className="block lg:hidden h-10 w-auto" src={logo} alt="Workflow" /></Link>
                                <Link to='/'><img className="hidden lg:block h-10 w-auto" src={logo} alt="Workflow" /></Link>
                            </div>

                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                                    {/* <Link to="/" className="bg-gray-900 text-white  px-2 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link> */}
                                    <Link to="/cryptocurrencies" className="text-black-900  px-2 py-2 rounded-md text-md font-semibold hover:text-blue-600" aria-current="page">Cryptocurrencies</Link>
                                    <Link to="/exchanges" className="text-black-900  px-2 py-2 rounded-md text-md font-semibold hover:text-blue-600" aria-current="page">Exchanges</Link>
                                    <Link to="/news" className="text-grey-900  px-2 py-2 rounded-md text-md font-semibold hover:text-blue-600 " aria-current="page">News</Link>

                                </div>
                            </div>

                        </div>



                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 mx-1">

                    
                            {/* <!-- Profile Pic dropdown --> */}
                            <div className="ml-3 relative">

                                <button className="ml-2 bg-purple-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-white hover:text-blue-500 focus:bg-blue-700">Signin</button>
                                <button className=" xs:hidden ml-2 bg-purple-500 text-white font-semibold py-2 px-4 rounded-xl hover:bg-white hover:text-blue-500 focus:bg-blue-700">Register</button>

                            </div>

                        </div>

                    </div>
                </div>




                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}


                        <Link to="/" className="border text-grey-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>
                        <Link to="/cryptocurrencies" className="border text-grey-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Cryptocurrencies</Link>
                        <Link to="/exchanges" className="border text-grey-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Exchanges</Link>
                        <Link to="/news" className="border text-grey-900 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">News</Link>


                    </div>
                </div>



            </nav>




        </>
    )
}
