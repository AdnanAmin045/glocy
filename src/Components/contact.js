import React from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import location from '../Resources/location.png'
import phone from '../Resources/phone-call.png'
import mail from '../Resources/mail.png'

export default function Contact() {

    const initialValues = { userName: "", email: "", subject: "", message: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [errorMessage, setErrorMeassage] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateValues(formValues);
        setErrorMeassage(errors);
        if (Object.keys(errors).length === 0) {
            sendEmail(formValues);
            toast.success("Sent Successfully",{duration:2000});
            setFormValues(initialValues);
        }
    }
    const sendEmail = (values) => {
        const getValues = {
            name: values.userName,
            email: values.email,
            subject: values.subject,
            message: values.message
        }
        console.log(getValues)
        emailjs.send("service_rj4vzkd", "template_b65zm1x", getValues, "p7V12Nay__ZAKsAuP");
    }

    const validateValues = (values) => {
        const errors = {};
        const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!values.userName) {
            errors.userName = "Name is Required";
        }
        if (!values.email) {
            errors.email = "Email is Required";
        }
        else if (!regex.test(values.email)) {
            errors.email = "Enter valid email";
        }
        if (!values.subject) {
            errors.subject = "Subject is required";
        } else if (values.subject.length > 20) {
            errors.subject = "Subject should be less than 20 characters"
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        return errors;
    }



    return (
        <>
            <Toaster richColors position='top-right' />
            <div className='flex flex-col px-[10vw] py-[4vw]'>
                <h1 className='self-center text-[3vw]'>Get In Touch</h1>
                <div className='flex justify-between pt-[3vw] pb-[5vw]'>
                    <div className='h-[15vw] w-[20vw] bg-[#f3f3f5] flex  flex-col justify-center items-center p-[1vw]'>
                        <img className='w-[3.5vw]' src={location} alt="location" />
                        <h1 className='text-center text-[1vw] pt-[1vw]'>102 Street 2714 Donovan</h1>
                        <p></p>
                    </div>
                    <div className='h-[15vw] w-[20vw] bg-[#f3f3f5]'>
                        <div className='h-[15vw] w-[20vw] bg-[#f3f3f5] flex  flex-col justify-center items-center p-[1vw]'>
                            <img className='w-[3.5vw]' src={phone} alt="location" />
                            <h1 className='text-center text-[1vw] pt-[1vw]'>+92 3265145770</h1>
                            <p></p>
                        </div>
                    </div>
                    <div className='h-[15vw] w-[20vw] bg-[#f3f3f5]'>
                        <div className='h-[15vw] w-[20vw] bg-[#f3f3f5] flex  flex-col justify-center items-center p-[1vw]'>
                            <img className='w-[3.5vw]' src={mail} alt="location" />
                            <h1 className='text-center text-[1vw] pt-[1vw]'>info@glocy.com</h1>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] h-[55vw] shadow-2xl flex flex-col items-center justify-center px-[15vw]'>
                    <h1 className='self-center text-[3vw] pb-[2vw]'>Get In Touch</h1>
                    <form className="w-[100%] sm:w-[100%] flex flex-col" onSubmit={handleSubmit}>
                        <div className="pb-[5vw] w-full sm:pb-[2vw] flex justify-between items-center">
                            <div className='w-[49%]'>
                                <label htmlFor="heading" className='text-[0.9vw] ml-1'>Your Name *</label>
                                <input type="text" name='userName' className="outline-none mt-[0.5vw] sm:w-[100%] sm:h-[3vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[16vw] p-[3vw] border-[0.1vw] bg-[#f3f4f8] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none" value={formValues.userName} onChange={handleChange} autoComplete="off" />
                                <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.userName}</p>
                            </div>
                            <div className="w-[49%]">
                                <label htmlFor="heading" className='text-[0.9vw] ml-1'>Your Email *</label>
                                <input type="text" name="email" className="outline-none mt-[0.5vw] sm:w-[100%] sm:h-[3vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[16vw] p-[3vw] border-[0.1vw] bg-[#f3f4f8] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none" value={formValues.email} onChange={handleChange} autoComplete="off" />
                                <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.email}</p>

                            </div>
                        </div>
                        <div className="pb-[5vw]  w-full sm:pb-[2vw]">
                            <label htmlFor="heading" className='text-[0.9vw] ml-1'>Subject *</label>
                            <input type="text" id="Subject" name="subject" className="outline-none mt-[0.5vw] sm:w-[100%] sm:h-[3vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[16vw] p-[3vw] border-[0.1vw] bg-[#f3f4f8] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none" value={formValues.subject} onChange={handleChange} autoComplete="off" />
                            <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.subject}</p>

                        </div>
                        <div className="pb-[5vw]  w-full sm:pb-[2vw]">
                            <label htmlFor="heading" className='text-[0.9vw]  ml-1'>Your Message * </label>
                            <textarea id="Message" name="message" className="outline-none mt-[0.5vw] sm:w-[100%] sm:h-[10vw] sm:p-[0.5vw] sm:text-[1vw] text-[5vw] w-[100%] h-[60vw] p-[3vw] border-[0.1vw] bg-[#f3f4f8] dark:bg-[#3c4043] text-black dark:text-white dark:border-white rounded-md focus:outline-none resize-none" value={formValues.message} onChange={handleChange} autoComplete="off"></textarea>
                            <p className="sm:text-[0.8vw] sm:pl-[0.2vw] text-[4vw] text-[#f60100] pl-[1vw]">{errorMessage.message}</p>

                        </div>
                        <button type="submit" className='h-[15vw] w-[55vw] sm:h-[3vw] sm:w-[12vw] sm:text-[0.9vw] rounded-md sm:mt-[0.5vw] bg-[#223a94] text-white text-[5vw] mt-[3vw]'>Send Message</button>
                    </form>
                </div>
            </div>
        </>
    )
}
