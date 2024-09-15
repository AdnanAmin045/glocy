import React from 'react'
import { Link } from 'react-router-dom'

export default function menu() {
  return (
    <div className='w-[30%] pl-[10vw] pb-[10vw]'>
                <div>
                    <ol className='border-[#f3f4f8] border-[0.2vw] text-[1vw] flex flex-col gap-5 p-[1vw]'>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/fruitVegetables">Fruits & Vegetables</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/meatAndSeafood">Meats & Seafood</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/breakfastDairy">Breakfast & Dairy</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/beverages">Beverages</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/breadsBakery">Breads & Bakery</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/frozenFood">Frozen Foods</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/biscuitsSnack">Biscuits & Snack</Link></li>
                        <li className='hover:text-[#2cbef8] cursor-pointer'><Link to="/groceryStaples">Grocery & Staples</Link></li>
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
