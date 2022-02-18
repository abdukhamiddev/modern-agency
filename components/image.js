import { m } from "framer-motion";
import Image from "next/image";

function ImageD({
	revealImage,
	colorThemes,
	themeContext,
	imageUrl,
	isDesktop,
}) {
	return (
		<div
			className={`relative ${
				isDesktop ? "w-full" : "w-[65vw]"
			} h-full overflow-hidden`}
		>
			{isDesktop && (
				<m.span
					variants={revealImage}
					className={`block z-[1000] w-full h-full absolute  inset-0 ${colorThemes[themeContext]}`}
				></m.span>
			)}
			<Image
				alt="Hand model"
				src={imageUrl}
				className="object-cover object-center w-full scale-105"
				layout="responsive"
				priority={true}
				width={1334}
				height={1613}
			/>
		</div>
	);
}
export default ImageD;
