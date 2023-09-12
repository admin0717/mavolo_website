import { LogoIcon, LogoIconWhite, LogoPrimary, LogoSecondary } from "@images";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <>
      <footer
        id="contact-us"
        className="lg:mx-24  mt-24 space-y-12  bg-buttonBG rounded-t-xl flex flex-col pb-12">
        <div className=" flex items-center mt-10">
          <div className="flex  items-center  space-x-1 w-1/2 lg:ml-12">
            <Image
              src={LogoIconWhite}
              alt="logo"
              width={70}
              height={70}
              className=""
            />
            <span className="font-Inter  xl:text-4xl md:text-2xl font-bold  tracking-wide text-[#fff]">
              MAVOLO
            </span>
          </div>
          <div className="flex justify-center items-center space-x-4 w-1/2 lg:ml-80 md:ml-40">
            <Link href="/">
              <FaLinkedin className="w-7 h-7 fill-[#fff] hover:fill-primaryBG" />
            </Link>
            <Link href="/">
              <FaFacebookSquare className="w-7 h-7 fill-[#fff] hover:fill-primaryBG" />
            </Link>
            <Link href="/">
              <FaInstagram className="w-7 h-7 fill-[#fff] hover:fill-primaryBG" />
            </Link>
            <Link href="/">
              <FaTwitterSquare className="w-7 h-7 fill-[#fff] hover:fill-primaryBG" />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col justify-between items-start lg:flex-row space-y-12 text-[#fff]">
          <div className="lg:w-2/3 flex flex-col items-start justify-center lg:pl-20 space-y-4 mx-auto lg:mx-auto px-auto lg:px-0">
            <div className="text-lg font-Inter font-semibold">
              Registered Address
            </div>
            <div>   
              Block - C -168, <br />
              Second floor, sector 10,
              <br />
              Noida Gautam Buddha Nagar ,  <br />            
              India - 201301
            </div>
            <div>Mob- +91 9787093848, <br />
               tel- 1204320122</div>
          </div>
          <div className="lg:w-1/3 flex items-start justify-center lg:space-x-12 space-x-4 lg:mr-10">
            {/* <div className="lg:w-1/2 flex flex-col items-start justify-center">
              <Link href="/">
                <a className="hover:text-blurBG]">Blog</a>
              </Link>
              <Link href="/">Products</Link>
              <Link href="/">Contact Us</Link>
            </div> */}
            <div className="lg:w-1/2 flex lg:flex-col lg:items-end items-start justify-center flex-row space-x-4 mx-4">
              <Link href="/about-us">
                <a className="text-lg font-Inter hover:border-b-2">About us</a>
              </Link>
              <Link href="/products">
                <a className="text-lg font-Inter hover:border-b-2">Products</a>
              </Link>
              <Link href="/blogs">
                <a className="text-lg font-Inter hover:border-b-2">Blogs</a>
              </Link>
              <Link href="#inquire">
                <a className="text-lg font-Inter hover:border-b-2">
                  Write to us
                </a>
              </Link>
              <Link href="/career">
                <a className="text-lg font-Inter hover:border-b-2">Career</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-start text-[#fff] font-white lg:ml-20 mx-10 lg:mx-0">
          For any queries or concerns, write to us at{" "}
          <Link href="mailto:info@mavolo.in" className="">
            <a className="border-b-2  pb-1">support@mavolo.in</a>
          </Link>
        </div>
        <div className="text-center text-[#fff] font-white lg:ml-20 mx-auto lg:mx-0">
          ©2022 Mavolo. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
