import { ImageCarousel } from "@components";
import { HeroImage1, LineRounded } from "@images";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <>
      <header className="flex flex-col justify-center lg:items-start items-center space-y-20 lg:space-y-0 lg:space-x-20 mt-20 mb-24 lg:flex-row relative">
        <div className="lg:mx-24 mx-12 flex flex-col justify-center items-start space-y-8 md:space-y-12 lg:space-y-8 lg:w-1/2">
          <div className="font-Inter font-bold lg:text-5xl md:text-6xl text-2xl tracking-wide lg:leading-tight leading-relaxed  text-center lg:text-start mx-auto px-auto lg:mx-0 lg:px-0">
            <div>
              <span className="text-buttonBG">Relief</span> from daily <br />
              charging struggles.
            </div>
          </div>
          <div className="text-center mx-auto lg:mx-0">
            <Image src={LineRounded} alt="Rounded Line" />
          </div>
          <div className="font-Inter font-bold lg:text-2xl md:text-3xl text-xl tracking-wide leading-tight text-center mx-auto px-auto lg:mx-0 lg:px-0">
            Say YES to clutter-free style of living.
          </div>
          <div className="font-Inter font-large  text-md md:text-md lg:text-lg  leading-7 text-center tracking-wide lg:text-start">
            Experience seamless charging and overcome the hassle of multiple
            chargers with the single point integrated charging solution which
            comes with compatible, compact and fast charging design.
          </div>
          <div className="flex justify-center lg:items-start items-center px-auto mx-auto space-x-8 lg:mx-0 lg:px-0">
            <Link href="/">
              <a className="font-Inter font-normal text-xl md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">
                Explore
              </a>
            </Link>
            <Link href="#inquire">
              <a className="font-Inter font-normal text-xl  lg:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">
                Inquire
              </a>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto z-0">
          {/* <Image src={HeroImage1} alt="HeroImage" width={400} height={400} /> */}
          <ImageCarousel />
        </div>
      </header>
    </>
  );
};

export default Hero;
