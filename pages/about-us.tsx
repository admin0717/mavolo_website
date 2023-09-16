import { Footer, Navbar, TimelineComponent, TitleComponent } from "@components";
import type { NextPage } from "next";
import FloatingWhatsApp from "react-floating-whatsapp";

const AboutUs: NextPage = () => {
  return (
    <>
      <div className="container w-full mx-auto scroll-smooth">
        <Navbar />
        <TitleComponent title="About Us" />
        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize">

          Our Story
        </div>
        <TimelineComponent />
        <div className="lg:mx-24 mx-12 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
          <p>
            The world is moving at such a faster pace that we often overlook the
            small hurdles in our way and don&#39;t realize that somehow it is
            slowing us. Walking on a road full of potholes makes you reroute
            yourself after every few steps. What if we minimize them so that you
            reach your destination much ahead of time and then realize how much
            of time and energy you were losing in between &#39;unknowingly&#39;.
          </p>
          <p>
            With this idea our vision evolved. We started our journey in 2018
            with the initial building stone as to become the problem solvers and
            solve the problems which you don&#39;t even know existed in the
            first place. And that&#39;s how we started &#39;Eminence&#39;.
          </p>
          <p>
            Eminence is a technology rich company specializing in development
            and manufacturing of world class products and solutions in the
            consumer electronics space and has a future eye to expand across
            other domains as well. We are moving in the direction of creating
            simple, adaptable and affordable products which add value to
            consumer&#39;s lives. All our products and services adhere to global
            quality standards, optimal pricing and most importantly follows
            &#39;Consumer First&#39; policy.
          </p>
          <p>
            Along with solving problems of our consumers, we are also focusing
            on generating employment. We believe that when you onboard one
            employee you pull off some part of struggles from their family. We
            believe in inclusion and diversity and have created a space for our
            people where they can be the owners and lead with collaboration as a
            single unit.
          </p>
          <p>
            We are located at the heart of India (Noida - Delhi NCR) and have
            been serving our clients across the country.
          </p>
        </div>
        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize">
          About Mavolo
        </div>
        <div className="lg:mx-24 mx-12 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
          <p>
            Mavolo by Eminence is one of the fastest growing B2B consumer
            electronics marketplace designing products for manufacturers,
            distributors and dealers to serve the gadget charging industries.
            With a proven business model we have established our optimized
            production and distribution channels.
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
            network across India and our vision is to provide Complete
            Integrated Gadget Charging Solution.
          </p>
        </div>
        <div className=" lg:mx-24  text-start font-bold  text-3xl border-b-2 mx-10 capitalize">
          Our Vision and Mission Statement
        </div>
        <div className="lg:mx-24 mx-12 my-8 flex flex-col items-start justify-center space-y-4 font-Inter font-normal tracking-wide leading-6 text-start">
          <p> Introducing an integrated lifestyle... <br />

            Where the fundamentals are seamlessly integrated and the flawless easy interaction can be done.<br />
            What are fundamental for human need? <br />
            1) Electricity<br />
            2) Water Supply <br />
            3) Fire ( Gas cylinder)
            Next things <br />
            5) Charging <br />
            6) Internet<br />

            We are starting with integrated chargers in your vicinity for that we have visualise human interaction with its surroundings and we noticed that<br />
            we charge our gadgets around our working desk and bed. So we have designed chargers which can be integrated near our desk and bed side.<br />
            These chargers are smart and charge your smartphone/ gadgets optimally as per the load need.
          </p>
        </div>


      </div>
      <FloatingWhatsApp phoneNumber={""} accountName={""} />
    </>
  );
};

export default AboutUs;
