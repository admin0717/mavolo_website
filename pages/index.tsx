import { Hero, Navbar } from '@components';
import { useState } from "react";

import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  	const [isToggle, setIsToggle] = useState(false);

  return (
    <>
    <div className='mx-8 my-2 md:mx-14 md:my-4 lg:mx-16 lg:my-4 container relative z-10 xl:mx-auto h-fit'>
        <Navbar isToggle={isToggle} setIsToggle={setIsToggle} />
        {/* <div className={`${isToggle ? "" : "hidden"}`}> */}
          <Hero />
        {/* </div> */}
    </div>
    <div className="absolute w-[22rem] h-[22rem] border-r-[50%] bg-blurBG blur-[110px] top-[25%] left-[30%] -z-10"></div>
    <div className="absolute w-[22rem] h-[22rem] border-r-[50%] bg-blurBG blur-[90px] top-10 right-5  -z-10"></div>
    <div className="absolute w-[22rem] h-[22rem] border-r-[50%] bg-blurBG blur-[90px] bottom-0 left-0  -z-10"></div>
    <div className="absolute w-[22rem] h-[22rem] border-r-[50%] bg-blurBG blur-[90px] bottom-0 right-10  -z-10"></div>
    <div className="absolute w-[22rem] h-[22rem] border-r-[50%] bg-blurBG blur-[90px] top-15 left-0  -z-10"></div>
    </>
    
  )
}

export default Home
