import {
  Footer,
  Navbar,
  ProductImageCarousel,
  TitleComponent,
} from "@components";
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
    <div className="flex flex-col md:flex-row space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
      <div className="p-2 bg-[#F3F4FD] drop-shadow-lg lg:w-3/5">
        {/* <Image src={img} alt="Image1" width="400" height="350" /> */}
        <ProductImageCarousel
          imgArray={["Product1a", "Product1b", "Product1c", "Product1d"]}
        />
      </div>
      <div className="p-4 space-y-4 lg:w-2/5">
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
      <div className="container w-full scroll-smooth mx-auto">
        <Navbar />
        <TitleComponent title="Our Products" />
        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-8 md:grid-cols-1 grid-cols-1">
          <ProductCard title="10W and 12W">
            <ul className="space-y-2 list-disc list-outside pl-4">
              <li className="">Single port USB charger socket</li>
              <li>Compliant with QC 2.0 and QC 3.0</li>
              <li>
                Avaialable in 30+ varieties (Roma, Penta Modular, GM, Orient
                etc)
              </li>
            </ul>
          </ProductCard>
          <ProductCard title="18W (QCPD)" img={Product1aImage}>
            <ul className="space-y-2 list-disc list-outside pl-4">
              <li className="">Dual port USB charger socket</li>
              <li>Compliant with QC 2.3, QC 4+ and PD 3.0</li>
              <li>Available in single module Roma</li>
            </ul>
          </ProductCard>
        </div>
        <TitleComponent title="Future Products" />
        {/* <div className="mx-12 lg:mx-24 space-y-4">
          <div className="grid grid-cols-3 gap-8">
            <Image src={Product1bImage} alt="Product 3" />
            <Image src={Product2bImage} alt="Product 3" />
            <Image src={Product3aImage} alt="Product 3" />
          </div>
          <div className="font-Inter text-3xl font-semibold ">E1</div>
          <ul className="space-y-2 list-disc list-outside pl-4">
            <li>
              100W power unit compatible with all user gadgets (Mobile Phones,
              Laptops, Tablets etc)
            </li>
            <li>Compliant with PPS, PD 3.0 and QC4</li>
            <li>Physical form factor : Table/Wall mount + Adaptor</li>
            <li>Physical form factor : Table/Wall mount + Adaptor</li>
            <li>Wifi and Bluetooth Connectivity enabled</li>
            <li>
              Easy, Fast, Integrated, Portable, Small form factor, ONE stop
              solution for all your Gadget Charging need.
            </li>
          </ul>
        </div> */}
        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-8 md:grid-cols-1 grid-cols-1">
          <ProductCard title="10W and 12W">
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
          </ProductCard>
        </div>
        <Footer />
      </div>
      <FloatingWhatsApp phoneNumber={""} accountName={""} />
    </>
  );
};

export default Products;
