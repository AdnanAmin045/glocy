import React from 'react'
import { Link } from 'react-router-dom'

export default function AddtoCart() {
    return (
        // <div className='flex flex-col justify-center items-center px-[10vw] py-[10vw] gap-8'>
        //     <div className='h-[10vw] w-[10vw] rounded-[50%] bg-[#ebecf0] flex justify-center items-end'>
        //         {/* <img className='w-[4vw]' src={shopping_bag} alt="shopping_bag" /> */}
        //         <i className="text-[red] text-[5vw] ri-shopping-bag-3-fill"></i>
        //     </div>
        //     <h1 className='text-[red] text-[1.2vw] font-semibold'>Your cart is currently empty.</h1>
        //     <Link to="/home" className="h-[3vw] w-[10vw] bg-[#213b95] text-white text-[0.9vw] rounded-xl flex justify-center items-center">
        //         Return to shop
        //     </Link>
        // </div>
        <div className='px-[10vw] py-[5vw] flex w-full justify-between'>
            <div className='w-[65%]'>
                <table className="min-w-full border-collapse  mt-5">
                    <thead>
                        <tr className="border-b border-gray-200 h-[30%]">
                            <th className="w-[10%] p-2"></th>
                            <th className="w-[30%] text-[0.8vw] text-[#b6bdcb] p-2">Product Name</th>
                            <th className="w-[10%] text-[0.8vw] text-[#b6bdcb] p-2">Price</th>
                            <th className="w-[15%] text-[0.8vw] text-[#b6bdcb] p-2">Quantity</th>
                            <th className="w-[10%] text-[0.8vw] text-[#b6bdcb] p-2">Sub Total</th>
                            <th className="w-[5%] p-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-gray-200 h-[5rem]">
                            <td className="p-2">
                                <div className="flex justify-center items-center h-full">
                                    <img className="w-[6vw] object-contain" src="" alt="product_img" />
                                </div>
                            </td>
                            <td className="text-[0.9vw] p-2">Hello My product</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='w-[30%] bg-slate-300'>
                2
            </div>
        </div>
    )
}
