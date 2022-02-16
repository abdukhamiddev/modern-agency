/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageC = ({ src, isDesktop }) => {
	return (
		<div
			className={`h-full overflow-hidden ${isDesktop ? "w-full" : " w-[50vw]"}`}
		>
			<img
				src={src}
				alt="Dog"
				className={` h-full object-cover object-center scale-105 ${
					isDesktop ? "w-full" : " w-[50vw]"
				}`}
			/>
		</div>
	);
};

export default ImageC;
