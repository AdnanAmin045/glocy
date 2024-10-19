import React, { useEffect, useState } from 'react'
import cart from '../Resources/cart.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Toaster, toast } from 'sonner';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {


    /*    **********************************

                     USE STATES 

          **********************************
     
     */


    const initialValues = { userName: "", userEmail: "", userPassword: "", contactNo: "", confirmPassword: "" }
    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()





    const [passwordStatus, setPasswordStatus] = useState("password")
    const [countries, setCountries] = useState([])
    const [countryCodeStatus, setCountryCodeStatus] = useState(false)

    const [countryCodeArrow, setCountryCodeArrow] = useState("ri-arrow-down-s-line")
    const [countryInput, setCountryInput] = useState("")





    /*    **********************************

                    Functions 

         **********************************
    
    */

    const submitData = async (e) => {
        e.preventDefault();
        const errors = await validateValues(formValues);
        setErrors(errors);
        if (Object.keys(errors).length === 0) {
            sentSignUpData(formValues);
            toast.success("Sign Up successfully",{
                duration: 3000});
            setFormValues(initialValues);
            setCountryInput("");
            navigate("/",{state:{showToaster:true}})
        }

    }



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }




    const validateValues = async (values) => {
        const errors = {};
        const statusValue = await checkExistingEmail(values.userEmail);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!values.userName) {
            errors.name = "Enter userName";
        }
        if (!values.userEmail) {
            errors.email = "Enter email"
        }
        else if (!emailRegex.test(values.userEmail)) {
            errors.email = "Enter valid email"
        }
        else if(statusValue){
            errors.email ="Email already exist"
        }
        if (!values.userPassword) {
            errors.password = "Enter Password"
        } else if (values.userPassword.length < 8) {
            errors.password = "Password should be upto 8 characters"
        }
        if (!countryInput) {
            errors.code = "Enter Code"
        }
        if (!values.contactNo) {
            errors.contactNo = "Enter Contact No"
        }
        if (!values.confirmPassword || values.confirmPassword !== values.userPassword) {
            errors.confirmPassword = "Password should be same"
        }
        return errors;
    }
    const showPassword = () => {
        passwordStatus === "password" ? setPasswordStatus("text") : setPasswordStatus("password");
    }
    const showCountryCodeDialogue = () => {
        countryCodeStatus === false ? setCountryCodeStatus(true) : setCountryCodeStatus(false)
        countryCodeArrow === "ri-arrow-down-s-line" ? setCountryCodeArrow("ri-arrow-up-s-line") : setCountryCodeArrow("ri-arrow-down-s-line")
    }

    const handleCountrySelect = (code) => {
        if (countryInput === "code") {
            setCountryInput('');
        } else {
            setCountryInput(code);
        }
        setCountryCodeStatus(false);
    };



    /*    **********************************

                    API 

         **********************************           
    
    */

    useEffect(() => {
        const loadCountryData = async () => {
            try {
                const response = await axios.get('/signUp');
                setCountries(response.data);
            } catch (error) {
                console.error("Error fetching countries:", error.message);
            }
        };

        loadCountryData();
    }, []);


    const sentSignUpData = async (values) => {
        const newUser = {
            name: values.userName,
            email: values.userEmail,
            password: values.userPassword,
            countryCode: countryInput,
            contactNo: values.contactNo
        };
        await axios.post("/signUp", newUser);
    };


    const checkExistingEmail = async (emailData)=>{
        try{
            const response = await axios.get(`/signUp?email=${emailData}`)
            return response.status === 200;
        }
        catch(error){
            return false;
        }
    }





    return (
        <>
            <Toaster richColors position='top-right' />
            <div className='flex justify-center h-[100%] w-[100%]'>
                <div className='w-[30vw] h-[44vw] shadow-custom flex flex-col justify-center items-center mt-[1vw] p-[3vw]'>
                    <div className='flex justify-center items-center gap-2'>
                        <img className='w-[3vw]' src={cart} alt="cart" />
                        <p className='text-[2.5vw] text-[#213f8b] font-playpen font-[500]'>QuickCart</p>
                    </div>
                    <h1 className='text-[2vw] pt-[1vw] font-bold'>SignUp</h1>
                    <form action="" className='flex flex-col w-full gap-5 py-[2vw] justify-center items-center'>
                        <div className="w-[100%]">
                            <div className='w-full relative'>
                                <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none group-focus:text-[#2cbef9]"></i>
                                <input
                                    className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9]'
                                    type="text"
                                    name='userName'
                                    required
                                    placeholder='Enter Your Name'
                                    onChange={handleChange}
                                    value={formValues.userName}
                                />
                            </div>
                            <div className='text-[0.8vw] text-[#ea2a0f] pl-2' >{errors.name}</div>
                        </div>



                        <div className="w-[100%]">
                            <div className='w-full relative'>
                                <i className="fa-solid fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                                <input
                                    className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9] '
                                    type="email"
                                    name='userEmail'
                                    required
                                    placeholder='abc@gmail.com'
                                    onChange={handleChange}
                                    value={formValues.userEmail}
                                />
                            </div>
                            <div className='text-[0.8vw] text-[#ea2a0f] pl-2' >{errors.email}</div>
                        </div>



                        <div className="w-[100%]">
                            <div className='relative w-full'>

                                <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                                <input
                                    className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md px-12 p-4 border-[2px] border-[#e0e5e9] '
                                    type={passwordStatus}
                                    name='userPassword'
                                    required
                                    placeholder='Enter Your Password'
                                    onChange={handleChange}
                                    value={formValues.userPassword}
                                />
                                <i className="fa-solid fa-eye absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] cursor-pointer" onClick={showPassword}></i>
                            </div>
                            <div className='text-[0.8vw] text-[#ea2a0f] pl-2' >{errors.password}</div>
                        </div>


                        <div className='flex justify-between w-full'>
                            <div className='w-[30%]'>
                                <div className="relative w-full h-[3vw] rounded-md border-[2px] border-[#e0e5e9] cursor-pointer flex justify-between items-center text-center">
                                    <div onClick={showCountryCodeDialogue} className='w-full h-full p-4  flex items-center'>
                                        <div className='outline-none text-[1vw] text-black cursor-pointer' placeholder='Country Code' name="countryCode">{countryInput}</div>
                                        <i className={`${countryCodeArrow} absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none`}></i>
                                    </div>
                                    {countryCodeStatus && (
                                        <div className='absolute w-[19vw] top-[3vw] left-0 h-[10vw] z-10 overflow-y-auto scrollbar-hide shadow-sm rounded-sm bg-white'>
                                            {countries.map((data) => (
                                                <div key={data.code} className='flex items-center h-[3vw] w-[full] p-[0.9vw] gap-3  hover:bg-white hover:shadow-2xl transition-all duration-500 rounded-md' onClick={() => handleCountrySelect(data.code)}>
                                                    <img className='w-[2vw]' src={data.flag} alt="flags" />
                                                    <h1 className='text-[0.8vw]'>{data.name}</h1>
                                                    <h1 className='text-[0.8vw]'>{data.code}</h1>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                </div>
                                <div className='text-[0.8vw] text-[#ea2a0f] pl-2' >{errors.code}</div>
                            </div>


                            <div className="w-[65%]">
                                <div className='relative w-full'>
                                    <i className="fa-solid fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                                    <input
                                        className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9] '
                                        type="text"
                                        name='contactNo'
                                        required
                                        placeholder='3265145770'
                                        onChange={handleChange}
                                        value={formValues.contactNo}
                                    />
                                </div>
                                <div className='text-[0.8vw] text-[#ea2a0f] pl-2' >{errors.contactNo}</div>
                            </div>


                        </div>

                        <div className="w-[100%]">
                            <div className='relative w-full'>
                                <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-[1.1vw] pointer-events-none"></i>
                                <input
                                    className='outline-none w-[100%] text-[1vw] h-[3vw] rounded-md pl-12 p-4 border-[2px] border-[#e0e5e9] '
                                    type="password"
                                    name='confirmPassword'
                                    required
                                    placeholder='Confirm Password'
                                    onChange={handleChange}
                                    value={formValues.confirmPassword}
                                />
                            </div>
                            <div className='text-[0.8vw] text-[#ea2a0f] pl-2' >{errors.confirmPassword}</div>
                        </div>


                        <button className='w-[100%] h-[3vw] rounded-md text-[1.4vw] bg-[#2cbef9] text-white hover:shadow-2xl transition-all duration-500' onClick={submitData}>SignUp</button>
                        <p>Already have an account? <Link to="/"><span className='text-[1vw] text-[#2cbef9] font-semibold'>LogIn</span></Link></p>

                    </form>
                </div>
            </div>
        </>
    )
}
