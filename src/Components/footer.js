import React from 'react'
import delivery from '../Resources/delivery.png'
import milkBox from '../Resources/milk-products.png'
import dollar from '../Resources/dollar.png'
import discount from '../Resources/discount.png'
import card from '../Resources/card.png'
import visa from '../Resources/visa.png'
import payPal from '../Resources/paypal.png'


export default function footer() {
    return (
        <>
            <div className='h-[25vw] w-full bg-[#233a95]'>
                <div className='px-[10vw] h-full flex relative items-center'>
                    <div className='flex flex-col justify-center gap-3'>
                        <p className='text-white text-[1.3vw]'>$20 discount for your first order</p>
                        <h1 className='text-white text-[2.5vw]'>Join our newsletter and get...</h1>
                        <p className='text-[#9da0a5] text-[1vw]'>Join our email subscription now to get updates on  <br /> promotions and coupons.</p>
                        <div className='flex items-center justify-between p-[1vw] w-[33vw] h-[4vw] bg-[#f3f4f8]  mt-[3vw] rounded-[0.4vw]'>
                            <input className='h-[60%] border-none bg-transparent outline-none text-[#7e8c9d]' type="text" placeholder='Your Email Address' />
                            <button className='h-[3vw] w-[8vw] bg-[#233a95] text-white rounded-lg'>Subscribe</button>
                        </div>
                    </div>
                    <img className='absolute bottom-0 right-0' src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png" alt="subscribe"></img>
                </div>
            </div>
            <div className='flex px-[10vw] items-center justify-between h-[5vw]'>
                <div className='flex gap-2 items-center'>
                    <img className='w-[1.5vw]' src={milkBox} alt="product-icon" />
                    <p className='text-[0.8vw] font-bold'>Everyday fresh products</p>
                </div>
                <div class="border-l-2 h-5 text-[#f3f4f8]"></div>
                <div className='flex gap-2 items-center'>
                    <img className='w-[1.5vw]' src={delivery} alt="product-icon" />
                    <p className='text-[0.8vw] font-bold'>Free delivery for order over $70</p>
                </div>
                <div class="border-l-2 h-5 text-[#f3f4f8]"></div>
                <div className='flex gap-2 items-center'>
                    <img className='w-[1.5vw]' src={discount} alt="product-icon" />
                    <p className='text-[0.8vw] font-bold'>Daily Mega Discounts</p>
                </div>
                <div class="border-l-2 h-5 text-[#f3f4f8]"></div>
                <div className='flex gap-2 items-center'>
                    <img className='w-[1.5vw]' src={dollar} alt="product-icon" />
                    <p className='text-[0.8vw] font-bold'>Best price on the market</p>
                </div>
            </div>
            <div className='absolute left-0 right-0 border-b-[0.2vw] text-[#f3f4f8]'></div>

            <div className='flex px-[10vw] justify-between py-[5vw]'>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[1.2vw]'>FRUIT & VEGETABLES</h1>
                    <ol className='text-[0.9vw] flex flex-col gap-2 text-[#a6a3a9]'>
                        <li>Fresh Vegetables</li>
                        <li>Herbs & Seasonings</li>
                        <li>Fresh Fruits</li>
                        <li>Cuts & Sprouts</li>
                        <li>Exotic Fruits & Veggies</li>
                        <li>Packaged Produce</li>
                        <li>Party Trays</li>
                    </ol>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[1.2vw]'>Breakfast & Dairy</h1>
                    <ol className='text-[0.9vw] flex flex-col gap-2 text-[#a6a3a9]'>
                        <li>Milk & Flavoured Milk</li>
                        <li>Butter and Margarine</li>
                        <li>Fresh Fruits</li>
                        <li>Cheese</li>
                        <li>Eggs Substitutes</li>
                        <li>Honey</li>
                        <li>Marmalades</li>
                        <li>Sour Cream and Dips</li>
                        <li>Yogurt</li>
                    </ol>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[1.2vw]'>Meat & Seafood</h1>
                    <ol className='text-[0.9vw] flex flex-col gap-2 text-[#a6a3a9]'>
                        <li>Breakfast Sausage</li>
                        <li>Dinner Sausage</li>
                        <li>Beef</li>
                        <li>Chicken</li>
                        <li>Sliced Deli Meat</li>
                        <li>Shrimp</li>
                        <li>Wild Caught Fillets</li>
                        <li>Crab and Shellfish</li>
                        <li>Farm Raised Fillets</li>
                    </ol>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[1.2vw]'>Beverages</h1>
                    <ol className='text-[0.9vw] flex flex-col gap-2 text-[#a6a3a9]'>
                        <li>Water</li>
                        <li>Sparkling Water</li>
                        <li>Soda & Pop</li>
                        <li>Coffee</li>
                        <li>Milk & Plant-Based Milk</li>
                        <li>Tea & Kombucha</li>
                        <li>Drink Boxes & Pouches</li>
                        <li>Craft Beer</li>
                        <li>Wine</li>
                    </ol>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='text-[1.2vw]'>Breads & Bakery</h1>
                    <ol className='text-[0.9vw] flex flex-col gap-2 text-[#a6a3a9]'>
                        <li>Milk & Flavoured Milk</li>
                        <li>Butter and Margarine</li>
                        <li>Cheese</li>
                        <li>Eggs Substitutes</li>
                        <li>Honey</li>
                        <li>Marmalades</li>
                        <li>Sour Cream and Dips</li>
                        <li>Yogurt</li>
                    </ol>
                </div>
            </div>
            <div className='border-b-[0.2vw] text-[#f3f4f8]'></div>
            <div className='flex items-center justify-between py-[1vw] px-[10vw]'>
                <p className='text-[0.9vw] text-[#a6a3a9]'>Copyright 2024 © Bacola WordPress Theme. All rights reserved.</p>
                <div className='flex items-center gap-5'>
                    <a className='text-[0.9vw] text-[#a6a3a9]' href="/">Privacy Policy</a>
                    <a className='text-[0.9vw] text-[#a6a3a9]' href="/">Terms and Conditions
                    </a>
                    <div className='flex gap-2'>
                        <div className='flex p-[0.3vw] border-[0.12vw] border-[#f3f4f8]'>
                        <img className='w-[3vw] h-[1.5vw]' src={card} alt="banking-cards" />
                        </div>
                        <div className='flex p-[0.3vw] border-[0.12vw] border-[#f3f4f8]'>
                        <img className='w-[3vw] h-[1.5vw]' src={visa} alt="banking-cards" />
                        </div>
                        <div className='flex p-[0.3vw] border-[0.12vw] border-[#f3f4f8]'>
                        <img className='w-[3vw] h-[1.5vw]' src={payPal} alt="banking-cards" />
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
