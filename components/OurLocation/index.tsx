import { OurLocationImage } from "@images";
import Image from "next/image";
import type { FC } from "react";
import { HiLocationMarker } from "react-icons/hi";
import Counter from "./Counter";

const OurLocation: FC = () => {
  return (
    <>
      <div className="lg:mx-24 mx-12 my-24  lg:space-y-0">
        <h1
          className="font-Inter font-bold text-3xl w-full lg:text-4xl flex justify-start items-start mr-2  mt-10 border-b-2 border-buttonBG pb-2"
          // data-aos="fade-up"
        >
          Our Locations{" "}
        </h1>

        <div className="flex flex-col justify-center items-start space-y-3 mx-3">
          <div
            className="flex flex-col  justify-center items-center space-y-10 lg:flex-row lg:space-x-12 lg:items-start  rounded-xl  space-x-4"
            // data-aos="fade-up"
          >
            <div className="flex flex-col justify-start items-start space-y-8 w-full lg:w-1/2 my-12 mr-10">
              <Counter />
              <div>
                <ul className="space-y-4">
                  <li className="font-Inter text-lg list-disc">
                    USB masters designing products for manufacturers,
                    distributors and dealers.
                  </li>
                  <li className="font-Inter text-lg list-disc">
                    Fastest growing B2B consumer electronics marketplace.
                  </li>
                  <li className="font-Inter text-lg list-disc">
                    Optimised production and distribution channels.
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div className="font-Inter lg:text-lg text-md">
                  Our head office and production unit is in
                  <div className="flex items-center justify-start space-x-4">
                    <HiLocationMarker className="fill-[#ff0000] w-8 h-8" />
                    <div className="text-[#FF0000] font-semibold text-lg">
                      Noida (Delhi-NCR).
                    </div>
                  </div>
                </div>
                <div className="font-Inter lg:text-lg text-md">
                  We operate with manufacturers, dealers and distributors across
                  India.
                  <div className="grid grid-cols-2 ">
                    <div className="flex items-center justify-start space-x-4">
                      <HiLocationMarker className="w-8 h-8" />
                      <div className="font-semibold text-lg">Mumbai</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                      <HiLocationMarker className="w-8 h-8" />
                      <div className="font-semibold text-lg">Gujarat</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                      <HiLocationMarker className="w-8 h-8" />
                      <div className="font-semibold text-lg">Delhi (NCR)</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                      <HiLocationMarker className="w-8 h-8" />
                      <div className="font-semibold text-lg">UP</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                      <HiLocationMarker className="w-8 h-8" />
                      <div className="font-semibold text-lg">Kolkata</div>
                    </div>
                    <div className="flex items-center justify-start space-x-4">
                      <HiLocationMarker className="w-8 h-8" />
                      <div className="font-semibold text-lg">Chennai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={OurLocationImage}
              alt="Our location in India"
              width={600}
              height={750}
              className=" rounded-xl w-full lg:w-1/2"
              // data-aos="fade-up"
            />
          </div>
        </div>
        <div id="inquire"></div>
      </div>
    </>
  );
};

export default OurLocation;
