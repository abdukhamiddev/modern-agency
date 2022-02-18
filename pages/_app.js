/* eslint-disable @next/next/no-img-element */
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import "../styles/main.css";
import SEO from "@/helpers/seo.config";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { ThemeContext } from "@/context/theme";
import { IntroContext } from "@/context/intro";

const introEnd = {
	visible: { opacity: 0 },
	hidden: { opacity: "100%" },
};
const imageLoad = {
	visible: { opacity: 0 },
	hidden: { opacity: "100%" },
};

const imageReveal = {
	visible: { opacity: "-100%" },
	hidden: { opacity: 0 },
};
const imageRevealOut = {
	visible: { y: 0, scale: 1.1 },
	hidden: { y: "100%" },
};

function MyApp({ Component, pageProps }) {
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
			<div className="fixed inset-0 w-full h-full pointer-events-none z-[100]" />
			<IntroContext.Provider value={[introContext, setIntroContext]}>
				<ThemeContext.Provider value={[themeContext, themeContext]}>
					<LazyMotion features={domAnimation}>
						{!introContext && router.asPath == "/" && (
							<>
								<m.div
									initial="hidden"
									animate="visible"
									variants={introEnd}
									transition={{
										delay: 2.75,
										duration: 0.66,
										ease: [0.83, 0, 0.17, 1],
									}}
									className={`fixed inset-0 z-[1000] min-h-screen  flex flex-col justify-center items-center ${colorThemes[themeContext]}`}
								/>
								<m.div
									initial="hidden"
									animate="visible"
									variants={introEnd}
									transition={{
										delay: 2.5,
										duration: 0.66,
										ease: [0.83, 0, 0.17, 1],
									}}
									className={`fixed inset-0 z-[1000] min-h-screen  flex flex-col justify-center items-center ${colorThemes[themeContext]}`}
								>
									<div className="relative overflow-hidden w-full max-w-xs md:max-w-md 2xl:max-w-xl">
										<m.div
											initial="hidden"
											variants={imageReveal}
											animate="visible"
											className={`absolute inset-0 z-[1000] h-full w-full  ${colorThemes[themeContext]}`}
											transition={{
												delay: 0.25,
												duration: 1.25,
												ease: [0.71, 0.37, 0.29, 1.02],
											}}
										/>
										<m.div
											initial="hidden"
											variants={imageRevealOut}
											animate="visible"
											className={`absolute inset-0 z-[1000] h-full w-full  ${colorThemes[themeContext]}`}
											transition={{
												delay: 0.25,
												duration: 1.25,
												ease: [0.71, 0.37, 0.29, 1.02],
											}}
										/>

										<div>
											<img
												src="/images/01.webp"
												alt="Woman"
												className="w-full scale-105"
											/>
										</div>
										<m.div
											initial="hidden"
											animate="visible"
											variants={imageLoad}
											transition={{ delay: 0.5, duration: 0 }}
										>
											<img
												src="/images/02.webp"
												alt="Woman2"
												className="scale-105 absolute inset-0 object-cover object-center h-full w-full "
											/>
										</m.div>
									</div>
								</m.div>
							</>
						)}
					</LazyMotion>
					<AnimatePresence exitBeforeEnter>
						<Component {...pageProps} key={router.path} />
					</AnimatePresence>
				</ThemeContext.Provider>
			</IntroContext.Provider>
		</>
	);
}
export default MyApp;
