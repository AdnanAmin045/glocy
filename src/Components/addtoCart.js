import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddtoCart() {
    const [addtoCart, setAddtoCart] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    // Function to get data for Add to Cart
    const getData = async () => {
        try {
            const response = await axios.get("/getAddtoCart");
            setAddtoCart(response.data); // Update the state with the fetched data
            console.log(response.data); // Log the response data for debugging
        } catch (error) {
            console.error("Error fetching add to cart data:", error);
        }
    };

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
                                    <th className="w-[10%] text-[0.8vw] text-[#b6bdcb] p-2 text-left">Sub Total</th>
                                    <th className="w-[5%] p-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {addtoCart.map((items, index) => (
                                    <tr key={index} className="border-b border-gray-200 h-[5rem]">
                                        <td className="p-2">
                                            <div className="flex justify-center items-center h-full">
                                                <img className="w-[6vw] object-contain" src={items.productDetails.img} alt="product_img" />
                                            </div>
                                        </td>
                                        <td className="text-[0.9vw] p-2">{items.productDetails.title}</td>
                                        <td className="text-[0.9vw] p-2">${items.productDetails.currentPrice}</td>
                                        <td className="text-[0.9vw] p-2">
                                            <div className='flex items-center gap-5'>
                                                <div className='h-[2vw] w-[2vw] bg-[#ededf7] rounded-[50%] flex justify-center items-center'>
                                                    <i className="text-[1vw] ri-subtract-line"></i>
                                                </div>
                                                <p>{items.quantity}</p>
                                                <div className='h-[2vw] w-[2vw] bg-[#ededf7] rounded-[50%] flex justify-center items-center'>
                                                    <i className="text-[1vw] ri-add-line"></i>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="text-[0.9vw] p-2">${items.productDetails.currentPrice * items.quantity}</td>
                                        <td className="text-[0.9vw] p-2"><i className="text-[1vw] font-bold ri-close-line"></i></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
