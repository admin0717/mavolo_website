import { AutoPlay, Perspective } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from "@images";
import Image from "next/image";
import type { FC } from "react";
import React from "react";

const ImageCarousel: FC = () => {
  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
    new Perspective({ rotate: 0.9 }),
  ];

  return (
    <>
      <Flicking
        plugins={plugins}
        align="prev"
        circular={true}
        easing={(x) => 2 * (1 - Math.sqrt(1 - x ** 2))}
        onMoveEnd={(e) => {
          console.log(e);
        }}>
        <div className="panel">
          {" "}
          <Image
            src={HeroImage1}
            alt="HeroImage"
            width={400}
            height={400}
          />{" "}
        </div>
        <div className="panel">
          {" "}
          <Image
            src={HeroImage2}
            alt="HeroImage"
            width={400}
            height={400}
          />{" "}
        </div>
        <div className="panel">
          {" "}
          <Image
            src={HeroImage3}
            alt="HeroImage"
            width={400}
            height={400}
          />{" "}
        </div>
        <div className="panel">
          {" "}
          <Image
            src={HeroImage4}
            alt="HeroImage"
            width={400}
            height={400}
          />{" "}
        </div>
      </Flicking>
    </>
  );
};

export default ImageCarousel;
