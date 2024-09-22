import React, { useEffect, useState } from 'react'
import cart from '../Resources/cart.png'
import { Link } from 'react-router-dom'
import axios from 'axios';



export default function SignUp() {

    const [passwordStatus, setPasswordStatus] = useState("password")
    const showPassword = () => {
        passwordStatus === "password" ? setPasswordStatus("text") : setPasswordStatus("password");
    }


    const [countries, setCountries] = useState([])



    /*    **********************************

                     Country API 

          **********************************
     
     */



    const countryAPI = async () => {
        try {
            const response = await axios.get("https://restcountries.com/v3.1/all");
            const countriesInfo = response.data.map((country) => ({
                name: country.name.common,
                code: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
                img: country.flags.png,
            }));

            
            const uniqueCountriesByCode = countriesInfo.filter((country, index, self) =>
                index === self.findIndex((c) => c.name === country.name)
            );

            const sortedCountries = uniqueCountriesByCode.sort((a, b) =>
                a.code.slice(1).localeCompare(b.code.slice(1))
            );

            const removeData = sortedCountries.filter((data) => data.code);

            setCountries(removeData);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    useEffect(() => {
        countryAPI();
    }, []); 



    return (
        <div className='flex justify-center h-[100%] w-[100%]'>
            <div className='w-[30vw] h-[44vw] shadow-custom flex flex-col justify-center items-center mt-[1vw] p-[3vw]'>
                <div className='flex justify-center items-center gap-2'>
                    <img className='w-[3vw]' src={cart} alt="cart" />
                    <p className='text-[2.5vw] text-[#213f8b] font-playpen font-[500]'>QuickCart</p>
                </div>
                <h1 className='text-[2vw] pt-[1vw] font-bold'>SignUp</h1>
                <form action="" className='flex flex-col w-full gap-5 py-[2vw] justify-center items-center'>
                    <div className="relative w-[100%] group">
                        <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none group-focus:text-[#2cbef9]"></i>
                        <input
                            className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9]'
                            type="text"
                            name='userName'
                            required
                            placeholder='Enter Your Name'
                        />
                    </div>



                    <div className="relative w-[100%]">
                        <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                        <input
                            className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9] '
                            type="email"
                            name='userEmail'
                            required
                            placeholder='Enter Your Email'
                        />
                    </div>
                    <div className="relative w-[100%]">
                        <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                        <input
                            className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md px-12 p-4 border-[2px] border-[#e0e5e9] '
                            type={passwordStatus}
                            name='userPassword'
                            required
                            placeholder='Enter Your Password'
                        />
                        <i className="fa-solid fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] cursor-pointer" onClick={showPassword}></i>
                    </div>


                    <div className='flex justify-between items-center w-full'>
                        <div className="relative w-[30%] h-[3vw] rounded-md p-4 border-[2px] border-[#e0e5e9] cursor-pointer flex justify-between items-center text-center">
                            <div onClick={showCountryCodes}>
                                <div className='text-[1vw] text-gray-400'>Code</div>
                                <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                            </div>
                            <div className='absolute w-full top-[3vw] left-0 h-[10vw] z-10 overflow-y-auto scrollbar-hide shadow-sm rounded-sm bg-white'>
                                {countries.map((data) => (
                                    <div key={data.code} className='flex h-[3vw] w-[full] p-[0.9vw] gap-3  hover:bg-white hover:shadow-2xl rounded-md'>
                                        <img className='w-[2vw]' src={data.img} alt="flags" />
                                        <h1 className='text-[0.8vw]'>{data.code}</h1>
                                    </div>
                                ))}
                            </div>

                        </div>


                        <div className="relative w-[65%]">
                            <i className="fa-solid fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                            <input
                                className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9] '
                                type="text"
                                name='contactNo'
                                required
                                placeholder='Enter Contact No'
                            />
                        </div>

                    </div>

                    <div className="relative w-[100%]">
                        <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                        <input
                            className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9] '
                            type="password"
                            name='confirmPassword'
                            required
                            placeholder='Confirm Password'
                        />
                    </div>


                    <button className='w-[100%] h-[3vw] rounded-md text-[1.4vw] bg-[#2cbef9] text-white hover:shadow-2xl transition-all duration-500'>SignUp</button>
                    <p>Already have an account? <Link to="/"><span className='text-[1vw] text-[#2cbef9] font-semibold'>LogIn</span></Link></p>

                </form>
            </div>
        </div>
    )
}
