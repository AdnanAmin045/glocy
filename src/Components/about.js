import React from 'react'
import pic from '../Resources/about-Pic.jpg'

export default function About() {
    return (
        <div className='h-full pb-[10vw]'>
            <div className='w-full h-[40vw] bg-[url(https://klbtheme.com/bacola/wp-content/uploads/2021/08/about-header.jpg)] bg-cover bg-center bg-slate-300 flex items-center justify-center'>
                <div className='flex flex-col text-center leading-9'>
                    <h1 className='uppercase text-[3vw] font-bold text-white'>About for QuickCart</h1>
                    <p className='uppercase text-[1.2vw] text-white font-semibold'>We can do more for you</p>
                </div>
            </div>


            <div className='px-[10vw]'>

                <div className='flex flex-col gap-8 py-[3vw]'>
                    <p className='text-[1vw]'>
                        Welcome to QuickCart, where innovation meets convenience in online shopping. We are dedicated to providing a top-tier digital marketplace that not only makes shopping easy but also personalizes every step of your journey. Whether you're a new visitor or a loyal customer, our platform is designed to cater to your needs with efficiency, security, and style.
                    </p>
                    <p className='text-[1vw]'>
                        Our platform offers a smooth user experience, allowing you to explore a wide variety of products, effortlessly search through categories, and make informed decisions based on detailed descriptions and high-quality images. At QuickCart, we believe in simplifying the shopping process without compromising on quality or service.
                    </p>
                    <p className='text-[1vw]'>
                        Our focus is on creating a secure, customer-first environment where you can manage your account, track your orders, and enjoy a hassle-free checkout experience with trusted payment options. We aim to exceed your expectations every time you visit.
                    </p>
                </div>
                <div className='flex flex-col gap-4 py-[3vw]'>
                    <h1 className='text-[2vw] font-bold'>Our Commitment</h1>
                    <p className='text-[1vw]'>Our commitment goes beyond just providing products; we are dedicated to enhancing the entire shopping journey. We continuously refine our services to align with customer feedback and the latest trends in e-commerce. From a user-friendly interface to real-time order tracking, every feature is designed to make your experience smooth and enjoyable. We prioritize your security and satisfaction, ensuring that every interaction you have with us is seamless and protected.</p>
                </div>
                <div className='flex gap-8'>
                    <img className="w-[35vw]" src={pic} alt="profile-pic" />
                    <div className='flex flex-col gap-10 pt-[10vw]'>
                        <h1 className='text-[1.2vw] font-semibold pb-5'>Adnan Amin - QuickCart CEO</h1>
                        <p className='text-[1vw]'>
                            At the helm of QuickCart is Adnan Amin, a visionary leader and a dedicated professional in the field of e-commerce and technology. With a strong background in software development and a passion for building innovative solutions, Adnan has transformed QuickCart into a platform that stands out for its reliability, user-centric design, and cutting-edge technology.
                        </p>
                        <p className='text-[1vw]'>
                            Under his leadership, the company has grown into a trusted name in the digital marketplace, offering unparalleled service and a commitment to customer satisfaction. Adnan's dedication to excellence drives the company's mission to continuously evolve and meet the changing demands of online shopping. His vision is to make QuickCart the go-to platform for all your shopping needs, delivering both quality products and exceptional experiences.
                        </p>
                    </div>

                </div>
                <div className="relative -top-11 left-[10vw] flex flex-col gap-6 py-[2vw] px-[5vw] bg-white">
                    <h2 className="text-3xl font-bold text-center uppercase">Why Choose Us?</h2>
                    <div className="flex flex-col gap-4 text-[1vw] leading-relaxed">
                       <p>We are a customer-centric platform where every decision is driven by the needs and preferences of our users. We prioritize secure transactions, offering trusted payment methods while ensuring the protection of your information. Our reliable service guarantees a seamless experience, from product browsing to order delivery. Under the innovative leadership of Adnan Amin, we continually evolve to meet the demands of the modern shopper, making QuickCart your preferred online marketplace.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
