import React, { useEffect, useState } from 'react'
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

    const location = useLocation()

    const [inValidPopUp,setInvalidPopUp] = useState('hidden')

    /*  **********************************

                   FUNCTIONS 

        **********************************           
   
   */
    useEffect(() => {
        if (location.state?.showToaster) {
            toast.success("Sign Up successfully", {
                duration: 2000
            });
        }
    }, [location.state])



    const emptyBoxes = (value) =>{    
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
        console.log(response)
        if (response && !(emptyBoxes(formValuesLogIn))) {
            console.log("Successfully LogIn")
        }
        else{
            inValidPopUp === "hidden" ? setInvalidPopUp('inline-block') : setInvalidPopUp('hidden')
        }
    }

    const checkValues = async (values) => {
        const data = {
            userEmail: values.email,
            userPassword: values.password
        };
        console.log('Request Data:', data);
        try {
            const response = await axios.get("/", {
                params: {
                    userEmail: data.userEmail,
                    userPassword: data.userPassword
                }
            });
            console.log('Response:', response);  // Log the full response
            return response.status === 200;
        } catch (err) {
            console.error('Error:', err); // Log the error
            return false;
        }
    };
    
    



    return (
        <>
            <Toaster richColors position='top-right' />
            <div className='flex justify-center h-[100%] w-[100%] items-center'>
                <div className='w-[30vw] h-[36vw] shadow-custom flex flex-col justify-center items-center mt-[1vw] p-[3vw]'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-[3vw]' src={cart} alt="cart" />
                        <p className='text-[2.5vw] text-[#213f8b] font-playpen font-[500]'>QuickCart</p>
                    </div>
                    <h1 className='text-[2vw] pt-[1vw] font-bold'>LogIn</h1>
                    <div className={`${inValidPopUp} p-[0.6vw] mt-[2vw] w-[100%] bg-[#ffbbba] text-[#ea2a0f] rounded-sm text-[1vw] font-semibold`}>
                        Please enter valid Information!
                    </div>
                    <form action="" className='flex flex-col w-full gap-5 py-[2vw] justify-center items-center'>
                        <div className="relative w-[100%]">
                            <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                            <input
                                className='outline-none w-[100%] font-[Poppins] text-[1.1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9]'
                                type="email"
                                name='email'
                                required
                                placeholder='Enter Your Email'
                                value={formValuesLogIn.email}
                                onChange={handleChange}
                            />
                        </div>


                        <div className="relative w-[100%]">
                            <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                            <input
                                className='outline-none w-[100%] font-[Poppins] text-[1.1vw] h-[3vw] rounded-md px-12 p-4 border-[2px] border-[#e0e5e9]'
                                type={passwordStatus}
                                name='password'
                                required
                                placeholder='Enter Your Password'
                                value={formValuesLogIn.password}
                                onChange={handleChange}
                            />
                            <i className="fa-solid fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] cursor-pointer" onClick={showPassword}></i>
                        </div>
                        {/* <div className='flex items-center gap-2 self-start ml-2'>
                            <input type="checkbox" />
                            <h1 className='text-[0.9vw]'>Remember me</h1>
                        </div> */}
                        <Link to="/home" className='w-[100%]'><button className='w-[100%] h-[3vw] rounded-md text-[1.4vw] bg-[#2cbef9] text-white hover:shadow-2xl transition-all duration-500' onClick={submitData}>LogIn</button></Link>
                        <p>Don't have account? <Link to="/signUp"><span className='text-[1vw] text-[#2cbef9] font-semibold'>SignUp</span></Link></p>
                    </form>
                </div>
            </div>
        </>
    )
}
