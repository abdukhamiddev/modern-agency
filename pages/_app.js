import { IntroContext } from "@/context/intro";
import { ThemeContext } from "@/context/theme";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { DefaultSeo } from "next-seo";
import Image from "next/image";
import image1 from "../public/images/01.webp";
import image2 from "../public/images/02.webp";
import image3 from "../public/images/04.webp";
import image4 from "../public/images/05.webp";
import image5 from "../public/images/06.webp";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import "@/styles/main.css";

import SEO from "@/helpers/seo.config";

const introEnd = {
	visible: { opacity: 0 },

	hidden: { opacity: "100%" },
};
const imageLoad = {
	visible: { opacity: "100%" },
	hidden: { opacity: 0 },
};
const imageReveal = {
	visible: { y: "-100%" },
	hidden: { y: 0 },
};
const imageRevealOut = {
	visible: { y: 0, scale: 1.1 },
	hidden: { y: "-100%" },
};
export default function App({ Component, pageProps }) {
	const router = useRouter();
	const [introContext, setIntroContext] = useState(false);
	const [themeContext, setThemeContext] = useState(0);
	let colorThemes = [
		"bg-pink text-black",
		"bg-green text-black",
		"bg-black text-pink",
		"bg-brown text-pink",
		"bg-off-white text-black",
	];
	useEffect(() => {
		setThemeContext(Math.floor(Math.random() * 5));
	}, [themeContext]);
	return (
		<>
			<DefaultSeo {...SEO} />
			<div className="grain fixed w-full h-full inset-0 pointer-events-none z-[10000]"></div>

			<IntroContext.Provider value={[introContext, setIntroContext]}>
				<ThemeContext.Provider value={[themeContext, setThemeContext]}>
					{/* INTRO START */}
					<LazyMotion features={domAnimation}>
						{!introContext && router.asPath == "/" && (
							<>
								<m.div
									initial="hidden"
									animate="visible"
									variants={introEnd}
									transition={{
										delay: 2.6,
										duration: 0.66,
										ease: [0.83, 0, 0.17, 1],
									}}
									className={`fixed inset-0 z-[1000] min-h-screen flex flex-col justify-center items-center ${colorThemes[themeContext]}`}
								>
									<div className="relative w-full max-w-xs overflow-hidden md:max-w-md 2xl:max-w-xl">
										<m.div
											className={`absolute inset-0 z-[1000] h-full w-full ${colorThemes[themeContext]}  bg-red-600`}
											initial="hidden"
											animate="visible"
											variants={imageReveal}
											transition={{
												delay: 0.25,
												duration: 1.5,
												ease: [0.83, 0, 0.17, 1],
											}}
										/>

										<m.div
											className={`absolute inset-0 z-[1000] h-full w-full ${colorThemes[themeContext]} bg-red-600`}
											initial="hidden"
											animate="visible"
											variants={imageRevealOut}
											transition={{
												delay: 1.75,
												duration: 1.5,
												ease: [0.83, 0, 0.17, 1],
											}}
										/>
										<div>
											<Image
												alt="Hand model"
												src={image1}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												width={400}
												height={500}
											/>
										</div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 0.5, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image1}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 0.75, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image2}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 1, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image3}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 1.25, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image4}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 1.5, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image5}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 1.75, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image1}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 2, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image2}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 2.25, duration: 0 }}
										>
											<Image
												alt="Hand model"
												src={image3}
												className="absolute inset-0 object-cover object-center w-full h-full scale-105"
												priority={true}
												layout="fill"
												objectFit="cover"
											/>
										</m.div>
									</div>
								</m.div>
							</>
						)}
					</LazyMotion>
					{/* Intro End */}
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.asPath} />
					</AnimatePresence>
				</ThemeContext.Provider>
			</IntroContext.Provider>
		</>
	);
}
