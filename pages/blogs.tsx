import { Footer, Navbar } from "@components";
import { ComingSoonImage } from "@images";
import type { NextPage } from "next";
import Image from "next/image";
import FloatingWhatsApp from "react-floating-whatsapp";

const Blogs: NextPage = () => {
  return (
    <>
      <div className="container w-full scroll-smooth mx-auto">
        <Navbar />
        <div className="flex justify-center items-center container my-auto">
          <Image src={ComingSoonImage} alt="Coming Soon" />
        </div>
        <Footer />
      </div>
      <FloatingWhatsApp
        phoneNumber={"+916355041150"}
        accountName={"Mavolo"}
        avatar="/images/WhatsappIcon.jpeg"
      />
    </>
  );
};

export default Blogs;
