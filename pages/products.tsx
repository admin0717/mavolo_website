import { Navbar } from "@components";

import {
  Product1bImage,
  Product1dImage,
  Product2cImage,
  Product2aImage,
  Product2bImage,
  Product3aImage,
  Product4aImage,
  Product1cImage,
  Product1aImage,
  Product5cImage,
  Product6cImage,
  Product7Image,

} from "@images";
import type { NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import type { FC } from "react";
import FloatingWhatsApp from "react-floating-whatsapp";

export interface ProductCardType {
  title: String;
  children: React.ReactNode;
}

export const ProductCard: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product1bImage}
          alt="Image1"
          width="200"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const ProductCard2: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product1aImage}
          alt="Image1"
          width="200"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const ProductCard5: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product1cImage}
          alt="Image1"
          width="200"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const ProductCard8: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product2bImage}
          alt="Image1"
          width="200"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const ProductCard6: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product2bImage}
          alt="Image1"
          width="200"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
}; export const ProductCard7: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product1dImage}
          alt="Image1"
          width="200"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const ProductCard3: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product3aImage}
          alt="Image1"
          width="250"
          height="150"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4 ">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export const ProductCard4: FC<ProductCardType> = ({
  title,
  children,
}: ProductCardType) => {
  return (
    <div className="flex flex-col space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
        <Image
          src={Product4aImage}
          alt="Image1"
          width="200"
          height="120"
          layout="responsive"
        />
      </div>
      <div className="p-4 space-y-4">
        <div className="font-Inter text-3xl tracking-wide leading-7 font-semibold text-start flex-start bg-button">
          {title}
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

const Products: NextPage = () => {
  return (
    <>
      {/* bg-[url('/images/Products/Product1c.jpeg')] bg-contain bg-no-repeat */}
      {/* bg-gradient-to-r from-[#59bf98] to-[#c8eadd] */}

      <div className="container w-full scroll-smooth mx-auto bg-gradient-to-r from-blurBG to-buttonBG pb-16">
        <Navbar />
        <div className="space-y-12">
          <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
            Our Products in Market
          </h1>
          <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-8 md:grid-cols-1 grid-cols-1">
            <ProductCard title="10W and 12W">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">Brand Anchor Single port USB charger socket</li>
                <li>Connector Type	USB</li>
                <li>Compatible Devices	PC</li>
                <li>Compatible Phone Models	Usb</li>
                <li> Included Components	1 Piece Roma Modular 2.4amp USB Charger 5000 mA 5V Dc</li>
                <li>Special Feature	Fast Charging</li>
                <li> Colour	White</li >
                <li> Input Voltage	220 Volts</li >
                <li>Mounting Type	Box</li >
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>
                  Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                  etc)
                </li>
              </ul>
            </ProductCard>
            <ProductCard2 title="10W and 12W">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">Brand Anchor Single port USB charger socket</li>
                <li>Connector Type	USB</li>
                <li>Compatible Devices	PC</li>
                <li>Compatible Phone Models	Usb</li>
                <li> Included Components	1 Piece Roma Modular 2.4amp USB Charger 5000 mA 5V Dc</li>
                <li>Special Feature	Fast Charging</li>
                <li> Colour	White</li >
                <li> Input Voltage	220 Volts</li >
                <li>Mounting Type	Box</li >
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>
                  Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                  etc)
                </li>
              </ul>
            </ProductCard2>
            <ProductCard8 title="10W and 12W">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">Brand Anchor Single port USB charger socket</li>
                <li>Connector Type	USB</li>
                <li>Compatible Devices	PC</li>
                <li>Compatible Phone Models	Usb</li>
                <li> Included Components	1 Piece Roma Modular 2.4amp USB Charger 5000 mA 5V Dc</li>
                <li>Special Feature	Fast Charging</li>
                <li> Colour	White</li >
                <li> Input Voltage	220 Volts</li >
                <li>Mounting Type	Box</li >
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>
                  Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                  etc)
                </li>
              </ul>
            </ProductCard8>
            <ProductCard7 title="10W and 12W">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">Brand Anchor Single port USB charger socket</li>
                <li>Connector Type	USB</li>
                <li>Compatible Devices	PC</li>
                <li>Compatible Phone Models	Usb</li>
                <li> Included Components	1 Piece Roma Modular 2.4amp USB Charger 5000 mA 5V Dc</li>
                <li>Special Feature	Fast Charging</li>
                <li> Colour	White</li >
                <li> Input Voltage	220 Volts</li >
                <li>Mounting Type	Box</li >
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>
                  Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                  etc)
                </li>
              </ul>
            </ProductCard7>
            <ProductCard5 title="10W and 12W">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">Brand Anchor Single port USB charger socket</li>
                <li>Connector Type	USB</li>
                <li>Compatible Devices	PC</li>
                <li>Compatible Phone Models	Usb</li>
                <li> Included Components	1 Piece Roma Modular 2.4amp USB Charger 5000 mA 5V Dc</li>
                <li>Special Feature	Fast Charging</li>
                <li> Colour	White</li >
                <li> Input Voltage	220 Volts</li >
                <li>Mounting Type	Box</li >
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>
                  Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                  etc)
                </li>
              </ul>
            </ProductCard5>
            <ProductCard6 title="18W (QCPD)">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">Dual port USB charger socket</li>
                <li>Compliant with QC 2.3, QC 4+ and PD 3.0</li>
                <li>Available in single module Roma</li>
              </ul>
            </ProductCard6>
          </div>
          <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
            Future Products
          </h1>

          <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-8 md:grid-cols-1 grid-cols-1">
            <ProductCard3 title="E1">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">
                  {" "}
                  Physical form factor : Table/Wall mount + Adaptor
                </li>
                <li>Compliant with QC 2.0 and QC 3.0</li>
                <li>Wifi and Bluetooth Connectivity enabled</li>
                <li>
                  Easy, Fast, Integrated, Portable, Small form factor, ONE stop
                  solution for all your Gadget Charging need.
                </li>
              </ul>
            </ProductCard3>
            <ProductCard4 title="Casette">
              <ul className="space-y-2 list-disc list-outside pl-4">
                <li className="">
                  {" "}
                  USB cable wrapped around self rollable cylinder. These
                  cassettes will greatly improve USB cable handling.
                </li>
                <li>Push Pull Recoil mechanism for all new user experience.</li>
                <li>Cable rolls back with the release of lock.</li>
              </ul>
            </ProductCard4>
          </div>
          <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
            USP
          </h1>
          <ul className="space-y-2 list-disc list-outside pl-4 mx-12 lg:mx-24">
            <li className="">
              {" "}
              Increase consumer productivity and reduce charge anxiety
            </li>
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
      <FloatingWhatsApp
        phoneNumber={"+916355041150"}
        accountName={"Mavolo"}
        avatar="/images/WhatsappIcon.jpeg"
      />
    </>
  );
};

export default Products;
