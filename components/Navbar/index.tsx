import { LogoIcon, LogoPrimary, LogoSecondary } from "@images";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar: FC = () => {

	const [isToggle, setIsToggle] = useState(true);

	const LinksText = ["Products", "Blogs", "About Us"];
	return (
		<>
			{/* Medium to large Screens */}
			<nav className="md:flex md:flex-col md:justify-center md:items-center hidden md:z-20  px-20 md:px-24 sticky top-0 z-50 bg-[#fff] drop-shadow-sm w-full">
				<div className="flex justify-between items-center w-full xl:space-x-20 md:space-x-1 lg:space-x-8">
					<div className="flex  items-center space-x-1">
						<Image src={LogoIcon} alt="logo" width={70} height={70}/>
						<span className="font-Inter  xl:text-4xl md:text-2xl font-bold text-NavText tracking-wide">MAVOLO</span>
					</div>
					<div className="flex items-center justify-between lg:space-x-20 md:space-x-10">
						{
							LinksText.map((text, index) => (
								<Link href="/" key={`${text}+${index}`}>
									<a className="font-Inter font-normal text-base text-LogoText  hover:text-NavTextHover cursor-pointer hover:border-b-2 hover:border-NavTextHover ">{text}
								</a>
								</Link>
								)
							)
						}
					</div>
					<Link href="/">
						<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText">Contact Us</a>
					</Link>
				</div>
			</nav>
		

		{/* Mobile Screens */}
			<nav className={`flex   md:hidden w-full px-20 md:px-24 sticky top-0 z-50 bg-[#fff] drop-shadow-sm   ${!isToggle ? "flex-col h-screen mx-0 px-24  scrollbar-hide" : ""}`}>
				<div className="flex justify-between items-center w-full">
					<div className="flex  items-center space-x-1">
						<Image src={LogoIcon} alt="logo" width={70} height={70}/>
						<span className="font-Inter text-2xl font-bold text-NavText tracking-wide">MAVOLO</span>
					</div>
					{
						isToggle ? (
							<HiMenu className="w-8 h-8 xl:w-16 xl:h-16 fill-buttonBG cursor-pointer" onClick={() => setIsToggle(false)}/>
						) : (
							<HiX className="w-8 h-8 fill-buttonBG cursor-pointer" onClick={() => setIsToggle(true)}/>
						)
					}
				</div>
				{
				!isToggle && (
						<div className="flex flex-col items-start justify-between space-y-10  my-auto sticky scrollbar-hide">
							{
								LinksText.map((text, index) => (
								<Link href="/" key={`${text}+${index}`}>
									<a className="font-Inter font-normal text-2xl text-LogoText hover:text-NavTextHover cursor-pointer hover:border-b-2 hover:border-NavTextHover">{text} </a>
								</Link>
								)
							)
							}
							<Link href="/">
												<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText">Contact Us</a>
					</Link>
					</div>
					)
				}
				
			</nav>

		</>	
	)
	
}

export default Navbar;