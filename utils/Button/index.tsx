import Link from "next/link";
import type { FC } from "react";

export interface ButtonType{
	text: string;
}

const Button: FC<ButtonType> = ({text}: ButtonType) => {
	return (
				<a className="font-Inter font-normal text- md:text-lg   cursor-pointer p-2 rounded-md hover:border-2 hover:bg-primaryBG drop-shadow-md hover:text-buttonBG bg-buttonBG text-buttonText">{text}</a>
	)
}

export default Button;