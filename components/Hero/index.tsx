import { HeroImage1, LineRounded } from "@images";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

const Hero: FC = () => {
	return (
		<>
			<header className="mx-24 flex flex-col justify-center items-center space-y-20 lg:space-y-0 lg:space-x-20 my-24 lg:flex-row">
				<div className="flex flex-col justify-center items-start space-y-10 lg:w-1/2">
					<div className="font-Inter font-bold lg:text-5xl text-4xl tracking-wide leading-tight">
						Relief from daily <br/>charging struggles.
					</div>
					<div className="text-center">
					<Image src={LineRounded} alt="Rounded Line"/>
					</div>
					<div className="font-Inter font-semibold text-lg tracking-tight leading-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ducimus enim harum eius iusto sunt animi ad. Reiciendis eaque facere adipisci </div>
					<div className="flex justify-center items-start space-x-8">
						<Link href="/">
											<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText">Contact Us</a>
						</Link>
						<Link href="/">
							<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText">Enquire Us</a>
						</Link>
					</div>
				</div>
				<div className="" >
					<Image src={HeroImage1} alt="HeroImage" width={400} height={400} />
				</div>
			</header>
		</>
	)
}

export default Hero