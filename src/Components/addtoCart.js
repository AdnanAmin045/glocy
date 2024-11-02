import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddtoCart() {
    const [addtoCart, setAddtoCart] = useState([]);
    const [subtotal, setSubtotal] = useState(0)
    const [shippingPrice, setShippingPrice] = useState(5)
    const [userIdState,setUserIdState] = useState()

    useEffect(() => {
        const userId = localStorage.getItem("userID")
        setUserIdState(userId)
        getData(userId);
        getSubtotal(userId);
    }, []);

    // Function to get data for Add to Cart
    const getData = async (userId) => {
        try {
            const response = await axios.post("/getAddtoCart",{userId:userId});
            setAddtoCart(response.data);
        } catch (error) {
            console.error("Error fetching add to cart data:", error);
        }
    };


    //Function to Delete from the Add to Cart

    const deleteData = async (id) => {
        try {
            const response = await axios.post("/deleteAddtoCart", { productId: id,userId:userIdState })
            if (response.status === 200) {
                getData(userIdState);
            }
        } catch (err) {
            console.error("Error fetching add to cart data:", err);
        }
    }

    // Update the Add to Cart Quantity

    const upadateAddtoCart = async (id, quantity, flag) => {
        if (quantity === 1 && flag === 0) {
            return;
        }
        else {
            const response = await axios.post("/updateAddtoCart", { userId:userIdState,productId: id, quantity: quantity, flag: flag })
            if (response.status === 200) {
                getData(userIdState);
                getSubtotal(userIdState);
            }
        }
    }
    // Get subtotal for Cart 

    const getSubtotal = async (userId) => {
        try {
            const response = await axios.post("/getSubtotal",{userId:userId})
            setSubtotal(response.data)
        }
        catch (err) {
            console.log("Error message: ", err)
        }

    }

    // Remove All from the Cart

    const removeAllfromCart = async ()=>{
        try{
            const res = await axios.post("/removeAllfromCart",{userId:userIdState})
            if(res.status === 200){
                getData(userIdState);
            }
        }
        catch(err){
            console.log("Error message: ",err)
        }
    }

    return (
        <div>
            {!addtoCart || addtoCart.length === 0 ? (
                <div className='flex flex-col justify-center items-center px-[10vw] py-[10vw] gap-8'>
                    <div className='h-[10vw] w-[10vw] rounded-[50%] bg-[#ebecf0] flex justify-center items-end'>
                        <i className="text-[red] text-[5vw] ri-shopping-bag-3-fill"></i>
                    </div>
                    <h1 className='text-[red] text-[1vw] font-semibold'>Your cart is currently empty.</h1>
                    <Link to="/home" className="h-[3vw] w-[10vw] bg-[#213b95] text-white text-[0.9vw] rounded-3xl flex justify-center items-center">
                        Return to shop
                    </Link>
                </div>
            ) : (
                <div className='px-[10vw] py-[5vw] flex w-full justify-between'>
                    <div className='w-[65%]'>
                        <table className="min-w-full border-collapse mt-5">
                            <thead>
                                <tr className="border-b border-gray-200 h-[30%]">
                                    <th className="w-[10%] p-2"></th>
                                    <th className="w-[30%] text-[0.8vw] text-[#b6bdcb] p-2 text-left">Product Name</th>
                                    <th className="w-[10%] text-[0.8vw] text-[#b6bdcb] p-2 text-left">Price</th>
                                    <th className="w-[15%] text-[0.8vw] text-[#b6bdcb] p-2 text-left">Quantity</th>
                                    <th className="w-[10%] text-[0.8vw] text-[#b6bdcb] p-2 text-left">Subtotal</th>
                                    <th className="w-[5%] p-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {addtoCart.map((items, index) => (
                                    <tr key={index} className="border-b border-gray-200 h-[5vw]">
                                        <td className="p-2">
                                            <div className="flex justify-center items-center h-full">
                                                <img className="w-[6vw] object-contain" src={items.productDetails.img} alt="product_img" />
                                            </div>
                                        </td>
                                        <td className="text-[0.9vw] p-2">{items.productDetails.title}</td>
                                        <td className="text-[0.9vw] p-2">${items.productDetails.currentPrice.toFixed(2)}</td>
                                        <td className="text-[0.9vw] p-2">
                                            <div className='flex items-center gap-5'>
                                                <div className='h-[2vw] w-[2vw] bg-[#ededf7] rounded-[50%] flex justify-center items-center cursor-pointer' onClick={() => upadateAddtoCart(items.productId, items.quantity, 0)}>
                                                    <i className="text-[1vw] ri-subtract-line"></i>
                                                </div>
                                                <p>{items.quantity}</p>
                                                <div className='h-[2vw] w-[2vw] bg-[#ededf7] rounded-[50%] flex justify-center items-center cursor-pointer' onClick={() => upadateAddtoCart(items.productId, items.quantity, 1)}>
                                                    <i className="text-[1vw] ri-add-line"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-[0.9vw] p-2">${(items.productDetails.currentPrice * items.quantity).toFixed(2)}</td>
                                        <td className="text-[0.9vw] p-2 cursor-pointer" onClick={() => deleteData(items.productId)}><i className="text-[1vw] font-bold ri-close-line"></i></td>
                                    </tr>
                                ))}
                                <tr className="h-[5vw]">
                                    <td colSpan="6" className="p-2">
                                        <div className="flex justify-end items-center h-full">
                                            <button className="h-[2.5vw] w-[7vw] bg-[#213b95] text-white text-[0.8vw] rounded-sm" onClick={()=>removeAllfromCart()}>
                                                Remove All
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='w-[30%] border border-slate-200 p-[1vw] rounded-lg'>
                        <h1 className='text-[1.1vw] font-semibold'>Cart totals</h1>
                        <table className="min-w-full border-collapse">
                            <tbody>
                                <tr className='border-t border-slate-200'>
                                    <div className='flex justify-between items-center h-[5vw]'>
                                        <h1 className='text-[0.9vw]'>Subtotal</h1>
                                        <p className='text-[1vw]'>${subtotal.toFixed(2)}</p>
                                    </div>
                                </tr>
                                <tr className='border-t border-slate-200'>
                                    <div className='flex justify-between items-center h-[8vw]'>
                                        <h1 className='text-[0.9vw]'>Shipping</h1>
                                        <div className='flex flex-col'>
                                            <div className='flex items-center gap-2 justify-end'>
                                                <h1 className='text-[0.9vw]'>Flat rate: <span className='text-red-600'>$5.00</span></h1>
                                                <input type="radio" id="flateRate" name="options" className="cursor-pointer" checked={shippingPrice === 5} onChange={() => setShippingPrice(5)}></input>
                                            </div>
                                            <div className='flex items-center gap-2 justify-end'>
                                                <h1 className='text-[0.9vw]'>Local pickup</h1>
                                                <input type="radio" id="localPick" name="options" className="cursor-pointer" onChange={() => setShippingPrice(0)} checked={shippingPrice === 0}></input>
                                            </div>
                                            <h1 className='text-[0.9vw] mt-[1vw] text-[#6ec4ec] hover:underline hover:text-[#567cbd] cursor-pointer justify-end'>Change Address</h1>
                                        </div>
                                    </div>
                                </tr>
                                <tr className='border-t border-slate-200 my-[3vw]'>
                                    <div className='flex justify-between items-center h-[5vw]'>
                                        <h1 className='text-[0.9vw]'>Total</h1>
                                        <p className='text-[1.2vw] font-semibold'>${(subtotal + shippingPrice).toFixed(2)}</p>
                                    </div>
                                </tr>
                                <tr className='border-t border-slate-200'>
                                    <div className='flex justify-center items-center h-[5vw]'>
                                        <button className='h-[3vw] text-[0.9vw] w-[80%] bg-[#ed174a] text-white rounded-md'>
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            )}
        </div>
    );
}
