import { Footer, Navbar } from "@components";
import { ComingSoonImage } from "@images";
import type { NextPage } from "next";
import type { FC } from "react";
import Image from "next/image";
import FloatingWhatsApp from "react-floating-whatsapp";
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
                            Products USB 12W  USB  Charger
                        </h1>
                        <div className="space-y-2 list-disc list-outside pl-4">
                            <h1 className="ph1 font-bold text-3xl lg:text-3xl"><b>Mavolo USB 12W</b></h1>
                            <h2 className="ph1"><b>Modular USB Fast Charging Socket</b></h2>
                        </div>
                        <div className="mx-12 lg:mx-24 grid">
                            <h4 className="space-y-12"><b>A Solution for Integrated Lifestyle</b></h4>
                            <p className="space-y-12">
                                Rush is designed to seamlessly integrate into your lifestyle. Experience the powerful charging at your bedside and workspace. it's a solution that redefines convenience, efficiency, and safety in charging your devices.
                            </p></div>
                        <div className="space-y-2 list-disc list-outside pl-4  producttext">

                            <Image
                                src={Product1bImage}
                                alt="Image1"
                                width="200"
                                height="160"
                                layout="responsive"
                            />
                            <div>
                                <div className=""><h2 className="ph1 mt-2">High-Speed Charging </h2></div>
                                <p className="ph1 mt-5">Gives you the power to charge your smartphone from 0-50% in under 30 minutes.
                                    15 min charge = 3+hours of video experience
                                </p>
                            </div>

                        </div>
                        <div className="space-y-2 list-disc list-outside pl-4  producttext">


                            <div>
                                <div className=""><h2 className="ph1 mt-2">Rush Technology </h2><h3>Smart   Reliable    Efficient
                                </h3></div>
                                <p className="ph1 mt-5">Keep your mind at ease and let it charge your device. Smartly optimizes power using all the industry-leading charging protocols. It does a handshake with the target device before charging, ensuring efficient and reliable power delivery, and cuts off the current when the battery reaches 100% SOC.
                                </p>
                            </div>
                            <Image
                                src={Product1bImage}
                                alt="Image1"
                                width="200"
                                height="160"
                                layout="responsive"
                            />
                        </div>
                        <div className="space-y-2 list-disc list-outside pl-4  producttext">

                            <Image
                                src={Product1bImage}
                                alt="Image1"
                                width="200"
                                height="160"
                                layout="responsive"
                            />
                            <div>
                                <div className=""><h1 className="ph1 mt-2">Small yet Powerful</h1></div>
                                <p className="ph1 mt-5">Designed to fit seamlessly into any standard electricity socket in your home, The sleek and modern design seamlessly integrates into your room's decor.
                                </p>
                            </div>

                        </div>
                        <div className="space-y-2 list-disc list-outside pl-4  producttext">


                            <div className="ph1 mt-2">
                                <div className=""><h1 className="ph1 mt-2">Not just a phone Charger
                                </h1></div>
                                <p className="ph1 mt-5">Embracing All Your Gadgets. From smartphones to smartwatches, headphones to tablets, it's your go-to power source for everything USB; eliminating the need for multiple chargers cluttering your space.
                                </p>
                            </div>
                            <Image
                                src={Product1bImage}
                                alt="Image1"
                                width="200"
                                height="160"
                                layout="responsive"
                            />
                        </div>
                        <div className="space-y-2 list-disc list-outside pl-4  producttext">

                            <Image
                                src={Product1bImage}
                                alt="Image1"
                                width="200"
                                height="160"
                                layout="responsive"
                            />
                            <div className="ph1 mt-2">
                                <div className=""><h2 className="ph1 mt-2">Relax & Charge</h2></div>
                                <p className="ph1 mt-5">Rush is a reliable guardian of your devices. With Surge, Overheating, Overvaltage, and Short-Circuit Safeguards, Your Gadgets Stay Securely Charged.
                                </p>
                            </div>

                        </div>

                        <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
                            Products Description
                        </h1>
                        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">
                            <p>Imagine the convenience of having the luxury of charging at your bedside and office table. USB 12W is an evolved modular USB Charger socket that sits into any standard electricity socket at your bedside and understands your device's needs, engaging in a digital handshake to ensure the most optimal charging. You can increase your productivity without having to worry about device safety, charging time, and cluttering wires. USB 12W is a compact powerhouse designed to elevate your charging experience to new heights.</p>

                            <p> <b> What is Rush</b> <br />It is an approach to charging that combines intelligence, efficiency and safety. By encompassing advanced features like communication with devices, auto cutoff, and a comprehensive array of protective measures, Rush Technology is poised to transform the way we charge our devices, providing a hassle-free and secure charging experience that meets the demands of modern technology.. Here's how Rush Technology stands out:</p>

                        </div>
                        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">
                            <p>1. Comprehensive Charging Protocols: Rush Technology incorporates all the industry-leading charging protocols like PPS(Programmable Power Supply), PD(Power Delivery), and QC(Quick charge), ensuring that it can adapt to the specific needs of a wide array of devices and charge them faster.</p> <p>2. Device Communication: Before initiating the charging process, Rush performs a digital handshake with the target device. This intelligent communication ensures efficient and optimized fast charging, delivering the right power to your device. Your device and charger work together seamlessly to provide the best possible charging conditions.</p>
                            <p>
                                3. Auto Cut Off: Rush is equipped with an auto-cutoff feature that activates when the battery reaches 100% State of Charge (SOC). This safeguard prevents overcharging, which ensures the long-term health of your device's battery and also helps conserve energy.
                            </p>
                            <p>4. Ripple-Free Voltage: Dual input and output filters are integrated into Rush Technology, for a steady and ripple-free output voltage. This ensures that your devices are charged smoothly and efficiently without voltage fluctuations that could cause damage or slow down the charging process. </p>


                            <p>5. Efficient Power Switching: Fast switch synchronous rectifiers are employed in Rush Technology to manage power switching effectively. It optimizes the power transfer, reducing energy wastage and ensuring that your charging process is efficient.</p>

                            <p>6. Comprehensive Protection: Safety is a top priority with Rush. It offers protection against a range of potential issues, including Over Voltage (OV), Over Current (OC), Under Voltage (UC), surge protection, and thermal management. These safeguards ensure that your devices remain secure and free from damage during the charging process. Therefore leading to amazing thermal performance.</p>

                        </div>
                        <div className="mx-12 lg:mx-24 grid lg:grid-cols-2 gap-2 md:grid-cols-1 grid-cols-1">
                            <p>
                                But we didn't stop there USB 12W design has been optimised for a multitude of applications. It is not limited to a single type of device or scenario but can be seamlessly integrated into a wide range of modular socket plates and charging setups, making it adaptable and suitable for a wide range of use cases.
                            </p>
                            <p>And when it comes to space, we understand the value of it. Our compact and space-saving design ensures that this device fits seamlessly into your home or workspace, maximizing convenience without taking up valuable room.
                            </p>
                            <p>It's time to get rid of tangled cables, bulky charging bricks, and the frustration of incompatible chargers. Enjoy the luxury of charging at your bedside and work table and experience power, efficiency, and safety like never before. Join the rush revolution today
                            </p>
                        </div>
                        <h1 className="mx-12 lg:mx-24 mt-8 font-Inter font-bold text-3xl lg:text-3xl  md:mt-8 capitalize leading-10 tracking-wide  text-start border-b-2 pb-2 border-[#000]">
                            FAQs
                        </h1>
                        <ul className="space-y-2 list-disc list-outside pl-4 mx-12 lg:mx-24">
                            <li className="">
                                {" "}
                                Q1: Can I get this product under our brand name?
                                Yes, we offer different services like OBM, ODM, and OEM to our clients. Please contact us on the below-mentioned details.

                            </li>
                            <li>
                                Q2: Is this product BIS certified, can I rely upon it?
                                Yes, It is BIS-certified and completely safe and sound.

                            </li>
                            <li>
                                Q3: Where can I find USB 12W and purchase it for my charging needs?
                                USB 12W is delivered after you book from our website. Use the link to order now.

                            </li>
                            <li>Q3: Is it available all over India?
                                Yes, we have a presence all over India and have been supplying businesses and users for the last 5 years.
                            </li>
                            <li>Q4: Can it fit into my existing electricity socket module?
                                Yes, It fits seamlessly into your standard electricity socket, available in popular variants.
                            </li>
                            <li>Q5: Can it charge my Bluetooth speaker?
                                Absolutely! USB 12W is compatible with Everything that uses USB charging. Whether you need it for your smartphone, tablet, smartwatch, or other gadgets
                            </li>
                            <li>Q6: What is the significance of power switching in USB 12W?
                                It helps in efficiency. USB 12W uses fast-switch synchronous rectifiers to manage power switching effectively. This optimizes the transfer of power, reducing energy wastage t. It contributes to faster charging times and lower energy consumption.
                            </li>
                            <p>Collaboration is the key to a growing business and we offer different services like OBM, ODM, and OEM to our clients.
                            </p>
                        </ul>
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
