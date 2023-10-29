import React from 'react'
import Typewriter from 'typewriter-effect';
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'

export const Header = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>Let&apos;s turn your digital dream into a website</p>
                    <h1 className='py-4 text-gray-700'>Hi, I&apos;m <span className='text-[#4070f4]'>Faisal Ardhani</span></h1>
                    <h1 className='py-1 text-gray-700'>
                        <Typewriter
                            options={{
                                strings: [
                                    'A Web Developer',
                                    'A Back-End',
                                    'A Freelancer'
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 75
                            }}
                        />
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I am a Web Developer, but My focus as a Backend Developer. I also have enough basic knowledge in Frontend Development to create functional and aesthetic user interfaces.</p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <Link href='https://www.linkedin.com/in/faisal-ardhani-421379230/' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn className='text-[#4070f4]' />
                            </div>
                        </Link>

                        <Link href='https://github.com/FaisalArdhani' target='_blank' rel='noopener noreferrer'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-105 ease-in duration-300'>
                                <FaGithub className='text-[#4070f4]' />
                            </div>
                        </Link>

                        <Link href='mailto:faislardhni@gmail.com' target='_blank' rel='noopener noreferrer' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail className='text-[#4070f4]' />
                            </div>
                        </Link>

                        <Link href='https://www.instagram.com/faisal.ardhni/' target='_blank' rel='noopener noreferrer' >
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 hover:scale-105 ease-in duration-300'>
                                <FaInstagram className='text-[#4070f4]' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
