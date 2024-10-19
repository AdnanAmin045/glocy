import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'

export default function AccountMenuBar() {

  const navigate = useNavigate()
  const [name,setName] = useState()

  const [tokenState, setTokenState] = useState(false)

  // JWT Token

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token")
      if(token){
        const tokenParts = token.split(".")
        const base64Payload = tokenParts[1];
        const payload = JSON.parse(atob(base64Payload))
        setName(payload.data.name)
      }

      try {
        const response = await axios.get("/accountMenuBar", {
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        if (response.status === 200) {
          console.log(response.status)
          setTokenState(true)
        }
        else {
          navigate("/")
        }
      }
      catch {
        navigate("/")
      }
    };
    fetchData();

  }, [navigate])

  const logOutAccount = () =>{
    localStorage.removeItem("token")
    navigate("/")
  }






  return (
    <>
      {tokenState ? (
        <div className='flex w-[100%] justify-between'>
          <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-1 justify-center items-center'>
              <div className='self-center w-[5vw] h-[5vw] rounded-[50%] flex justify-center items-center bg-[#e8e9ed]'>
                <i className="text-[2vw] ri-user-line"></i>
              </div>
              <h1 className='text-[1.3vw] font-bold uppercase'>{name}</h1>
            </div>
            <div className='flex flex-col'>
              <ol className='flex flex-col gap-3'>
                <li>Personal Information</li>
                <li>Billing & Payment</li>
                <li>Orders History</li>
                <li>Gift Cards</li>
              </ol>
              <button className='mt-[4vw] h-10 w-40 rounded-md bg-red-600 text-white' onClick={logOutAccount}>LogOut</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}  
