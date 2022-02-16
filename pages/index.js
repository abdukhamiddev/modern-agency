import { NextSeo } from "next-seo";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef, useState, useEffect } from "react";
import Layout from "@/components/layout";
import { LazyMotion, domAnimation, m } from "framer-motion";
import dynamic from "next/dynamic";
const Palmar = dynamic(() => import("/public/assets/palmar.svg"));
import { fade } from "@/helpers/transitions";
import ImageC from "@/components/image";
import Link from "next/link";

export default function Home() {
	const containerRef = useRef(null);
	let colorThemes = [
		"bg-pink text-black",
		"bg-green text-black",
		"bg-black text-pink",
		"bg-brown text-pink",
		"bg-off-white text-black",
	];
	const [currentColorTheme, setCurrentColorTheme] = useState(0);
	useEffect(() => {
		setCurrentColorTheme(Math.floor(Math.random() * colorThemes.length));
	}, [currentColorTheme]);
	return (
		<>
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
										varians={fade}
										className={` p-6 h-screen relative ${colorThemes[currentColorTheme]}
						`}
									>
										<div className="absolute top-0 right-0 block md:hidden z-[100] w-[100vw] mt-[30vw]">
											<div className="relative flex flex-row space-x-[20px] md:space-x-[50px] overflow-x-hidden">
												<div className="flex flex-row animate-marqueeH whitespace-nowrap space-x-[20px] md:space-x-[50px]">
													<ImageC src="https://placedog.net/500/640" />
													<ImageC src="https://placedog.net/500/640" />
													<ImageC src="https://placedog.net/500/640" />
													<ImageC src="https://placedog.net/500/640" />
													<ImageC src="https://placedog.net/500/640" />
												</div>
											</div>
										</div>
										<div className="absolute hidden md:block z-[100] top-0 right-0 md:bottom-0 w-[100vw] md:w-[38%] xl:w-[28%] 3xl:w-[26%] h-screen overflow-hidden">
											<div className="relative flex flex-col space-y-[20px] overflow-y-hidden md:space-y-[50px]">
												<div className="flex flex-col w-full transform animate-marquee whitespace-nowrap space-y-[20px] md:space-y-[50px] ">
													<ImageC src="../public/images/01.webp" isDesktop />
													<ImageC
														src="https://placedog.net/500/640"
														isDesktop
													/>
													<ImageC
														src="https://placedog.net/500/640"
														isDesktop
													/>
													<ImageC
														src="https://placedog.net/500/640"
														isDesktop
													/>
													<ImageC
														src="https://placedog.net/500/640"
														isDesktop
													/>
												</div>
											</div>
										</div>
										<article className="flex flex-wrap h-full">
											<div className="w-full mb-auto ">
												<Palmar />
											</div>
											<div className="mt-auto 2xl:flex 2xl:flex-wrap 2xl:items-end 2xl:w-[70vw]">
												<div className="max-w-[580px] mb-6 xl:mb-10 2xl:mb-0">
													<h1 className="font-serif text-[35px] md:text-[48px] xl:text-[54px] 2xl:text-[64px] leading-none tracking-tighter">
														Palmar is a divergent parts modelling agency
														representing <span className="italic">black</span>,
														<span className="italic">asian </span>
														and <span className="italic">ethnic</span> hand
														models.
													</h1>
												</div>
												<div className="flex space-x-6 2xl:mt-auto">
													<Link href="/contact">
														<a className="block text-sm underline uppercase md:text-base">
															Contact
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
		</>
	);
}
