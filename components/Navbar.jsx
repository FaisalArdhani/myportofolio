import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaLinkedinIn, FaWhatsapp, FaGithub } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');

    const handlerNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);


    return (
        <div style={{ backgroundColor: `${navBg}` }} className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300' : 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src='/assets/faislA.png' alt='/' width='65' height='40' className='cursor-pointer' />
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                        </Link>
                        <Link href='/#about'>
                            <li onClick={() => setNav(false)} className='ml-10 text-sm uppercase hover:border-b'>About</li>
                        </Link>
                        <Link href='/#skill'>
                            <li onClick={() => setNav(false)} className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='ml-10 text-sm uppercase hover:border-b'>Project</li>
                        </Link>
                        <Link href='/'>
                            <li onClick={() => setNav(false)} className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                        </Link>
                    </ul>
                    <div onClick={handlerNav} className='md:hidden cursor-pointer'>
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Image src='/assets/faislA.png' alt='/' width='75' height='35' />
                            <div onClick={handlerNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>Let&apos;s turn your digital dream into a website</p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Home</li>
                            </Link>
                            <Link href='/#about'>
                                <li className='py-4 text-sm'>About</li>
                            </Link>
                            <Link href='/#skill'>
                                <li className='py-4 text-sm'>Skills</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Project</li>
                            </Link>
                            <Link href='/'>
                                <li className='py-4 text-sm'>Contact</li>
                            </Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='uppercase tracking-widest text-[#4070f4]'>Let&apos;s Connect Me</p>
                            <div className='flex item-center justify-between my-4 w-full sm:w-[80%]'>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'>

                                    <Link href='https://www.linkedin.com/in/faisal-ardhani-421379230/' target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedinIn />
                                    </Link>

                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'>
                                    <Link href='https://github.com/FaisalArdhani' target='_blank' rel='noopener noreferrer'>
                                        <FaGithub />
                                    </Link>
                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'>
                                    <Link href='mailto:faislardhni@gmail.com' target='_blank' rel='noopener noreferrer' >
                                        <AiOutlineMail />
                                    </Link>
                                </div>

                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 ease-in duration-300'>
                                    <Link href='https://wa.me/6289669326628?text=Halo,%20saya%20tertarik%20bekerja%20sama%20dengan%20Anda
                                    ' target='_blank' rel='noopener noreferrer' >
                                        <FaWhatsapp />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar