import React,{useState} from 'react'
import cart from '../Resources/cart.png'
import { Link } from 'react-router-dom'

export default function LogIn() {


    const [passwordStatus,setPasswordStatus] = useState("password")
    const showPassword = () =>{
        passwordStatus === "password" ? setPasswordStatus("text") : setPasswordStatus("password");
    }


    return (
        <div className='flex justify-center h-[100%] w-[100%]'>
            <div className='w-[30vw] h-[44vw] shadow-custom flex flex-col justify-center items-center mt-[1vw] p-[3vw]'>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-[3vw]' src={cart} alt="cart" />
                    <p className='text-[2.5vw] text-[#213f8b] font-playpen font-[500]'>QuickCart</p>
                </div>
                <h1 className='text-[2vw] pt-[1vw] font-bold'>LogIn</h1>
                <form action="" className='flex flex-col w-full gap-5 py-[2vw] justify-center items-center'>
                    <div className="relative w-[100%]">
                        <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                        <input
                            className='outline-none w-[100%] font-[Poppins] text-[1.1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9]'
                            type="email"
                            name='userEmail'
                            required
                            placeholder='Enter Your Email'
                        />
                    </div>


                    <div className="relative w-[100%]">
                        <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                        <input
                            className='outline-none w-[100%] font-[Poppins] text-[1.1vw] h-[3vw] rounded-md px-12 p-4 border-[2px] border-[#e0e5e9]'
                            type={passwordStatus}
                            name='userPassword'
                            required
                            placeholder='Enter Your Password'
                        />
                         <i className="fa-solid fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] cursor-pointer" onClick={showPassword}></i>
                    </div>
                    <div className='flex items-center gap-2 self-start ml-2'>
                        <input type="checkbox" />
                        <h1 className='text-[0.9vw]'>Remember me</h1>
                    </div>
                    <Link to ="/home" className='w-[100%]'><button className='w-[100%] h-[3vw] rounded-md text-[1.4vw] bg-[#2cbef9] text-white hover:shadow-2xl transition-all duration-500'>LogIn</button></Link>
                    <p>Don't have account? <Link to ="/signUp"><span className='text-[1vw] text-[#2cbef9] font-semibold'>SignUp</span></Link></p>

                </form>
            </div>
        </div>
    )
}
