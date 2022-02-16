/* eslint-disable @next/next/no-img-element */
import React from "react";

const ImageC = ({ src, isDesktop }) => {
	return (
		<div className={`h-full ${isDesktop ? "w-full" : " w-[50vw]"}`}>
			<img
				src={src}
				alt="Dog"
				className={` h-full object-cover object-center ${
					isDesktop ? "w-full" : " w-[50vw]"
				}`}
			/>
		</div>
	);
};

export default ImageC;
