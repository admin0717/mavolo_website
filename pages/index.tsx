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

import { OurLocationImage } from "@images";
import AOS from "aos";
import "aos/dist/aos.css";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  const [isToggle, setIsToggle] = useState(false);
  useEffect(() => {
    AOS.init({ startEvent: "load" });
    AOS.refreshHard();
  }, []);

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
        <FloatingWhatsApp phoneNumber={""} accountName={""} />
      </div>
    </>
  );
};

export default Home;
