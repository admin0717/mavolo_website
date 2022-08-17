import { OBMImage, ODMImage, OEMImage } from "@images";
import type { FC } from "react";
import ServiceWrapper from "./ServiceWrapper";

const Services: FC = () => {
	return (
		<>
			<div className="mx-24">
			<h1 className=" my-8 font-Inter font-bold text-3xl  md:my-8 capitalize leading-10 tracking-wide border-blurBG text-start md:w-1/2 border-b-2 border-b-blurBG ">Our Services</h1>
			<div className="flex flex-col justify-center lg:items-start items-center lg:flex-row bg-[#FFFFFF]  lg:space-x-6 space-y-8 lg:space-y-0 ">
				<ServiceWrapper img={OBMImage} title="OBM" description="lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip"/>
				<ServiceWrapper img={ODMImage} title="ODM" description="lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip"/>
				<ServiceWrapper img={OEMImage} title="OEM" description="lorem ipsum dolor sit amet, consectetur adip "/>
			</div>
			</div>

		</>
)
}

export default Services;