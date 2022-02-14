import { NextSeo } from "next-seo";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import Layout from "@/components/layout";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Palmar from "/palmar.svg";
import { fade } from "@/helpers/transitions";
export default function Home() {
	const containerRef = useRef(null);
	let colorThemes = [
		"bg-pink text-black",
		"bg-green text-black",
		"bg-black text-pink",
		"bg-brown text-pink",
		"bg-off-white text-black",
	];
	let currentColorTheme = Math.floor(Math.random() * colorThemes.length);
	return (
		<>
			<Layout>
				<NextSeo title="Home" />
				<div className="fixed inset-0 w-full h-full pointer-events-none z-100" />
				<LocomotiveScrollProvider
					options={{ smooth: true, lerp: 0.05 }}
					containerRef={containerRef}
					watch={[]}
				>
					<div
						data-scroll-container
						ref={containerRef}
						id="scroll-container"
						className={`${colorThemes[currentColorTheme]}
						`}
					>
						<div data-scroll-section>
							<LazyMotion features={domAnimation}>
								<m.div initial="initial" animate="enter" exit="exit">
									<m.main varians={fade} className="h-screen p-6">
										<article className="flex flex-wrap h-full">
											<div className="w-full mb-auto ">
												<Palmar />
											</div>
											<div className="max-w-[580px] mt-auto">
												<h1 className="font-serif text-[38px] md:text-[48px] xl:text-[54px] 2xl:text-[64px] leading-none tracking-tighter">
													Palmar is a divergent parts modelling agency
													representing<span className="italic"> black</span>,
													<span className="italic"> asian </span> and
													<span className="italic"> ethnic</span> hand models.
												</h1>
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
