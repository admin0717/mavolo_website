import { ImageCarousel } from "@components";
import { HeroImage1, LineRounded } from "@images";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Hero: FC = () => {
	return (
		<>
			<header className="mx-24 flex flex-col justify-center items-start space-y-20 lg:space-y-0 lg:space-x-20 mt-20 mb-24 lg:flex-row relative ">
				<div className="flex flex-col justify-center items-start space-y-8 lg:w-1/2">
					<div className="font-Inter font-bold lg:text-5xl text-4xl tracking-wide leading-tight">
					 <span className="text-buttonBG">Relief</span> from daily <br/>charging struggles.
					</div>
					<div className="text-center">
					<Image src={LineRounded} alt="Rounded Line"/>
					</div>
					<div className="font-Inter font-bold lg:text-2xl md:text-xl text-md tracking-wide leading-tight">
						Say YES to clutter-free style of living.
					</div>
					<div className="font-Inter font-large  text-sm lg:text-md  leading-6 tracking-wide">Experience seamless charging and overcome the hassle of multiple chargers with the single point integrated charging solution which comes with compatible, compact and fast charging design.</div>
					<div className="flex justify-center items-start space-x-8">
						<Link href="/">
											<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">Explore</a>
						</Link>
						<Link href="#inquire">
							<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText px-4">Inquire</a>
						</Link>
					</div>
				</div>
				<div className="">
					<Image src={HeroImage1} alt="HeroImage" width={400} height={400} />
				</div>
			</header>
		</>
	)
}

export default Hero