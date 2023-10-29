import React from 'react'
import Image from 'next/image'
import Html from '../public/assets/skill/html5.png'
import Css from '../public/assets/skill/css.png'
import Javascript from '../public/assets/skill/javascript.png'
import NodeJs from '../public/assets/skill/nodejs.png'
import ExpressJs from '../public/assets/skill/expressjs.png'
import ReactJs from '../public/assets/skill/react.png'
import Php from '../public/assets/skill/php.png'
import Mysql from '../public/assets/skill/mysql.png'
import Git from '../public/assets/skill/git.png'
import Docker from '../public/assets/skill/docker.png'
import Firebase from '../public/assets/skill/firebase.png'


export const Skill = () => {
    return (
        <div id='skill' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-[#4070f4]'>
                    Skills
                </p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid  lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className=' justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Html} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Css} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Javascript} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={NodeJs} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ExpressJs} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={ReactJs} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Php} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center'>
                            <div className='m-auto'>
                                <Image src={Mysql} width='64px' height='64px' alt='/' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

