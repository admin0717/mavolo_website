import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { HeroImage1 } from "@images";
import Image from "next/image";
import type { FC } from "react";
import React, { useRef, useState } from "react";
import { Perspective } from "@egjs/flicking-plugins";

const ImageCarousel: FC = () => {
  const plugins = [
    new AutoPlay({ duration: 1500, direction: "NEXT", stopOnHover: false }),
    new Perspective({ rotate: 0.5 }),
  ];

  return (
    <>
      <Flicking
        plugins={plugins}
        align="prev"
        circular={true}
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
            src={HeroImage1}
            alt="HeroImage"
            width={400}
            height={400}
          />{" "}
        </div>
        <div className="panel">
          {" "}
          <Image
            src={HeroImage1}
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
