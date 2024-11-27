import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>

      <div className={`hidden sm:block w-96 px-2 py-2  border-r-2 border-zinc-600 text-white  transition all duration-1000 ease-in-out `}>


        {/* <div className=' font-bold flex mb-4 justify-between items-center mr-1'></div> */}

              <div className='hover:border  cursor-pointer  text-xl  px-2 py-2 hover:scale-105 hover:border-white '>

                <Link to="/" className='flex gap-3  ' >
                    
                    <span className='font-semibold'>
                        <i class="ri-home-2-fill"></i>
                    </span><>Home</> 
                </Link>
            </div>


            <div className='hover:border  cursor-pointer  text-xl  px-2 py-2 hover:scale-105 hover:border-white '>
                <Link to="" className='flex gap-3 ' > 
                  <span>
                    <i class="ri-search-eye-line"></i>
                  </span>
                  Search
                </Link>
            </div>

            <div className='hover:border  cursor-pointer  text-xl  px-2 py-2 hover:scale-105 hover:border-white '>
              <Link to='/profile' className='flex gap-3' > 
                <span>
                  <i class="ri-account-circle-fill"></i> 
                </span>Profile 
              </Link>
            </div>



            <div className='hover:border cursor-pointer   text-xl  px-2 py-2 hover:scale-105 hover:border-white '>
              <Link to='/subs' className='flex gap-3 ' >
                <span><i class="ri-profile-fill"></i>
                </span>Subscription
              </Link>
            </div>



            <div className='hover:border text-xl cursor-pointer    px-2 py-2 hover:scale-105 hover:border-white '>
              <Link to="/" className='flex gap-3 ' > 
                <span><i class="ri-logout-circle-line"></i>
                </span>Sign Out 
                </Link>
            </div>



            <div className="w-80 bottom-3  fixed  h-28 bg-lgray text-white text-md font-semibold px-3 py-2 rounded-lg">

              <div className="w-full flex justify-between items-center">

                <div className="w-12">
                  <img className="hover:big-0  "  src="./images/profile.png" />
                </div>

                <div className="text-md"> USERNAME 
                  <span className="block text-sm  ">@Userid</span>
                </div>

                <div className="border-2 text-white rounded-lg border-white  px-2 py-1">FREE</div>

              </div>

              <div className="w-full flex mt-3 justify-center">
                <div className="w-48 px-2 py-1 rounded-lg hover:big-0 border-zinc-600   text-white bg-transparent flex justify-center border-2">
                        Upgrade to Premium

                </div>
              </div>

            </div>


      </div>



    </>
  )
}

export default Sidebar