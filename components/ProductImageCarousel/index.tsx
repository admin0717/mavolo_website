import { AutoPlay } from "@egjs/flicking-plugins";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import Image, { StaticImageData } from "next/image";
import type { FC } from "react";
import React from "react";

export interface PropTypes {
  imgArray: String[];
}

const ProductImageCarousel: FC<PropTypes> = ({ imgArray }: PropTypes) => {
  const plugins = [
    new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false }),
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
      </Flicking>
    </>
  );
};

export default ProductImageCarousel;
