import { InquiryImage } from "@images";
import Image from "next/image";
import type { FC } from "react";
import Form from "./Form";

const InquiryForm: FC = () => {
	return (
		<>
			<div className="mx-24 flex flex-col justify-center items-center lg:space-x-20 lg:flex-row">
				<div className="lg:w-1/2 w-full">
					<Image src={InquiryImage} alt="Inquire Us image" width={500} height={600} />
				</div>
				<div className="lg:w-1/2 flex flex-col justify-center items-start space-y-8 w-full">
					<div className="">
						<h1 className="font-Inter font-bold text-3xl">Have any questions?</h1>
					</div>
					<Form />
				</div>
			</div>
		</>
	)
}

export default InquiryForm;