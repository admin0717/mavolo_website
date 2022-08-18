import { LogoIcon, LogoIconWhite, LogoPrimary, LogoSecondary } from "@images";
import Image from "next/image";
import type { FC } from "react";

const Footer: FC = () => {
	return (
		<>
			<div className="mx-24 bg-buttonBG rounded-t-xl">
				<div className="flex  items-center space-x-1">
						<Image src={LogoIconWhite} alt="logo" width={70} height={70} className=""/>
						<span className="font-Inter  xl:text-4xl md:text-2xl font-bold  tracking-wide text-[#fff]">MAVOLO</span>
					</div>
				<div></div>
				<div></div>
			</div>
		</>
	)
}

export default Footer;