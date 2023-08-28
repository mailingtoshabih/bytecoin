import { Link } from 'react-router-dom'
import { UserAuth } from '../context/Authcontext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'







export const Navbar = () => {


  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    try {
      await logout()
      navigate('/')

    } catch (e) {
      alert(e.message)
    }
  }

  const [toggle, setToggle] = useState("hidden");

  const handleClick = () => {
    (toggle === "hidden" ? setToggle("visible") : setToggle("hidden"))
  }








  return (

    <>
      <div className="relative bg-white mb-10 rounded-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">


            {/*  contains logo */}
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <p className='text-3xl font-bold text-violet-900'>
                  Bytecoin
                </p>
              </Link>
            </div>


            {/* contains crypto and news */}
            <nav className="hidden md:flex space-x-10">


              <Link to="/" className="text-base font-medium text-gray-500 hover:text-gray-900"> Home </Link>
              <Link to="/cryptocurrencies" className="text-base font-medium text-gray-500 hover:text-gray-900"> Cryptocurrencies </Link>
              <Link to="/news" className="text-base font-medium text-gray-500 hover:text-gray-900"> News </Link>


            </nav>


            {/*--------ternary - contains signin and signup or watchlist and signout----------------------*/}

            {
              user?.email ?
                (
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link to="/accountpage" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> Watchlist </Link>

                    <Link to="/signout">
                      <button onClick={handleSignOut} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-red-600 bg-red-100 hover:bg-red-500 hover:text-white"> Sign Out </button>
                    </Link>

                  </div>
                )
                :
                (
                  <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link to="/signin" className="font-medium text-gray-500 hover:text-gray-900"> Sign in </Link>
                    <Link to="/signup" className="ml-8 items-center justify-center px-4 py-2 rounded-md shadow-sm font-medium text-white bg-violet-900 hover:bg-violet-700 duration-500"> Sign up </Link>
                  </div>
                )
            }


          </div>
        </div>





        {/* <!-- Mobile menu starts here---------------------------------------> */}



        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">

          <div className="rounded-lg ring-opacity-5 bg-green-200 divide-y-2 divide-gray-50">
            <div className=" pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">



                {/* contains mobile menu logo */}
                <Link to="/">
                  <div>
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                  </div>
                </Link>



                {/* ternary here -----------------------------------------------------------------------------------*/}
                {toggle === "hidden" ?
                  (
                    <div className="-mr-2 -my-2 md:hidden">
                      <button onClick={handleClick} type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        {/* <!-- Heroicon name: outline/menu --> */}
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  )
                  :
                  (
                    <div className="-mr-2 outline-none">
                      <button type="button" onClick={handleClick} className="bg-white outline-none rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only outline-none">Close menu</span>
                        {/* <!-- Heroicon name: outline/x --> */}

                        <svg className="h-6 w-6 outline-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}

              </div>




              {/* mobile menu. contains cryptocur and news button */}
              <div className={`${toggle} mt-6 z-10`}>
                <nav className="grid gap-y-8">

                  <Link to="/cryptocurrencies" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                    {/* <!-- Heroicon name: outline/chart-bar --> */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span onClick={handleClick} className="ml-3 text-base font-medium text-gray-900"> Cryptocurrencies </span>
                  </Link>


                  <Link to="/news" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 outline-none">
                    {/* <!-- Heroicon name: outline/cursor-click --> */}
                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                    <span onClick={handleClick} className="ml-3 text-base font-medium text-gray-900"> News </span>
                  </Link>

                </nav>
              </div>

            </div>



            {/*ternary mobile menu. contains signin and signup or watchlist and signout */}
            <div className={`${toggle} py-6 px-5 space-y-6 z-10`}>
              <div>

                {user?.email ?

                  (
                    <>
                      <Link to="/accountpage" onClick={handleClick} className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Watchlist </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Want to leave ?
                        <button onClick={handleSignOut} className='mx-2 text-red-500 hover:text-red-600'><p onClick={handleClick} > Sign Out </p></button>
                      </p>
                    </>
                  )
                  :
                  (
                    <>
                      <Link to="/signup" onClick={handleClick}
                        className="w-full flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base font-medium text-white bg-violet-900 hover:bg-violet-700 duration-700"> Sign up </Link>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?

                        <Link to="/signin" onClick={handleClick}
                          className="text-violet-900 font-semibold hover:text-indigo-500"> Sign in </Link>
                      </p>
                    </>
                  )
                }





              </div>
            </div>


          </div>
        </div>
      </div>



    </>

  )
}
