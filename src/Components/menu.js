import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fruit from '../Resources/apple-fruit-black.png'
import fruitColor from '../Resources/apple-fruit-colour.png'

import meat from '../Resources/steak-black.png'
import meatColor from '../Resources/steak-color.png'

import breakfast from '../Resources/oatmeal-black.png'
import breakfastColor from '../Resources/oatmeal-color.png'

import bakery from '../Resources/scrambled-eggs-black.png'
import bakeryColor from '../Resources/scrambled-eggs-color.png'

import coffee from '../Resources/coffee-cup-black.png'
import coffeeColor from '../Resources/coffee-cup-color.png'


import frozen from '../Resources/frozen-black.png'
import frozenColor from '../Resources/frozen-color.png'

import candy from '../Resources/candy-black.png'
import candyColor from '../Resources/candy-color.png'

import grocery from '../Resources/pomegranate-black.png'
import groceryColor from '../Resources/pomegranate-color.png'


export default function Menu() {

    const [fruit_img, setFruit_img] = useState(fruit)
    const [meat_img, setMeat_img] = useState(meat)
    const [breakfast_img, setBreakfast_img] = useState(breakfast)
    const [bakery_img, setBakery_img] = useState(bakery)
    const [coffee_img, setCoffee_img] = useState(coffee)
    const [frozen_img, setFrozen_img] = useState(frozen)
    const [candy_img, setCandy_img] = useState(candy)
    const [grocery_img, setGrocery_img] = useState(grocery)


    return (
        <div className='w-[30%] pl-[10vw] pb-[10vw]'>
            <div>
                <div className='h-[3.5vw] w-[100%] bg-[#2cbef8] flex items-center justify-between p-[1vw] relative'>
                    <div className='flex gap-3 items-center'>
                        <p className='text-white text-[1.3vw]'>All Category</p>
                    </div>
                    <i className="text-white text-[1.3vw] ri-menu-line"></i>
                    <div className='absolute -top-2 left-1/4 h-[1.1vw] w-[43%] rounded-3xl bg-[#eff0f4] flex justify-center items-center'>
                        <h1 className='text-[0.7vw] text-black uppercase'>total 565 products</h1>
                    </div>
                </div>
                <ol className='border-[#f3f4f8] border-[0.2vw] text-[1vw] flex flex-col gap-5 p-[1vw]'>
                    <li className='hover:text-[#2cbef8] cursor-pointer flex gap-2 items-center' onMouseEnter={() => { setFruit_img(fruitColor) }} onMouseLeave={() => { setFruit_img(fruit) }}>
                        <img className='w-[1.2vw]' src={fruit_img} alt="fruit_img" />
                        <Link to="/fruitVegetables">Fruits & Vegetables</Link>
                    </li>
                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setMeat_img(meatColor) }} onMouseLeave={() => { setMeat_img(meat) }}>
                        <img className='w-[1.2vw]' src={meat_img} alt="meat_img" />
                        <Link to="/meatAndSeafood">Meats & Seafood</Link>
                    </li>
                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setBreakfast_img(breakfastColor) }} onMouseLeave={() => { setBreakfast_img(breakfast) }}>
                        <img className='w-[1.2vw]' src={breakfast_img} alt="breakfast_img" />
                        <Link to="/breakfastDairy">Breakfast & Dairy</Link>
                    </li>
                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setBakery_img(bakeryColor) }} onMouseLeave={() => { setBakery_img(bakery) }}>
                        <img className='w-[1.2vw]' src={bakery_img} alt="bakery" />
                        <Link to="/breadsBakery">Breads & Bakery</Link>
                    </li>
                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setCoffee_img(coffeeColor) }} onMouseLeave={() => { setCoffee_img(coffee) }}>
                        <img className='w-[1.2vw]' src={coffee_img} alt="bakery" />
                        <Link to="/beverages">Beverages</Link>
                    </li>

                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setFrozen_img(frozenColor) }} onMouseLeave={() => { setFrozen_img(frozen) }}>
                        <img className='w-[1.2vw]' src={frozen_img} alt="frozen" />
                        <Link to="/frozenFood">Frozen Foods</Link>
                    </li>
                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setCandy_img(candyColor) }} onMouseLeave={() => { setCandy_img(candy) }}>
                        <img className='w-[1.2vw]' src={candy_img} alt="frozen" />
                        <Link to="/biscuitsSnack">Biscuits & Snack</Link>
                    </li>
                    <li className='flex gap-2 items-center hover:text-[#2cbef8] cursor-pointer' onMouseEnter={() => { setGrocery_img(groceryColor) }} onMouseLeave={() => { setGrocery_img(grocery) }}>
                        <img className='w-[1.2vw]' src={grocery_img} alt="frozen" />
                        <Link to="/groceryStaples">Grocery & Staples</Link>
                    </li>
                </ol>
            </div>
            <div className='pt-[4vw] px-[1vw]'>
                <p className='text-[1.2vw]'>Product Status</p>
                <div className='flex flex-col gap-4'>
                    <div className='flex gap-2 cursor-pointer items-center pt-[1vw]'>
                        <input type="checkbox" />
                        <p className='text-[0.9vw] text-[#9da0a5]'>In Stock</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <input type="checkbox" />
                        <p className='text-[0.9vw] text-[#9da0a5]'>On Sale</p>
                    </div>
                </div>
            </div>
            <div className='pt-[3vw] px-[1vw]'>
                <p className='text-[1.2vw]'>Price</p>
                <div className='flex flex-col gap-4'>

                    <div className='flex gap-2 cursor-pointer items-center pt-[1vw]'>
                        <input type="checkbox" />
                        <p className='text-[0.9vw] text-[#9da0a5]'>50$ - 100$</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <input type="checkbox" />
                        <p className='text-[0.9vw] text-[#9da0a5]'>100$ - 150$</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <input type="checkbox" />
                        <p className='text-[0.9vw] text-[#9da0a5]'>150$ - 200$</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <input type="checkbox" />
                        <p className='text-[0.9vw] text-[#9da0a5]'>200$ - Above</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
