import type { FC } from "react";

export interface PropTypes {
  title: string;
}

const TitleComponent: FC<PropTypes> = ({ title }: PropTypes) => {
  return (
    <>
      <div className="bg-buttonBG m-10 lg:mx-24  text-center font-bold lg:text-7xl text-5gxl py-12  rounded-xl text-[#fff]">
        About Us
      </div>
    </>
  );
};

export default TitleComponent;
