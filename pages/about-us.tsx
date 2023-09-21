import { Footer, Navbar, TimelineComponent, TitleComponent } from "@components";
import type { NextPage } from "next";
import FloatingWhatsApp from "react-floating-whatsapp";

const AboutUs: NextPage = () => {
  return (
    <>
      <div className="container w-full mx-auto scroll-smooth">
        <Navbar />
        <div className=" lg:mx-24  text-start font-bold abouttxt border-b-2 mx-10 capitalize">
          About Mavolo
        </div>
        <div className="lg:mx-24 mx-12 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
          <p>
            Introducing an integrated lifestyle...<br />

            Where the fundamentals are seamlessly integrated and the flawless easy interaction can be done.
            What are fundamental for human needs?<br />
            1) Electricity<br />
            2) Water Supply<br />
            3) Fire ( Gas cylinder)<br />
            4) Next things<br />
            5) Charging  <br />
            6) Internet<br />

            We are starting with integrated chargers in your vicinity for that we have visualized human interaction with its surroundings and we noticed that we charge our gadgets around our working desk and bed. So we have designed chargers which can be integrated near our desk and bedside. These chargers are smart and charge your smartphone/ gadgets optimally as per the load needed.
            <br />
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
