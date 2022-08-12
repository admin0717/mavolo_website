import { HeroImage1, LineRounded } from "@images";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Hero: FC = () => {
	return (
		<>
			<header className="flex flex-col justify-center items-center z-10 mx-10 md:flex-row md:justify-start md:items-start md:h-screen md:my-auto md:space-x-20 container">
				<div className="flex flex-col justify-center items-center text-center space-y-6 h-full md:w-1/2 md:items-start md:justify-start md:text-start md:mt-16 my-20 ">
					<div className="font-Inter tracking-wide text-3xl font-bold text-NavTextHover leading-relaxed">
						Lorem ipsum, dolorsit amet consectetur adipisicing elit.
					</div>
					<div className="my-6">
					<Image src={LineRounded} alt="Rounded Line"/>
					</div>
					<div className="font-Inter text-sm font-large text-NavTextHover">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus enim harum eius iusto sunt animi ad. Reiciendis eaque facere adipisci </div>
					{/* <Link href="/">
						<a className="font-Inter font-normal text-xl md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText xl:text-3xl">Lorem</a>
					</Link> */}
					<Link  href="/">
						<a className="font-Inter font-normal text-xl md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText xl:text-3xl">Contact Us</a>
					</Link>
				</div>
				<div className="md:w-1/2 bg-transparent drop-shadow-sm">
					<Image src={HeroImage1} alt="HeroImage" width={400} height={400} />
				</div>
			</header>
		</>
	)
}

export default Hero