import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import meat from '../Resources/steak-black.png'
import meatColor from '../Resources/steak-color.png'


import bakery from '../Resources/scrambled-eggs-black.png'
import bakeryColor from '../Resources/scrambled-eggs-color.png'

import coffee from '../Resources/coffee-cup-black.png'
import coffeeColor from '../Resources/coffee-cup-color.png'

import protect from '../Resources/protection.png'
import empty_cart from "../Resources/empty_cart.png"

import cart from '../Resources/cart.png'
import { useNavigate } from 'react-router-dom'



export default function Navbar() {

    const [meat_img, setMeat_img] = useState(meat)
    const [bakery_img, setBakery_img] = useState(bakery)
    const [coffee_img, setCoffee_img] = useState(coffee)


    const [showPopUpAccount, setPopUpAccount] = useState()
    const [showPopUpCart, setPopUpCart] = useState()
    const [showButton, setShowButton] = useState(false);




    const [userName, setUserName] = useState('')
    const [userEmail, setEmail] = useState('')
    const [userPhoneNo, setPhoneNo] = useState('')

    const navigate = useNavigate()


    //  GET DATA FROM THE PAYLOAD

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const tokenParts = token.split(".");
            const base64Payload = tokenParts[1];
            const payload = JSON.parse(atob(base64Payload));

            setUserName(payload.data.name);
            setEmail(payload.data.email);
            setPhoneNo(`${payload.data.countryCode} ${payload.data.contactNo}`);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);


        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const logOutAccount = () => {
        localStorage.removeItem("token")
        navigate("/")
    }


    return (
        <div className='px-[10vw] pt-[0.5vw]'>
            {/* First Part */}

            <div className='flex justify-between items-center py-3'>
                <ol className='flex gap-7 text-[0.9vw] cursor-pointer'>
                    <Link to="/about" className='hover:text-[#2cbef9]'><li>About</li></Link>
                    <Link to="/accountMenuBar" className='hover:text-[#2cbef9]'><li>My Account</li></Link>
                    <Link to="/wishlist" className='hover:text-[#2cbef9]'><li>Wishlist</li></Link>
                </ol>
                <div className='flex gap-7 items-center'>

                    <div className='flex items-center text-[0.9vw]'>
                        <img className='w-[2vw]' src={protect} alt="protection" />
                        <p>100% Secure delivery without contacting the courier</p>
                    </div>
                    <div class="border-l-2 h-5 text-[#f3f4f8]"></div>
                    <div className='flex text-[0.9vw]'>
                        <p>Need help? Call Us: <span className='text-[#62afda] hover:underline font-bold cursor-pointer'>+923265145770</span>
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
                <div className='flex flex-col justify-center items-center gap-0'>
                    <div className='flex items-center justify-center'> {/* Changed justify-start to justify-center */}
                        <img className='w-[3vw]' src={cart} alt="cart" />
                        <p className='text-[2.5vw] text-[#213f8b] font-playpen font-[500]'>QuickCart</p>
                    </div>
                    <p className='text-[0.879vw] text-gray-300 text-center leading-3'>Online Grocery Shopping Center</p>
                </div>

                {/* <div className='flex items-center p-[1vw] justify-between w-[13vw] h-[4vw] border-[#e8e8eb] border-[0.1vw] rounded-[0.4vw]'>
                    <div className='flex flex-col'>
                        <p className='text-[0.9vw] text-[#9da0a5]'>Your location</p>
                        <p className='text-[1.2vw] text-[#213f8b]'>Select a location</p>
                    </div>
                    <i className="text-[1vw] ri-arrow-down-s-line"></i>
                </div> */}
                <div className='flex items-center justify-between px-[1vw] w-[40vw] h-[4vw] bg-[#f3f4f8] rounded-[0.4vw]'>
                    <input className='h-[60%] w-[100%] border-none bg-transparent outline-none text-[#7e8c9d]' type="text" placeholder='Search for products...' />
                    <i className="pl-[1vw] text-[2vw] text-[#6b6a6f] ri-search-line"></i>
                </div>
                <div className='flex gap-2 relative'>
                    <div className='h-[3vw] w-[3vw] border-[0.1vw] border-[#e8e8eb] rounded-[50%] flex justify-center items-center' onMouseEnter={() => setPopUpAccount(true)} onMouseLeave={() => setPopUpAccount(false)}>
                        <i className="text-[1.5vw] ri-user-line"></i>
                    </div>
                    {showPopUpAccount && (<div className='absolute top-full left-[-5vw] w-[18vw] h-[18vw] bg-white rounded-xl z-10 shadow-xl' onMouseEnter={() => setPopUpAccount(true)} onMouseLeave={() => setPopUpAccount(false)}>
                        <div className='flex justify-center flex-col items-start p-3'>
                            <div className='flex self-center justify-center items-center gap-4 flex-col'>
                                <div className='w-[5vw] h-[5vw] rounded-[50%] flex justify-center items-center bg-[#e8e9ed]'>
                                    <i className="text-[1.7vw] ri-user-line"></i>
                                </div>
                                <h1 className='text-[1vw] uppercase font-bold'>{userName}</h1>
                            </div>
                            <div className='flex items-center gap-4 mt-4'>
                                < i className="text-[1vw] text-[#2cbdf9] ri-mail-send-fill"></i>
                                <h1 className='text-[1vw]'>{userEmail}</h1>
                            </div>
                            <div className='flex items-center gap-4'>
                                < i className="text-[1vw] text-[#2cbdf9] ri-phone-line"></i>
                                <h1 className='text-[1vw]'>{userPhoneNo}</h1>
                            </div>
                            <button className='self-center text-[0.9vw] mt-4 h-[2.5vw] w-[8.5vw] rounded-md bg-red-600 text-white' onClick={logOutAccount}>LogOut</button>
                        </div>

                    </div>)}

                    <Link to="/addtoCart">
                        <div onMouseEnter={() => setPopUpCart(true)} onMouseLeave={() => setPopUpCart(false)} className='relative h-[3vw] w-[3vw] border-[0.1vw] border-[#e8e8eb] rounded-[50%]  bg-[#ffeee5] flex justify-center items-center item'>
                            <div className='absolute -top-1 right-0 h-[1vw] w-[1vw] rounded-full bg-[#f24550] flex justify-center items-center text-white text-[0.8vw]'>0</div>
                            <i className="text-[1.5vw] text-[#ea2a0f] ri-shopping-cart-line"></i>
                        </div>
                    </Link>

                    {showPopUpCart && (
                        <div className='absolute top-full flex justify-center items-center left-[-10vw] w-[22vw] h-[15vw] bg-white rounded-xl z-10 shadow-xl' onMouseEnter={() => setPopUpCart(true)} onMouseLeave={() => setPopUpCart(false)}>
                            <div className='flex justify-center flex-col gap-4 items-center p-3'>
                                <img className='w-[3vw]' src={empty_cart} alt="" />
                                <p className='text-[0.9vw]'>No products in the cart.</p>

                            </div>
                        </div>)}

                </div>
            </div>

            {/* Third Part */}
            <div className='flex items-center gap-[10vw] pb-[1vw]'>
                {/* <button className='h-[3.5vw] w-[16vw] bg-[#2cbef8] flex items-center justify-between p-[1vw] rounded-3xl cursor-pointer'>
                    <div className='flex gap-3 items-center'>
                        <i className="text-white text-[1vw] ri-menu-line"></i>
                        <p className='text-white text-[1vw]'>All Category</p>
                    </div>
                    <i className="text-[1.5vw] text-white  ri-arrow-down-s-line"></i>
                </button> */}
                <div className='pl-[23vw]'>
                    <ol className='flex gap-3'>
                        <Link to="/home">
                            <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Home</li>
                        </Link>
                        <Link to='/meatAndSeafood' onMouseEnter={() => { setMeat_img(meatColor) }} onMouseLeave={() => { setMeat_img(meat) }}>
                            <li className='flex items-center gap-2 justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>
                                <img className='w-[1.2vw]' src={meat_img} alt="meat_img" />
                                <h1>Meat & Seafood</h1>
                            </li>
                        </Link>
                        <Link to="/breadsBakery" onMouseEnter={() => { setBakery_img(bakeryColor) }} onMouseLeave={() => { setBakery_img(bakery) }}>
                            <li className='flex items-center justify-center gap-2 h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>
                                <img className='w-[1.2vw]' src={bakery_img} alt="bakery" />
                                <h1>Bakery</h1>
                            </li>
                        </Link>
                        <Link to="/beverages" onMouseEnter={() => { setCoffee_img(coffeeColor) }} onMouseLeave={() => { setCoffee_img(coffee) }}>
                            <li className='flex items-center justify-center gap-2 h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>
                                <img className='w-[1.2vw]' src={coffee_img} alt="bakery" />
                                <h1>Beverages</h1>
                            </li>
                        </Link>
                        <Link to="/blog">
                            <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Blog</li>
                        </Link>
                        <Link to="/contact">
                            <li className='flex items-center justify-center h-[3vw] p-[1.4vw] cursor-pointer hover:bg-[#e7fdff] hover:text-[#2cbef8] rounded-3xl'>Contact</li>
                        </Link>
                    </ol>

                </div>
            </div>
            <div className='absolute left-0 right-0 border-b-[0.2vw] text-[#f3f4f8]'></div>
            {showButton && (
                <button className='z-10 fixed bottom-10 right-10 h-[3.5vw] w-[3.5vw] bg-[#2cbef9] rounded-full flex justify-center items-center' onClick={scrollToTop}>
                    <i className="text-[3vw] text-[white] ri-arrow-drop-up-line"></i>
                </button>
            )}

        </div>
    )
}
