import { InquiryImage } from "@images";
import Image from "next/image";
import type { FC } from "react";
import Form from "./Form";

const InquiryForm: FC = () => {
	return (
		<>
			<div className="mx-24 flex justify-center items-center space-x-20">
				<Image src={InquiryImage} alt="Inquire Us image" width={500} height={600} className="w-full"/>
				<Form />
			</div>
		</>
	)
}

export default InquiryForm;