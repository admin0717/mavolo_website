import { OurLocationImage } from "@images";
import Image from "next/image";
import type { FC } from "react";

const OurLocation: FC = () => {
	return (
		<>
			<div className="mx-24 flex flex-col my-24 justify-center items-start space-y-10 lg:flex-row lg:space-x-10 lg:items-center bg-buttonBG rounded-xl">
				<h1 className="font-Inter font-bold text-3xl w-1/2 lg:text-7xl flex flex-row lg:flex-col items-start justify-center text-[#fff]">Our <span className="border-b-4">Locations</span> </h1>
				<Image src={OurLocationImage} alt="Our location in India" width={500} height={700} className="bg-buttonBG rounded-xl w-1/2"/>
			</div>
		</>
	)
}

export default OurLocation;