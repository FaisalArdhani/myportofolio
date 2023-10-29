import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AboutImg from '../public/assets/Faisal.A.png'

export const About = () => {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#4070f4]'>
                        About
                    </p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>
                        I specialize in developing responsive web applications that connect with various APIs and other backend technologies. I am very enthusiastic in learning new technologies and I believe that there are different approaches to accomplish a task. Although I have expertise mainly in Backend Developer of web applications using Node.js, Express.js, JavaScript, PHP, and Laravel, I also have the ability to learn fast and flexible, so I can easily adapt myself and learn new technologies according to project needs. I believe that being a great developer is not just using one particular language, but choosing the best tool for the job.
                    </p>
                    <p className='py-2 text-gray-600'>
                        During my web development journey, I have gained valuable insights in managing projects, dealing with technical challenges, and collaborating with teams. I am committed to continuing to learn and grow in this industry, and am open to new technologies that may emerge in the future. I believe that with a strong passion for learning and adaptability, I can continue to make meaningful contributions to the world of web development.
                    </p>
                    <Link href='/#projects'>
                        <p className='py-2 text-gray-600 underline cursor-pointer'>
                            Check out some of my projects.
                        </p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={AboutImg} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}
