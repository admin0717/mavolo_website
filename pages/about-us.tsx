import { Footer, Navbar, TitleComponent } from "@components";
import type { NextPage } from "next";

const AboutUs: NextPage = () => {
  return (
    <>
      <Navbar />
      <TitleComponent title="About Us" />
      <Footer />
    </>
  );
};

export default AboutUs;
