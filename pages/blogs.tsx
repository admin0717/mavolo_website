import { Footer, Navbar } from "@components";
import { ComingSoonImage } from "@images";
import type { NextPage } from "next";
import Image from "next/image";
import type { FC } from "react";

const Blogs: NextPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col justify-center items-center container my-auto">
        <Image src={ComingSoonImage} alt="Coming Soon" />
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
