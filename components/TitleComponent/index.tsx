import type { FC } from "react";

export interface PropTypes {
  title: string;
}

const TitleComponent: FC<PropTypes> = ({ title }: PropTypes) => {
  return (
    <>
      <div className="bg-buttonBG m-10 lg:mx-24 capitalize text-start font-bold  text-3xl   rounded-xl text-[#fff] p-4 inline-block">
        About Us
      </div>
    </>
  );
};

export default TitleComponent;
