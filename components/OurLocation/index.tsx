import { OurLocationImage } from "@images";
import Image from "next/image";
import type { FC } from "react";

const OurLocation: FC = () => {
	return (
		<>
			<div className="mx-24 flex flex-col my-24 justify-center items-center space-y-10 lg:flex-row lg:space-x-12 lg:items-center  rounded-xl">
				<h1 className="font-Inter font-bold text-3xl w-1/2 lg:text-7xl flex flex-row lg:flex-col items-start justify-center  mt-10 lg:pl-8 lg:ml-4" data-aos="fade-up">Our <span className="lg:border-b-8 border-b-4 ml-4 lg:ml-0">Locations</span> </h1>
				<Image src={OurLocationImage} alt="Our location in India" width={600} height={750} className=" rounded-xl w-1/2" data-aos="fade-up"/>
			</div>
		</>
	)
}

export default OurLocation;