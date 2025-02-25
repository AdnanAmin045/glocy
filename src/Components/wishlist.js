import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import close from "../Resources/close.png"

export default function Wishlist() {

    const [wishList, setWishList] = useState([])
    const [popUpMessage, setPopUpMessage] = useState(false)
    const [productTitle, setProductTitle] = useState("")
    const [userIdState, setUserIdState] = useState()


    // Get Wishlist Data



    useEffect(() => {
        const userId = localStorage.getItem("userID")
        setUserIdState(userId)
        getData(userId);
    }, []);

    const getData = async (userId) => {
        console.log("UserId: ", userId)
        try {
            const response = await axios.post("http://localhost:5000/wishlist", { userId: userId });
            setWishList(response.data);
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    // Delete from Wishlist 
    const deletefromWishlist = async (id) => {
        try {
            const response = await axios.post("/deleteWishlist", { productId: id, userId: userIdState })
            console.log(response)
            if (response.status === 200) {
                getData(userIdState);
            }
        }
        catch (err) {
            console.log("Error Message: ", err)
        }
    }


    // add to cart product

    const addtoCartProduct = async (id) => {
        try {
            const response = await axios.post("/addtoCart", { productId: id, userId: userIdState })
            if (response.status === 200) {
                console.log("Data has been added")
            }

        }
        catch (err) {
            console.log("Error message: ", err)
        }
    }


    // add all to cart

    const addAllfromWishlist = async () => {
        try {
            const response = await axios.post("/addAllfromWishlist", { userId: userIdState })
            if (response.status === 200) {
                console.log("Data has been added")
            }
        }
        catch (err) {
            console.log("Error message: ", err)
        }
    }


    //remove All from wishlist

    const removeAllfromWishlist = async () => {
        try {
            const res = await axios.post("/removeAllfromWishlist", { userId: userIdState })
            if (res.status === 200) {
                getData(userIdState);
            }
        }
        catch (err) {
            console.log("Error message: ", err)
        }
    }

    return (
        <div className='px-[10vw] py-[5vw]'>
            <h1 className='text-[2.5vw]'>Default Wishlist</h1>
            {!wishList || wishList.length === 0 ? (
                <div className='flex flex-col gap-4 z-10'>
                    <p className='text-[0.9vw]'>Your Wishlist is currently empty.</p>
                    <Link to="/home" className='h-[3vw] w-[10vw] bg-[#263993] text-[1vw] text-white rounded-sm flex justify-center items-center'>
                        Return to shop
                    </Link>
                </div>
            ) : (
                <table className="min-w-full border-collapse border border-gray-300 mt-5">
                    <thead>
                        <tr className="border-b border-gray-300 h-[30%]">
                            <th className="w-[5%] border-r border-gray-300 p-2"></th>
                            <th className="w-[15%] border-r border-gray-300 p-2"></th>
                            <th className="w-[30%] text-[0.9vw] text-[#b6bdcb] border-r border-gray-300 p-2">Product Name</th>
                            <th className="w-[10%] text-[0.9vw] text-[#b6bdcb] border-r border-gray-300 p-2">Unit Price</th>
                            <th className="w-[10%] text-[0.9vw] text-[#b6bdcb] border-r border-gray-300 p-2">Date Added</th>
                            <th className="w-[10%] text-[0.9vw] text-[#b6bdcb] border-r border-gray-300 p-2">Stock Status</th>
                            <th className="w-[10%] p-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishList.map((items) => (
                            <tr className="border-b border-gray-300 h-[5rem]" key={items._id}>
                                <td className="border-r border-gray-300 p-2">
                                    <div className="flex justify-center items-center h-full cursor-pointer" onClick={() => { deletefromWishlist(items.productId); setProductTitle(items.productDetails.title); setPopUpMessage(true) }}>
                                        <i className="text-[1.5vw] font-bold ri-close-line"></i>
                                    </div>
                                </td>
                                <td className="border-r border-gray-300 p-2">
                                    <div className="flex justify-center items-center h-full">
                                        <img className="w-[6vw] object-contain" src={items.productDetails.img} alt="product_img" />
                                    </div>
                                </td>
                                <td className="text-[0.9vw] border-r border-gray-300 p-2">{items.productDetails.title}</td>
                                <td className="text-[0.9vw] border-r border-gray-300 p-2">
                                    <span className='line-through text-[0.9vw]'>${items.productDetails.prevousPrice}</span>
                                    <span className='pl-[0.5vw] text-[1vw]'>${items.productDetails.currentPrice}</span>
                                </td>
                                <td className="text-[0.9vw] border-r border-gray-300 p-2">
                                    {new Date(items.addedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
                                </td>
                                <td className="text-[0.9vw] text-green-600 border-r border-gray-300 p-2">{items.productDetails.status}</td>
                                <td className="border-r border-gray-300 p-2">
                                    <div className="flex justify-center items-center h-full">
                                        <button className='h-[2.5vw] w-[7vw] bg-[#213b95] text-white text-[0.8vw] rounded-sm' onClick={() => addtoCartProduct(items.productId)}>Add to Cart</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <tr className="border-b border-gray-300 h-[4rem]">
                            <td colSpan="7" className="p-2">
                                <div className="flex justify-end gap-10 items-center h-full">
                                    <button className="h-[2.5vw] w-[12vw] bg-[#213b95] text-white text-[0.8vw] rounded-sm" onClick={() => removeAllfromWishlist()}>
                                        Remove All from wishlist
                                    </button>
                                    <button className="h-[2.5vw] w-[9vw] bg-[#213b95] text-white text-[0.8vw] rounded-sm" onClick={() => addAllfromWishlist()}>
                                        Add All to Cart
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
            {popUpMessage &&
                (<div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                    <div className='absolute h-[15vw] w-[25vw] flex flex-col justify-center items-center p-[2vw] text-center bg-white shadow-lg gap-3 rounded-sm'>
                        <img className='w-[4vw]' src={close} alt="close-icon" />
                        <h1>{productTitle} has been removed from the wishlist</h1>
                        <button className='w-[20vw] h-[2.5vw] bg-[#223a94] text-white text-[1vw] flex justify-center items-center gap-3 rounded-sm' onClick={() => setPopUpMessage(false)}>
                            <i className="ri-close-line"></i>
                            <h1>Close</h1>
                        </button>
                    </div>
                </div>)
            }

        </div>
    )
}
