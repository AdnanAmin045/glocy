import React from 'react'
import { Link } from 'react-router-dom'


export default function navbar() {
    return (
        <div className='px-[10vw] pt-[0.5vw]'>
            {/* First Part */}

            <div className='flex justify-between p-3'>
                <ol className='flex gap-7 text-[0.9vw] cursor-pointer'>
                    <li>About</li>
                    <li>My Account</li>
                    <li>Wishlist</li>
                    <li>Order Traking</li>
                </ol>
                <div className='flex gap-7'>

                    <div className='flex text-[0.9vw]'>
                        <p>100% Secure delivery without contacting the courier</p>
                    </div>
                    <div class="border-l-2 h-5 text-[#f3f4f8]"></div>
                    <div className='flex text-[0.9vw]'>
                        <p>Need help? Call Us: <span className='text-[#62afda] underline font-bold'>+923265145770</span>
                        </p>
                    </div>
                    <div class="border-l-2 h-5 text-[#f3f4f8]"></div>
                    <div className='flex gap-2'>
                        <div className='flex justify-center cursor-pointer'>
                            <p className='text-[0.9vw]'>English</p>
                            <i className="text-[0.9vw] ri-arrow-down-s-line"></i>
                        </div>
                        <div className='flex justify-center cursor-pointer'>
                            <p className='text-[0.9vw]'>US</p>
                            <i className="text-[0.9vw] ri-arrow-down-s-line"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute left-0 right-0 border-b-[0.2vw] text-[#f3f4f8]'></div>


            {/* Second Part */}
            <div className='flex justify-between py-[1vw] items-center'>
                <div>
                    <p className='text-[4vw] text-[#213f8b] text-[inter]'>Glocy</p>
                </div>
                <div className='flex items-center p-[1vw] justify-between w-[13vw] h-[4vw] border-[#e8e8eb] border-[0.1vw] rounded-[0.4vw]'>
                    <div className='flex flex-col'>
                        <p className='text-[0.9vw] text-[#9da0a5]'>Your location</p>
                        <p className='text-[1.2vw] text-[#213f8b]'>Select a location</p>
                    </div>
                    <i className="text-[1vw] ri-arrow-down-s-line"></i>
                </div>
                <div className='flex items-center justify-between p-[1vw] w-[40vw] h-[4vw] bg-[#f3f4f8] rounded-[0.4vw]'>
                    <input className='h-[60%] border-none bg-transparent outline-none text-[#7e8c9d]' type="text" placeholder='Search for products...' />
                    <i className="text-[2vw] text-[#6b6a6f] ri-search-line"></i>
                </div>
                <div className='flex gap-2'>
                    <div className='h-[3vw] w-[3vw] border-[0.1vw] border-[#e8e8eb] rounded-[50%] flex justify-center items-center'>
                        <i className="text-[1.5vw] ri-user-line"></i>
                    </div>
                    <div className='h-[3vw] w-[3vw] border-[0.1vw] border-[#e8e8eb] rounded-[50%] flex justify-center items-center bg-[#ffeee5]'>
                        <i className="text-[1.5vw] text-[#ea2a0f] ri-shopping-cart-line"></i>
                    </div>

                </div>
            </div>

            {/* Third Part */}
            <div className='flex items-center gap-[10vw] pb-[1vw]'>
                <button className='h-[3.5vw] w-[14vw] bg-[#2cbef8] flex items-center justify-between p-[1vw] rounded-3xl cursor-pointer'>
                    <div className='flex gap-3 items-center'>
                        <i className="text-white text-[1vw] ri-menu-line"></i>
                        <p className='text-white text-[1vw]'>All Category</p>
                    </div>
                    <i className="text-[1.5vw] text-white  ri-arrow-down-s-line"></i>
                </button>
                <div className=''>
                    <ol className='flex gap-3'>
                        <Link to="/">
                            <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Home</li>
                        </Link>
                        <Link to='/meatAndSeafood'>
                            <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Meat & Seafood</li>
                        </Link>
                        <Link to="/breadsBakery">
                        <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Bekery</li>
                        </Link>
                        <Link to="/beverages">
                        <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Beverages</li>
                        </Link>
                        <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Blog</li>
                        <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Contact</li>
                    </ol>

                </div>
            </div>
            <div className='absolute left-0 right-0 border-b-[0.2vw] text-[#f3f4f8]'></div>


        </div>
    )
}
