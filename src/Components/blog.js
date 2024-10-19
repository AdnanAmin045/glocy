import React, { useState } from 'react'

export default function Blog() {

    const [readMore,setReadMore] = useState("hidden")
    const [readBtnText,setReadBtnText] = useState("Read More")

    const expendContent = ()=>{
        readMore === "hidden" ? setReadMore("inline-block") : setReadMore("hidden")
        readBtnText === "Read More" ? setReadBtnText("Read less") : setReadBtnText("Read More")
    }

    return (
        <div className='flex px-[10vw] py-[5vw]'>
            <div className='flex flex-col gap-5'>
                <img className='w-[full]' src="https://foodrunner.ca/assets/admin/base/images/blog/914_649/1.jpg" alt="product-img" />
                <h1 className='text-[2vw] font-bold'>Why Online Grocery Shopping is Preferable than Traditional Shopping?</h1>
                <p>Online grocery shopping is beneficial than the traditional shopping as you can buy the groceries from the comfort of your home online through the company website or app and avail same day grocery delivery services. In today’s busy schedule, trying to find a good supermarket, travelling in a huge traffic to reach that place, spending a lot of time searching for the products, waiting near the bill counters, parking space issues, etc. <br /> <br />

                    Are time-taking which you can use for some other purpose if the shopping is done in online. E-commerce is the biggest online evolution due to which almost everything became online including grocery shopping. As people now are looking for comfort and convenience, most of the customers prefer online grocery shopping where you can get same day grocery delivery services. </p>
                <div className={`${readMore}`}>

                    <h2 className='text-[1.5vw] font-semibold pt-[3vw]'>Advantages of Online Grocery Shopping</h2>
                    <p>Most of the people prefer to make online grocery shopping as it comes with many benefits giving a good shopping experience. You can save a lot of time, money and even avail the benefits of same day grocery delivery service. The reasons why customers are not going with traditional shopping may be due to a lot of issues like traffic, parking issues, weather conditions, need to wait near billing counters, etc. Let’s have a look at some of the major advantages of online grocery shopping</p>

                    <h3 className='text-[1.5vw] font-semibold pt-[3vw]'>Huge variety of products</h3>
                    <p>In online grocery shopping you can choose from a huge variety of products whereas in traditional shopping you may not get much space to store all the products. In traditional shopping, customers may not get a chance to buy from a wide range of products as compared to online grocery shopping which gives a good shopping experience</p>

                    <h4 className='text-[1.5vw] font-semibold pt-[3vw]'>Home delivery</h4>
                    <p>The major advantage of online grocery shopping is that you get the groceries delivered to your doorstep. The best online grocery delivery services offer same day grocery delivery service to the customers. As today everyone young or old is much aware of the technology and well-versed with using smartphones, you can make online grocery shopping staying comfortably at your home and not carrying heavy bags as you always do in traditional grocery shopping.</p>

                    <h5 className='text-[1.5vw] font-semibold pt-[3vw]'>Better prices</h5>
                    <p>In online grocery shopping you can purchase groceries for better prices as you will get the products at the wholesale prices only and also there will be same day delivery of products to your doorsteps. Also you can check the discounts and offers and avail them on the products you have purchased. When coming to traditional shopping, they do not keep perfect margins to sell the groceries because of which the online e-commerce platforms came into existence. Also, there are some of the major savings which are always ignored like petrol cost while travelling to supermarkets, cost for  carry bags, parking space costs, food or other purchases you make at the Mall.</p>

                    <h6 className='text-[1.5vw] font-semibold pt-[3vw]'>Time saving</h6>
                    <p>Online grocery shopping saves a lot of time as you need not spend time in traffic, do not need to spend much time near the billing counter in the supermarket, no parking issues, etc. You can stay at home and make an easy checkout and same day grocery delivery saving a lot of time doing some productive things. Through online grocery shopping you will not face any issues like traffic or weather conditions as you always face with traditional shopping.</p>

                    <h6 className='text-[1.5vw] font-semibold pt-[3vw]'>24/7 shopping </h6>
                    <p> You can conveniently shop at any time using online grocery shopping. You can browse whatever products you need at any time and avail same day grocery delivery services. You need not rush to the supermarkets and shop the groceries in your leisure time and get the groceries delivered to your doorstep. You can even interact with the customer care executives to resolve your queries.</p>

                    <h6 className='text-[1.5vw] font-semibold pt-[3vw]'>Find products easily</h6>
                    <p>While doing online grocery shopping, you may find a huge variety of products, still it is easy to find the products by searching on websites or apps. You can check whether the product is available or not in a single click rather than roaming around the supermarket to find the product therefore getting tired, which always happens with traditional grocery shopping.</p>

                    <h6 className='text-[1.5vw] font-semibold pt-[3vw]'>No unnecessary purchases</h6>
                    <p> In traditional shopping along with the products you need, sometimes you may tend to buy products that are not necessary. But while doing online grocery shopping, you tend to buy only the products that are necessary for you, add them to the cart and complete the shopping, where there won’t be any unnecessary expenses. This is the major advantage with the online grocery shopping where you can shop quickly and get same day grocery delivery services.</p>

                </div>
                <button className='h-[3vw] w-[10vw] bg-[#203c90] text-white p-[0.5vw] rounded-sm font-semibold' onClick={expendContent}>{readBtnText}</button>
            </div>


        </div>
    )
}
