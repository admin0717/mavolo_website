import {
  Footer,
  Hero,
  InquiryForm,
  Navbar,
  OurLocation,
  Services,
} from "@components";
import { useEffect, useState } from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <>
      <div className="container w-fit mx-auto scroll-smooth">
        <Navbar />
        <Hero />
        <Services />
        <OurLocation />
        <InquiryForm />
        <Footer />
      </div>
      <div className="z-80">
        <FloatingWhatsApp
          phoneNumber={"+916355041150"}
          accountName={"Mavolo"}
          avatar="/images/WhatsappIcon.jpeg"
        />
      </div>
    </>
  );
};

export default Home;
