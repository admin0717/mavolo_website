import { Navbar, TitleComponent } from "@components";
import {
  Product1aImage,
  Product1bImage,
  Product1cImage,
  Product1dImage,
  Product2aImage,
  Product2bImage,
  Product2cImage,
  Product3aImage,
  Product4aImage,
} from "@images";
import type { NextPage } from "next";
import Image from "next/image";
import FloatingWhatsApp from "react-floating-whatsapp";

const Products: NextPage = () => {
  return (
    <>
      <div className="container w-full scroll-smooth mx-auto">
        <Navbar />
        <TitleComponent title="Our Products" />
        <div className="lg:mx-24 mx-12 font-Inter space-y-2">
          <div className="text-2xl font-semibold">
            We have 3 major products.
          </div>
          <ul className="text-lg font-normal list-disc mx-10">
            <li>USB 10W</li>
            <li>USB 12W</li>
            <li>USB 18W</li>
          </ul>
        </div>
        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize my-8">
          10W and 12 W
        </div>
        <div className="lg:mx-24 mx-12 flex flex-col justify-center items-center lg:space-x-12 lg:flex-row my-24">
          <div
            className="lg:w-1/3 w-full lg:ml-10 lg:inline"
            data-aos="fade-up">
            <Image
              src={Product1dImage}
              alt="Inquire Us image"
              width={250}
              height={250}
            />
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-start space-y-8 w-full">
            <div className="my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
              <ul className="font-Inter lg:text-xl text-xl space-y-4 list-disc list-outside">
                <li>Single port USB charger socket</li>
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>
                  Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                  etc)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize my-8">
          18W (QCPD)
        </div>

        <div className="lg:mx-24 mx-12 flex flex-col justify-center items-center lg:space-x-12 lg:flex-row-reverse my-24">
          <div
            className="lg:w-1/3 w-full lg:ml-10 lg:inline"
            data-aos="fade-up">
            <Image
              src={Product2cImage}
              alt="Inquire Us image"
              width={250}
              height={250}
            />
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-start space-y-8 w-full">
            <div className="my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
              <ul className="font-Inter lg:text-xl text-xl space-y-4 list-disc list-outside">
                <li>Dual port USB charger socket</li>
                <li>Compliant with QC 2.3, QC 4+ and PD 3.0</li>
                <li>Available in single module Roma</li>
              </ul>
            </div>
          </div>
        </div>

        <TitleComponent title="Future Products" />
        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize my-8">
          E1
        </div>
        <div className="lg:mx-24 mx-12 flex flex-col justify-center items-center lg:space-x-12 lg:flex-row my-24">
          <div
            className="lg:w-1/3 w-full lg:ml-10 lg:inline"
            data-aos="fade-up">
            <Image
              src={Product1dImage}
              alt="Inquire Us image"
              width={250}
              height={250}
            />
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-start space-y-8 w-full">
            <div className="my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
              <ul className="font-Inter lg:text-xl text-xl space-y-4 list-disc list-outside">
                <li>
                  100W power unit compatible with all user gadgets (Mobile
                  Phones, Laptops, Tablets etc)
                </li>
                <li>Compliant with PPS, PD 3.0 and QC4</li>
                <li>Physical form factor : Table/Wall mount + Adaptor</li>
                <li>Wifi and Bluetooth Connectivity enabled</li>
                <li>
                  Easy, Fast, Integrated, Portable, Small form factor, ONE stop
                  solution for all your Gadget Charging need.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize my-8">
          Cassette
        </div>
        <div className="lg:mx-24 mx-12 flex flex-col justify-center items-center lg:space-x-12 lg:flex-row-reverse my-24">
          <div
            className="lg:w-1/3 w-full lg:ml-10 lg:inline"
            data-aos="fade-up">
            <Image
              src={Product4aImage}
              alt="Inquire Us image"
              width={250}
              height={250}
            />
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center items-start space-y-8 w-full">
            <div className="my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
              <ul className="font-Inter lg:text-xl text-xl space-y-4 list-disc list-outside">
                <li>
                  USB cable wrapped around self rollable cylinder. These
                  cassettes will greatly improve USB cable handling.
                </li>
                <li>Push Pull Recoil mechanism for all new user experience.</li>
                <li>Cable rolls back with the release of lock.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize my-8">
          USP
        </div>
        <div className="lg:mx-24 mx-12 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
          <ul className="font-Inter lg:text-xl text-xl space-y-4 list-disc list-outside lg:ml-10">
            <li>Increase consumer productivity and reduce charge anxiety</li>
            <li>
              FAST access to reliable power : Current configuration with each
              device before pumping charge
            </li>
            <li>
              Saves tons of E-waste : With E1 vision unnecessary charger waste
              will reduce
            </li>
            <li>Connectivity : Keep your devices connected and alive.</li>
          </ul>
        </div>
      </div>
      <FloatingWhatsApp phoneNumber={""} accountName={""} />
    </>
  );
};

export default Products;
