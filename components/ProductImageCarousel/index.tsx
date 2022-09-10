import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import {
  Product1aImage,
  Product1bImage,
  Product1cImage,
  Product1dImage,
} from "@images";
import Image, { StaticImageData } from "next/image";
import type { FC } from "react";
import React, { useRef, useState } from "react";

export interface PropTypes {
  imgArray: String[];
}

const ProductImageCarousel: FC<PropTypes> = ({ imgArray }: PropTypes) => {
  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
    // new Perspective({ rotate: 0.9 }),
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
        {imgArray.map((imgStr, index) => (
          <div className="panel" key={index}>
            {" "}
            <Image
              src={`/images/Products/${imgStr}`}
              alt="imgStr"
              width={400}
              height={350}
              layout="intrinsic"
            />{" "}
          </div>
        ))}

        {/* <div className="panel">
          {" "}
          <Image
            src={Product1bImage}
            alt="HeroImage"
            width={400}
            height={350}
            layout="fixed"
          />{" "}
        </div>
        <div className="panel">
          {" "}
          <Image
            src={Product1cImage}
            alt="HeroImage"
            width={400}
            height={350}
            layout="fixed"
          />{" "}
        </div>
        <div className="panel">
          {" "}
          <Image
            src={Product1dImage}
            alt="HeroImage"
            width={400}
            height={350}
            layout="fixed"
          />{" "}
        </div> */}
      </Flicking>
    </>
  );
};

export default ProductImageCarousel;
