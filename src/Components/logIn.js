import React, { useEffect, useState, useRef } from 'react'
import cart from '../Resources/cart.png'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function LogIn() {


    /*    **********************************

                   USE STATES 

        **********************************           
   
   */

    const initialValues = { email: "", password: "" }

    const [formValuesLogIn, setFormValuesLogIn] = useState(initialValues)

    const navigate = useNavigate();

    const location = useLocation();

    const [inValidPopUp, setInvalidPopUp] = useState('hidden')

    const effectRan = useRef(false);

    /*  **********************************

                   FUNCTIONS 

        **********************************           
   
   */
    useEffect(() => {
        if (location.state?.showToaster && effectRan.current === false) {
            toast.success("Sign Up successfully", {
                duration: 2000
            });
        }
    }, [location.state])



    const emptyBoxes = (value) => {
        return value.email.length === 0 || value.password.length === 0
    }

    const [passwordStatus, setPasswordStatus] = useState("password")
    const showPassword = () => {
        passwordStatus === "password" ? setPasswordStatus("text") : setPasswordStatus("password");
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValuesLogIn({ ...formValuesLogIn, [name]: value })
    }
    const submitData = async (e) => {
        e.preventDefault()
        const response = await checkValues(formValuesLogIn)
        if (response && !(emptyBoxes(formValuesLogIn))) {
            const res = await axios.post("/getUserId", { email: formValuesLogIn.email })
            const userId = res.data.customerId
            localStorage.setItem('userID',userId );
            console.log(userId)
            navigate('/home')
        }
        else {
            if (inValidPopUp === "hidden")
                setInvalidPopUp('inline-block')
        }
    }

    const checkValues = async (values) => {
        try {
            const response = await axios.post("/", values)
            if (response.status === 200) {
                localStorage.setItem("token", response.data.token)
                return true
            }
            else {
                return false
            }
        }
        catch (err) {
            return false
        }
    };





    return (
        <>
            <Toaster richColors position='top-right' />
            <div className='flex justify-center h-[100%] w-[100%] items-center'>
                <div className='sm:w-[30vw] sm:h-[33vw] w-[60vw] h-[80vw] shadow-custom flex flex-col justify-center items-center mt-[1vw] p-[3vw]'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-[8vw] sm:w-[3vw]' src={cart} alt="cart" />
                        <p className='sm:text-[2.5vw] text-[5vw] text-[#213f8b] font-playpen font-[500]'>QuickCart</p>
                    </div>
                    <h1 className='text-[4vw] sm:text-[2vw] pt-[1vw] font-bold'>LogIn</h1>
                    <div className={`${inValidPopUp} flex justify-start items-center p-[2vw] sm:p-[0.6vw] mt-[2vw] w-[100%] bg-[#ffbbba] text-[#ea2a0f] rounded-sm text-[2vw] sm:text-[1vw] font-semibold`}>
                        Please enter valid Information!
                    </div>
                    <form action="" className='flex flex-col w-full gap-2 sm:gap-5 py-[2vw] justify-center items-center'>
                        <div className="relative w-[100%] flex items-center">
                            <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[2vw] sm:text-[1vw] pointer-events-none"></i>
                            <input
                                className='outline-none w-[100%] font-[Poppins] text-[2vw] sm:text-[0.9vw] h-[5vw] sm:h-[2.5vw] sm:rounded-md rounded-sm pl-6 sm:pl-12 p-3 sm:p-4 border-[2px] border-[#e0e5e9] flex items-center'
                                type="email"
                                name='email'
                                required
                                placeholder='Enter Your Email'
                                value={formValuesLogIn.email}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="relative w-[100%] flex items-center">
                            <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[2vw] sm:text-[1vw] pointer-events-none"></i>
                            <input
                                className='outline-none w-[100%] font-[Poppins] text-[2vw] sm:text-[0.9vw] h-[5vw] sm:h-[2.5vw] sm:rounded-md rounded-sm pl-6 sm:pl-12 p-3 sm:p-4 border-[2px] border-[#e0e5e9]'
                                type={passwordStatus}
                                name='password'
                                required
                                placeholder='Enter Your Password'
                                value={formValuesLogIn.password}
                                onChange={handleChange}
                            />
                            <i className="fa-solid fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[2vw] sm:text-[1vw] cursor-pointer" onClick={showPassword}></i>
                        </div>
                        {/* <div className='flex items-center gap-2 self-start ml-2'>
                            <input type="checkbox" />
                            <h1 className='text-[0.9vw]'>Remember me</h1>
                        </div> */}
                        <Link to="/home" className='w-[100%]'><button className='w-[100%] h-[7.5vw] sm:h-[2.5vw] rounded-sm sm:rounded-md  text-[2vw] sm:text-[1.4vw] bg-[#2cbef9] text-white hover:shadow-2xl transition-all duration-500' onClick={submitData}>LogIn</button></Link>
                        <p className='text-[2vw] sm:text-[0.9vw]'>Don't have account? <Link to="/signUp"><span className='text-[2vw] sm:text-[0.9vw] text-[#2cbef9] font-semibold'>SignUp</span></Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
