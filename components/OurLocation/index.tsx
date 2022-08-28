import { OurLocationImage } from "@images";
import Image from "next/image";
import type { FC } from "react";
import Counter from "./Counter";

const OurLocation: FC = () => {
  return (
    <>
      <div className="mx-24 my-24 space-y-12 lg:space-y-0">
        <h1
          className="font-Inter font-bold text-3xl w-full lg:text-4xl flex justify-start items-start mr-2  mt-10  border-b-2 border-buttonBG pb-2"
          data-aos="fade-up">
          Our Locations{" "}
        </h1>

        <div className="flex flex-col justify-center items-start space-y-3 mx-3">
          <div className="flex flex-col  justify-center items-center space-y-10 lg:flex-row lg:space-x-12 lg:items-start  rounded-xl  space-x-4">
            <div className="flex flex-col justify-between items-start space-y-8 w-full lg:w-1/2 my-auto mr-10">
              <Counter />
              <div>
                <div className="font-Inter lg:text-2xl text-md 	font-semibold">
                  Our head office and production unit is in{" "}
                  <span className="text-[#FF0000] font-bold border-b-2">
                    Noida (Delhi-NCR).
                  </span>
                </div>
                <div className="font-Inter lg:text-2xl text-md font-semibold">
                  We operate with manufacturers, dealers and distributors across
                  India.
                </div>
              </div>
              <div>
                <div className="font-Inter lg:text-lg text-md 	font-semibold">
                  Our head office and production unit is in{" "}
                  <span className="text-[#FF0000] font-semibold border-b-2">
                    Noida (Delhi-NCR).
                  </span>
                </div>
                <div className="font-Inter lg:text-lg text-md font-semibold">
                  We operate with manufacturers, dealers and distributors across
                  India.
                </div>
              </div>
            </div>
            <Image
              src={OurLocationImage}
              alt="Our location in India"
              width={600}
              height={750}
              className=" rounded-xl w-full lg:w-1/2"
              data-aos="fade-up"
            />
          </div>
        </div>
        <div id="inquire"></div>
      </div>
    </>
  );
};

export default OurLocation;
