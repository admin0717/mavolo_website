import Image from "next/image";
import type { FC } from "react";

type StaticImageData = {
	src: string;
	height: number;
	width: number;
	blurDataURL?: string;
}

export interface PropTypes {
	img: StaticImageData;
	title: string;
	description: string;
}

const ServiceWrapper: FC<PropTypes> = ({img, title, description}: PropTypes) => {
	return (
		<>
			<div className="flex flex-col justify-center space-y-2 text-start">
				<Image src={img} alt={title} width={300} height={250} className="bg-buttonBG bg-opacity-50 rounded-xl" />
				<div>
					<div className="font-Inter text-2xl font-semibold">{title}</div>
				<div className="font-Inter text-md font-normal text-[#A6A6A6] ">{description}</div>
				</div>
			</div>
		</>
	)
}

export default ServiceWrapper;