import React, { useState,useEffect } from 'react'

export default function PersonalInfo() {

    // USE STATES

    const [userName,setUserName] = useState('')
    const [userEmail,setEmail] = useState('')
    const [userPhoneNo,setPhoneNo] = useState('')



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


    return (
        <div className='w-[100%] px-[4vw]'>
            <div>
                <h1 className='text-[1.5vw] font-semibold'>Personal Information</h1>
                <p className='text-[1vw]'>Manage your personal information, including phone number and email address where you can be contacted</p>
            </div>
            <div className='flex flex-wrap gap-6 items-center justify-evenly p-4 mt-[3vw]'>
                <div className='w-[20vw] h-[8vw] bg-white rounded-lg flex justify-between items-start p-[2vw]'>
                    <div className='w-[90%] flex flex-col pr-[2vw]'>
                        <h1 className='text-[1.1vw] font-bold'>Name</h1>
                        <p className='text-[1vw]'>{userName}</p>
                    </div>
                    < i className="w-[10%] text-[1.7vw] text-[#2cbdf9] ri-user-3-line"></i>
                </div>
                <div className='w-[20vw] h-[8vw] bg-white rounded-lg flex justify-between items-start p-[2vw]'>
                    <div className='w-[90%] flex flex-col break-words pr-[2vw]'>
                        <h1 className='text-[1.1vw] font-bold'>Email</h1>
                        <p className='text-[1vw] word-wrap'>{userEmail}</p>
                    </div>
                    < i className="w-[10%] text-[1.7vw] text-[#2cbdf9] ri-mail-send-fill"></i>
                </div>
                <div className='w-[20vw] h-[8vw] bg-white rounded-lg flex justify-between items-start p-[2vw]'>
                    <div className='w-[90%] flex flex-col pr-[2vw]'>
                        <h1 className='text-[1.1vw] font-bold'>Phone No</h1>
                        <p className='text-[1vw]'>{userPhoneNo}</p>
                    </div>
                    < i className="w-[10%] text-[1.7vw] text-[#2cbdf9] ri-phone-line"></i>
                </div>
                <div className='w-[20vw] h-[8vw] bg-white rounded-lg flex justify-between items-start p-[2vw]'>
                    <div className='w-[90%] flex flex-col pr-[2vw]'>
                        <h1 className='text-[1.1vw] font-bold'>Language</h1>
                        <p className='text-[1vw]'>English (UK) - English</p>
                    </div>
                    < i className="w-[10%] text-[1.7vw] text-[#2cbdf9] ri-global-line"></i>
                </div>
            </div>
        </div>
    )
}
