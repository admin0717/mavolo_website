import { OBMImage, ODMImage, OEMImage } from "@images";
import type { FC } from "react";
import ServiceWrapper from "./ServiceWrapper";

const Services: FC = () => {
  return (
    <>
      <div className="lg:mx-24 mx-12">
        <div
          className=" mt-2 font-Inter font-bold text-3xl lg:text-3xl  md:mt-2 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-buttonBG"
        >
        </div>
        <div className="flex flex-col justify-center lg:items-start items-center lg:flex-row bg-[#FFFFFF]  lg:space-x-6 space-y-8 lg:space-y-0  mt-3">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="./images/Products/Rush22_V2.mp4" width={300} height={200}></iframe>

          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="./images/Products/Rush22_V2.mp4" width={300} height={200}></iframe>

          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="./images/Products/Rush22_V2.mp4" width={300} height={200} ></iframe>

          </div>
        </div>
      </div>
      <div className="lg:mx-24 mx-12">
        <h1
          className=" mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-buttonBG"
        >
          Our Services
        </h1>
        <h3
          className=" mb-8 font-Inter font-large text-lg md:text-2xl lg:text-lg md:mb-8   tracking-wide  text-start pt-2"
        >
          Collaboration is the key for a growing business and we offer different
          services like OBM, ODM and OEM to our clients.
        </h3>
        <div className="flex flex-col justify-center lg:items-start items-center lg:flex-row bg-[#FFFFFF]  lg:space-x-6 space-y-8 lg:space-y-0 ">
          <ServiceWrapper
            img={OBMImage}
            title="OBM"
            fullForm="Own brand manufacturer"
            description="Become our exclusive dealers/distributors."
          />
          <ServiceWrapper
            img={ODMImage}
            title="ODM"
            fullForm="Original Design Manufacturer"
            description="Get your custom design production ready."
          />
          <ServiceWrapper
            img={OEMImage}
            title="OEM"
            fullForm="Original Equipment Manufacturer"
            description="Get our products under your brand name (White labelling)."
          />
        </div>
      </div>
    </>
  );
};

export default Services;
