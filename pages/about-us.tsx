import { Footer, Navbar, TitleComponent } from "@components";
import type { NextPage } from "next";

const AboutUs: NextPage = () => {
  return (
    <>
      <Navbar />
      <TitleComponent title="About Us" />
      <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize">
        Our Story
      </div>
      <div className="mx-24 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-justify">
        <p>
          The world is moving at such a faster pace that we often overlook the
          small hurdles in our way and don&#39;t realize that somehow it is
          slowing us. Walking on a road full of potholes makes you reroute
          yourself after every few steps. What if we minimize them so that you
          reach your destination much ahead of time and then realize how much of
          time and energy you were losing in between &#39;unknowingly&#39;.
        </p>
        <p>
          With this idea our vision evolved. We started our journey in 2018 with
          the initial building stone as to become the problem solvers and solve
          the problems which you don&#39;t even know existed in the first place.
          And that&#39;s how we started &#39;Eminence&#39;.
        </p>
        <p>
          Eminence is a technology rich company specializing in development and
          manufacturing of world class products and solutions in the consumer
          electronics space and has a future eye to expand across other domains
          as well. We are moving in the direction of creating simple, adaptable
          and affordable products which add value to consumer&#39;s lives. All
          our products and services adhere to global quality standards, optimal
          pricing and most importantly follows &#39;Consumer First&#39; policy.
        </p>
        <p>
          Along with solving problems of our consumers, we are also focusing on
          generating employment. We believe that when you onboard one employee
          you pull off some part of struggles from their family. We believe in
          inclusion and diversity and have created a space for our people where
          they can be the owners and lead with collaboration as a single unit.
        </p>
        <p>
          We are located at the heart of India (Noida - Delhi NCR) and have been
          serving our clients across the country.
        </p>
      </div>
      <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize">
        About Mavolo
      </div>
      <div className="mx-24 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-justify">
        <p>
          Mavolo by Eminence is one of the fastest growing B2B consumer
          electronics marketplace designing products for manufacturers,
          distributors and dealers to serve the gadget charging industries. With
          a proven business model we have established our optimized production
          and distribution channels.
        </p>
        <p>
          Our products are solving the gadget charging issues since 2018 with
          integrated charging solutions.
        </p>
        <p>
          Charging your gadgets is a pain across the globe. Piles of chargers
          for every different gadget and carrying everything while we are on
          move is tedious and cluttering. At Mavolo, we are addressing this
          &#39;Charge Anxiety&#39; of our consumers and removing the obstacles
          which they didn&#39;t know existed in the first place.
        </p>
        <p>
          We are the USB masters with optimized production and distribution
          network across India and our vision is to provide Complete Integrated
          Gadget Charging Solution.
        </p>
      </div>
      <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize">
        Our Vision
      </div>
      <div className="mx-24 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-justify">
        <p>
          For today&#39;s world, charging and access to the internet are
          fundamental needs. We cannot imagine our day without powering our
          devices and accessing the internet. We see a future where these
          services will be pre-installed in our homes. We need not to carry and
          maintain different charges for our devices. The effort to make it real
          is that the European Union has restricted all gadget manufacturers to
          use Type C ports. These policies will push for a universal gadget
          charging solution, where one charger is enough for all your devices.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
