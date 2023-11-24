import { Footer, ImageCarousel, Navbar, TimelineComponent, TitleComponent } from "@components";
import type { NextPage } from "next";
import FloatingWhatsApp from "react-floating-whatsapp";
import {
  Product3aImage,
  OEMImage,
  ODMImage

} from "@images";
import Image, { StaticImageData } from "next/image";
const AboutUs: NextPage = () => {
  return (
    <>
      <div className="container w-full mx-auto scroll-smooth">
        <Navbar />
        <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
          About Mavolo
        </h1>
        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">

          <div className="space-y-12 pl-4"> <Image
            src={OEMImage}
            alt="Image1"
            width="120"
            height="80"
            layout="responsive"
          />
          </div>
          <div className="space-y-12 mt-5 texthi pl-4"><p>Introducing an integrated lifestyle...<br />
            Where the fundamentals are seamlessly integrated and the flawless easy interaction can be done.
            What are fundamental for human needs?<br />
            1) Electricity<br />
            2) Water Supply<br />
            3) Fire ( Gas cylinder)<br />
            Next things<br />
            4) Charging  <br />
            5) Internet<br />
          </p>
          </div></div>
        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">

          <div className="space-y-12 mt-5 texthi  pl-4">
            <p className="mt-5">
              We are starting with integrated chargers in your vicinity for that we have visualized human interaction with its surroundings and we noticed that we charge our gadgets around our working desk and bed. So we have designed chargers which can be integrated near our desk and bedside. These chargers are smart and charge your smartphone/ gadgets optimally as per the load needed.
            </p>
          </div>
          <div className="space-y-12 pl-4 mb-5"> <Image
            src={ODMImage}
            alt="Image1"
            width="100"
            height="60"
            layout="responsive"
          />
          </div>
        </div>
        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">
          <p>
            <b> Vision:</b><br />
            Integrated lifestyle<br />
            <b> Mission:</b><br />
            is to integrate these charger units in every desk and bedside
          </p>
        </div>
      </div>
      <FloatingWhatsApp phoneNumber={""} accountName={""} />
    </>
  );
};

export default AboutUs;
