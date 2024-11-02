import axios from 'axios';
import React, { useEffect, useState } from 'react';
import close from "../../Resources/close.png"
import { Link } from 'react-router-dom';

export default function BreakfastDairy() {

    const [showMaxFav, setShowMaxFav] = useState(null);
    const [productData, setProductData] = useState([]);
    const [wishlistDuplicate, setWishlistDuplicate] = useState()
    const [showWishlistPopUp, setWishlistPopUp] = useState(false)
    const [wishlistTitle, setWishlistTitle] = useState("")
    const userId = localStorage.getItem("userID")

    const handleMouseEnter = (id) => {
        setShowMaxFav(id);
    };

    const handleMouseLeave = () => {
        setShowMaxFav(null);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stringToSend = "Breakfast & Dairy";
                const response = await axios.get(`/getProductData?data=${encodeURIComponent(stringToSend)}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    //Add to wishlist API Call

    const addtoWishList = async (id) => {
        try {
            const response = await axios.post("/addtoWishList", { productId: id, userId: userId });
            if (response.status === 200) {
                setWishlistDuplicate(false);
            } else if (response.status === 400 || response.status === 500) {
                setWishlistDuplicate(true);
            }
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
            setWishlistDuplicate(true)
        }
    }


    // Add to Cart Product


    const addtoCartProduct = async (id) => {
        try {
            const response = await axios.post("/addtoCart", { productId: id, userId: userId });
            if (response.status === 200) {
                console.log("Data has been added")
            }
        } catch (err) {
            console.log("Error message:", err);
        }
    }



    return (
        <div className='pt-[1.5vw] pb-[10vw] w-[70%] flex flex-wrap gap-[1vw] pl-[2vw] pr-[10vw]'>
            {productData.map((items) => {
                return (
                    <>
                        <div
                            key={items._id}
                            onMouseEnter={() => handleMouseEnter(items._id)}
                            onMouseLeave={handleMouseLeave}
                            className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative cursor-pointer'
                        >
                            <img className='w-[10vw] self-center' src={items.img} alt={items.title}></img>
                            <div className='flex flex-col gap-3'>
                                <p className='text-[1vw]'>{items.title}</p>
                                <h1 className='text-green-400 text-[0.9vw]'>{items.status}</h1>
                                <div className='flex items-center gap-5'>
                                    <p className='text-[#9da0a5] text-[1.1vw] line-through'>${items.prevousPrice}</p>
                                    <p className='text-[#b0405f] text-[1.3vw] font-bold'>${items.currentPrice}</p>
                                </div>
                                <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500' onClick={() => { addtoCartProduct(items._id) }}>
                                    Add to cart
                                </button>
                            </div>
                            <div className={`${showMaxFav === items._id ? 'flex' : 'hidden'} flex-col absolute right-1 top-1`}>
                                <div className='group w-[2.4vw] h-[2.4vw] hover:bg-[#223a94] flex justify-center items-center rounded-[50%]'>
                                    <i className="text-[1.5vw] group-hover:text-white text-[#9d9d9d] ri-fullscreen-line"></i>
                                </div>
                                <div className='group w-[2.4vw] h-[2.4vw] hover:bg-[#223a94] flex justify-center items-center rounded-[50%]' onClick={() => { addtoWishList(items._id); setWishlistPopUp(true); setWishlistTitle(items.title) }}>
                                    <i className="text-[1.5vw] group-hover:text-white text-[#9d9d9d] ri-heart-line"></i>
                                </div>
                            </div>
                        </div>
                        {showWishlistPopUp &&
                            <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
                                <div className='absolute h-[20vw] w-[25vw] flex flex-col justify-center items-center p-[2vw] text-center bg-white shadow-lg gap-3'>
                                    <img className='w-[4vw]' src={close} alt="close-icon" />
                                    <h1>{wishlistTitle}{wishlistDuplicate && <span> <br />already in Wishlist</span>}</h1>
                                    <Link to="/wishlist" className='w-[20vw] h-[2.5vw] bg-[#223a94] text-white text-[1vw] flex justify-center items-center gap-3 rounded-sm'>
                                        <i className="ri-heart-line"></i>
                                        <h1>View Wishlist</h1>
                                    </Link>
                                    <button className='w-[20vw] h-[2.5vw] bg-[#223a94] text-white text-[1vw] flex justify-center items-center gap-3 rounded-sm' onClick={() => setWishlistPopUp(false)}>
                                        <i className="ri-close-line"></i>
                                        <h1>Close</h1>
                                    </button>
                                </div>
                            </div>
                        }
                    </>
                );
            })}
        </div>
    )
}
