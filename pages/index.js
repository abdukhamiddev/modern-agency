/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
const Palmar = dynamic(() => import("/public/assets/palmar.svg"));
import { useContext, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout";

import { fade } from "@/helpers/transitions";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { LazyMotion, domAnimation, m } from "framer-motion";

import { IntroContext } from "@/context/intro";
import { ThemeContext } from "@/context/theme";
import Link from "next/link";
import Image from "next/image";
import image1 from "../public/images/01.webp";
import image2 from "../public/images/02.webp";
import image3 from "../public/images/04.webp";
import image4 from "../public/images/05.webp";
import image5 from "../public/images/06.webp";
import ImageD from "@/components/image";
import HeaderText from "@/components/HeaderText";
export default function Home() {
	const containerRef = useRef(null);

	const [introContext, setIntroContext] = useContext(IntroContext);
	const [themeContext, setThemeContext] = useContext(ThemeContext);

	let colorThemes = [
		"bg-pink text-black selection:bg-black selection:text-pink",
		"bg-green text-black selection:bg-black selection:text-green",
		"bg-black text-pink selection:bg-pink selection:text-black",
		"bg-brown text-pink selection:bg-pink selection:text-brown",
		"bg-off-white text-black selection:bg-black selection:text-white",
	];

	const reveal = {
		initial: { y: "100%" },

		enter: {
			y: 0,
			transition: {
				delay: introContext ? 0 : 3,
				duration: 0.65,
				ease: [0.83, 0, 0.17, 1],
			},
		},
		exit: {
			y: "100%",
			transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] },
		},
	};
	const revealImage = {
		initial: { y: 0 },
		enter: {
			y: "-100%",
			transition: {
				delay: introContext ? 0 : 3,
				duration: 1,
				ease: [0.83, 0, 0.17, 1],
			},
		},
		exit: {
			y: "-100%",
			transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] },
		},
	};
	const revealX = {
		initial: { x: "100%" },
		enter: {
			x: 0,
			transition: {
				delay: introContext ? 0 : 3,
				duration: 0.65,
				ease: [0.83, 0, 0.17, 1],
			},
		},
		exit: {
			x: "100%",
			transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] },
		},
	};

	useEffect(() => {
		setThemeContext(Math.floor(Math.random() * 5));
		setTimeout(() => {
			setIntroContext(true);
		}, 4000);
	}, []);
	return (
		<Layout>
			<LocomotiveScrollProvider
				options={{ smooth: true, lerp: 0.05 }}
				containerRef={containerRef}
				watch={[]}
			>
				<div data-scroll-container ref={containerRef} id="scroll-container">
					<div data-scroll-section>
						<LazyMotion features={domAnimation}>
							<m.div initial="initial" animate="enter" exit="exit">
								<m.main
									variants={fade}
									className={`p-4 md:p-6 h-screen relative ${colorThemes[themeContext]}`}
								>
									<div className="absolute top-0 right-0 left-0 md:left-auto md:bottom-0 z-[10000] px-6 md:px-[20px] py-3 md:py-6 hidden md:block">
										<span className="h-full flex flex-row md:flex-col font-sans uppercase text-lg font-normal leading-[1.15] md:leading-[1.15] tracking-tight">
											<span className="flex-1 w-auto mb-[4vh] text-rotate text-center overflow-hidden rotate-90">
												<m.span variants={revealX} className="block ">
													Built
												</m.span>
											</span>
											<span className="flex-1 block overflow-hidden text-center rotate-90 text-rotate">
												<m.span variants={revealX} className="block">
													on
												</m.span>
											</span>
											<span className="flex-1 block overflow-hidden text-center rotate-90 text-rotate">
												<m.span variants={revealX} className="block">
													trust
												</m.span>
											</span>
											<span className="flex-1 block overflow-hidden text-center rotate-90">
												<m.span variants={revealX} className="block">
													and
												</m.span>
											</span>
											<span className="flex-1 block overflow-hidden text-center rotate-90 text-rotate">
												<m.span variants={revealX} className="block">
													true
												</m.span>
											</span>
											<span className="flex-1 block overflow-hidden text-center rotate-90 text-rotate">
												<m.span variants={revealX} className="block">
													creative
												</m.span>
											</span>
											<span className="flex-1 w-auto mt-[4vh] text-rotate text-center overflow-hidden rotate-90">
												<m.span variants={revealX} className="block">
													spirit
												</m.span>
											</span>
										</span>
									</div>

									<div className="block md:hidden absolute z-100 bottom-0 right-0 w-[100vw] mb-[10vw]">
										<div className="relative flex flex-row space-x-[20px] md:space-x-[50px] overflow-x-hidden">
											<div className="animate-marqueeH whitespace-nowrap flex flex-row space-x-[20px] md:space-x-[50px]">
												<ImageD imageUrl={image1} />
												<ImageD imageUrl={image2} />
												<ImageD imageUrl={image3} />
												<ImageD imageUrl={image4} />
												<ImageD imageUrl={image5} />
											</div>
										</div>
									</div>

									<div className="hidden md:block absolute z-100 top-0 right-0 md:bottom-0 w-[100vw] md:w-[38%] xl:w-[40%] 3xl:w-[42%] h-[100vh] overflow-hidden mr-[60px]">
										<div className="relative flex flex-col space-y-[20px] md:space-y-[50px] overflow-y-hidden">
											<div className="transform animate-marquee whitespace-nowrap flex flex-col space-y-[20px] md:space-y-[50px] w-full">
												<ImageD
													revealImage={revealImage}
													colorThemes={colorThemes}
													imageUrl={image1}
													themeContext={themeContext}
													isDesktop
												/>

												<ImageD
													revealImage={revealImage}
													colorThemes={colorThemes}
													imageUrl={image2}
													themeContext={themeContext}
													isDesktop
												/>
												<ImageD
													revealImage={revealImage}
													colorThemes={colorThemes}
													imageUrl={image3}
													themeContext={themeContext}
													isDesktop
												/>
												<ImageD
													revealImage={revealImage}
													colorThemes={colorThemes}
													imageUrl={image4}
													themeContext={themeContext}
													isDesktop
												/>
												<ImageD
													revealImage={revealImage}
													colorThemes={colorThemes}
													imageUrl={image5}
													themeContext={themeContext}
													isDesktop
												/>
											</div>
										</div>
									</div>
									<article className="h-full md:flex md:flex-wrap">
										<div className="mb-[12.5vw] md:mb-auto w-[80%]">
											<Palmar />
										</div>

										<div className="2xl:flex 2xl:flex-wrap 2xl:items-end 2xl:w-[53vw] md:mt-auto relative z-[100]">
											<div className="max-w-[260px] md:max-w-[500px] mb-6 xl:mb-10 2xl:mb-0 ml-[-2px] md:ml-0">
												<h1 className="font-serif text-[28px] md:text-[36px] xl:text-[40px] 2xl:text-[64px] leading-none tracking-tighter mb-[-8px]">
													<HeaderText reveal={reveal}>Palmar is a</HeaderText>
													<HeaderText reveal={reveal}>
														divergent parts
													</HeaderText>
													<HeaderText reveal={reveal}>
														modelling agency
													</HeaderText>
													<HeaderText reveal={reveal}>representing</HeaderText>
													<span className="block overflow-hidden">
														<m.span variants={reveal} className="block">
															<span className="block translate-y-[-8px]">
																<span className="italic">asian</span> and
																<span className="italic">ethnic</span>
															</span>
														</m.span>
													</span>
													<HeaderText reveal={reveal}>hand models</HeaderText>
												</h1>
											</div>
											<div className="flex space-x-4 2xl:ml-auto md:space-x-6">
												<Link href="/contact">
													<a className="block uppercase  text-[12px] md:text-base group overflow-hidden">
														<m.span variants={reveal} className="block">
															Contact
															<span className="block w-full transition-all duration-500 ease-in-out border-b border-current group-hover:w-0 group-focus:w-0"></span>
														</m.span>
													</a>
												</Link>
											</div>
										</div>
									</article>
								</m.main>
							</m.div>
						</LazyMotion>
					</div>
				</div>
			</LocomotiveScrollProvider>
		</Layout>
	);
}
