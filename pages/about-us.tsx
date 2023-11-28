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
          <div className="space-y-12 mt-5 texthi pl-4"><p>Mavolo is creating an integrated lifestyle where the fundamentals are seamlessly integrated and the flawless easy interaction can be done.<br />
            We believe that the fundamentals for human needs are:<br />
            Electricity<br />
            Water Supply<br />
            Fire (Gas cylinder)<br />
            Charging<br />
            Internet<br />

          </p>
          </div></div>
        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">

          <div className="space-y-12 mt-5 texthi  pl-4">
            <p className="mt-5">
              We are starting with integrated chargers in your vicinity. We have visualized human interaction with its surroundings and we noticed that we charge our gadgets around our working desk and bed. So we have designed chargers which can be integrated near our desk and bedside. These chargers are smart and charge your smartphone/ gadgets optimally as per the load needed.
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
          <p className="mb-3">
            <b> Vision:</b><br />
            Integrated lifestyle<br />
            <b> Mission:</b><br />
            To integrate these charger units in every desk and bedside
          </p></div>
        <div className="space-y-12 mt-3">
          <p><b>Why Mavolo?</b></p>
          <p className=" mb-5">At Mavolo, we believe that everyone deserves to have access to the latest technology and the best possible charging experience. That&apos;s why we&apos;re developing innovative integrated chargers that are smart, efficient, and easy to use.
            <br />  <br />Our chargers are designed to be integrated into your home or office environment, so you can charge your devices wherever you are. They&apos;re also equipped with smart features that optimize charging performance and protect your devices from damage.
            <br /> <br />We&apos;re committed to providing our customers with the best possible charging experience. That&apos;s why we offer a wide range of chargers to choose from, as well as a variety of support options.
            <br /> <br />Join the Mavolo movement today and experience the future of charging.</p ><br /> <br />
        </div >
      </div >
      <FloatingWhatsApp phoneNumber={""} accountName={""} />
    </>
  );
};

export default AboutUs;
