import { InquiryImage } from "@images";
import Image from "next/image";
import type { FC } from "react";
import Form from "./Form";

const InquiryForm: FC = () => {
	return (
		<>
			<div className="mx-24 flex flex-col justify-center items-center lg:space-x-20 lg:flex-row my-24">
				<div className="lg:w-1/2 w-full lg:ml-20">
					<Image src={InquiryImage} alt="Inquire Us image" width={800} height={1000} />
				</div>
				<div className="lg:w-1/2 flex flex-col justify-center items-center space-y-8 w-full">
					<div className="">
						<h1 className="font-Inter font-bold text-4xl text-buttonBG ">Have any questions?</h1>
					</div>
					<Form />
				</div>
			</div>
		</>
	)
}

export default InquiryForm;