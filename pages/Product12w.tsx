import { Footer, Navbar } from "@components";
import { ComingSoonImage } from "@images";
import type { NextPage } from "next";
import type { FC } from "react";
import Image from "next/image";
import FloatingWhatsApp from "react-floating-whatsapp";
import {
    Product1bImage,


} from "@images";
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
            <div className="bg-[#F3F4FD] drop-shadow-lg m-8" >
                <Image
                    src={Product1bImage}
                    alt="Image1"
                    width="200"
                    height="160"
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

const Blogs: NextPage = () => {
    return (
        <>
            <div className="flex flex-col  space-y-2 rounded-xl bg-[#fff] border-2 border-blurBG">
                <div className="p-2 bg-[#F3F4FD] drop-shadow-lg m-8">
                    <div className="space-y-12">
                        <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
                            Mavolo 12W Modular Charger - Your default USB

                        </h1>
                        <div className="space-y-2 list-disc list-outside pl-4">
                            <p className="text-center">At Mavolo, we understand the critical role that reliable charging solutions play in enhancing the daily lives of your customers. Presenting you our industry-leading product, the Mavolo 12W Modular Charger – setting the standard as the default USB for home and offices.
                            </p>
                        </div>
                        <div className="">
                            <p className="space-y-12 pl-4"><b>Unmatched Compatibility:</b> It is compatible with every phone and device like headphones, smartwatches and Bluetooth speakers, ensuring a universal charging experience without any compatibility hassles.</p></div>

                        <div>
                            <p className="space-y-12 mt-5 pl-4"><b>Rapid Power Boost:</b> Elevate your charging game with Mavolo&apos;s powerful 12 Watts supply and 2.4 Amps current output, delivering fast charging for all your devices.
                            </p>
                        </div>
                        <div>
                            <p className="space-y-12 mt-5 pl-4 "><b>Intelligent Charging, Absolute Security:</b>  Mavolo combines controlled charging with top-tier thermal performance, offering you a worry-free, secure charging experience every time.                                </p>
                        </div>
                        <div>
                            <p className="space-y-12 mt-5 pl-4"><b>
                                Advanced Security Features: </b> We prioritize the safety of your devices. Mavolo is equipped with an array of security features:<br />
                                - Auto cutoff at 100% state of charge to prevent battery swelling<br />
                                - Over-voltage protection<br />
                                - Under-voltage protection<br />
                                - Overcurrent protection<br />
                                - Overload protection<br />
                                - Signal noise immunity<br />
                            </p>
                            <div>
                                <p className="space-y-12 mt-5 pl-4"><b>Tailored to Your Brand:</b>
                                    Choose Mavolo in modular variants and customise the colour to match your brand&apos;s aesthetic – making it more than just a charger but an extension of your brand identity.<br />
                                    Secure Packaging: The product arrives at your doorstep in an anti-static pouch, ensuring that it reaches you in perfect condition. No more worries about damages during transportation.
                                </p>
                                <br />
                                <p className="space-y-12 mt-5 pl-4">
                                    Make the smart choice for your brand. Choose Mavolo – the USB charger that goes beyond convenience to elevate your brand value. Power up your devices effortlessly, and let Mavolo be the silent ambassador of your brand&apos;s reliability.
                                </p>
                            </div>
                        </div>
                    </div>
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

export default Blogs;
