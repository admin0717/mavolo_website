import { OBMImage, ODMImage, OEMImage } from "@images";
import type { FC } from "react";
import ServiceWrapper from "./ServiceWrapper";

const Services: FC = () => {
	return (
		<>
			<div className="">
			<h1 className="mx-24 my-8 font-Inter font-bold text-3xl border-b-2 border-spacing-1 md:my-8 capitalize leading-10 tracking-wide border-blurBG text-center">Our Services</h1>
			<div className="flex flex-col justify-center items-center lg:flex-row bg-[#FFFFFF]  lg:space-x-6 space-y-8 lg:space-y-0 mx-24">
				<ServiceWrapper img={OBMImage} title="OBM" description="lorem ipsum dolor sit amet, consectetur adip "/>
				<ServiceWrapper img={ODMImage} title="ODM" description="lorem ipsum dolor sit amet, consectetur adip"/>
				<ServiceWrapper img={OEMImage} title="OEM" description="lorem ipsum dolor sit amet, consectetur adip"/>
			</div>
			</div>

		</>
)
}

export default Services;