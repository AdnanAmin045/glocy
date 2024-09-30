import React, { useEffect} from 'react'
import image from '../Resources/product-image-60-346x310.jpg'
import { Toaster, toast } from 'sonner';
import { useLocation} from 'react-router-dom';

export default function Home() {
    
    const location = useLocation();

    useEffect(()=>{
        if(location.state?.showToaster){
            toast.success("Log In successful!", { duration: 2000 });
        }
    },[location.state])

    return (
        <>
            <Toaster richColors position='top-right' />
            <div className='w-[70%] pr-[10vw] pl-[2vw] pt-[2vw]'>
                <img className='h-[auto] w-[full]' alt="" data-widths="[800,900,1000,1100,1200,1300,1400,1600,1800,2000]" data-sizes="auto" data-srcset="//qne.com.pk/cdn/shop/files/Shan_combine_800x.png?v=1720860282 800w, //qne.com.pk/cdn/shop/files/Shan_combine_900x.png?v=1720860282 900w, //qne.com.pk/cdn/shop/files/Shan_combine_1000x.png?v=1720860282 1000w, //qne.com.pk/cdn/shop/files/Shan_combine_1100x.png?v=1720860282 1100w, //qne.com.pk/cdn/shop/files/Shan_combine_1200x.png?v=1720860282 1200w, //qne.com.pk/cdn/shop/files/Shan_combine_1300x.png?v=1720860282 1300w, //qne.com.pk/cdn/shop/files/Shan_combine_1400x.png?v=1720860282 1400w, //qne.com.pk/cdn/shop/files/Shan_combine_1600x.png?v=1720860282 1600w, //qne.com.pk/cdn/shop/files/Shan_combine_1800x.png?v=1720860282 1800w, //qne.com.pk/cdn/shop/files/Shan_combine_2000x.png?v=1720860282 2000w" sizes="1423px" srcset="//qne.com.pk/cdn/shop/files/Shan_combine_800x.png?v=1720860282 800w, //qne.com.pk/cdn/shop/files/Shan_combine_900x.png?v=1720860282 900w, //qne.com.pk/cdn/shop/files/Shan_combine_1000x.png?v=1720860282 1000w, //qne.com.pk/cdn/shop/files/Shan_combine_1100x.png?v=1720860282 1100w, //qne.com.pk/cdn/shop/files/Shan_combine_1200x.png?v=1720860282 1200w, //qne.com.pk/cdn/shop/files/Shan_combine_1300x.png?v=1720860282 1300w, //qne.com.pk/cdn/shop/files/Shan_combine_1400x.png?v=1720860282 1400w, //qne.com.pk/cdn/shop/files/Shan_combine_1600x.png?v=1720860282 1600w, //qne.com.pk/cdn/shop/files/Shan_combine_1800x.png?v=1720860282 1800w, //qne.com.pk/cdn/shop/files/Shan_combine_2000x.png?v=1720860282 2000w" />


                {/* Best Sellers */}

                <div className='pt-[3vw]'>
                    <h1 className='text-[1.5vw] uppercase font-bold'>Best Sellers</h1>
                    <p className='text-[1vw] text-[#9da0a5] leading-none'>Do not miss the current offers until the end of March.</p>
                </div>


                <div className='pt-[1.5vw] pb-[10vw] flex flex-wrap gap-[1vw]'>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                    <div className='h-[22vw] w-[13.5vw] border-[#f3f4f8] border-[0.2vw] p-[0.5vw] flex flex-col relative'>
                        <img className='w-[10vw] self-center' src={image} alt="Werther’s Original Caramel Hard Candies" />
                        <div className='flex flex-col gap-3'>
                            <p className='text-[1vw] '>Angie’s Boomchickapop Sweet & Salty Kettle Corn</p>
                            <h1 className='text-green-400 text-[0.9vw]'>In Stock</h1>
                            <div className='flex items-center gap-5'>
                                <p className='text-[#9da0a5] text-[1.1vw] line-through'>$4.29</p>
                                <p className='text-[#b0405f] text-[1.3vw] font-bold'>$3.29</p>
                            </div>
                            <button className='h-[2.5vw] w-[12vw] rounded-3xl self-center border-[0.1vw] border-[#2cbdf9] text-[#2cbdf9] hover:text-[white] hover:bg-[#2cbdf9] text-[1vw] transition-colors duration-500'>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
