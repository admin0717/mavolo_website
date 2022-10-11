import { InquiryImage } from "@images";
import Image from "next/image";
import type { FC } from "react";
import Form from "./Form";

const InquiryForm: FC = () => {
  return (
    <div>
      <div className="lg:mx-24 mx-12 flex flex-col justify-center items-center lg:space-x-20 lg:flex-row my-24">
        <div className="lg:w-1/2 w-full lg:ml-20 hidden lg:inline">
          <Image
            src={InquiryImage}
            alt="Inquire Us image"
            width={600}
            height={600}
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center items-start space-y-8 w-full">
          <div className="text-start">
            <h1 className="font-Inter font-bold lg:text-4xl text-3xl  ">
              Have any questions?
            </h1>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;
