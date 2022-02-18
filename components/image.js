/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageC = ({ src, isDesktop }) => {
	return (
		<div
			className={`md:h-full overflow-hidden  ${
				isDesktop ? "w-full" : " w-[65vw]"
			}`}
		>
			<img
				src={src}
				alt="Dog"
				className={` md:h-full object-cover object-center scale-105   ${
					isDesktop ? "w-full" : " w-[65vw]"
				}`}
			/>
		</div>
	);
};

export default ImageC;
