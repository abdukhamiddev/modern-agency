import Layout from "@/components/layout";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { NextSeo } from "next-seo";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import dynamic from "next/dynamic";
const Hello = dynamic(() => import("/public/assets/hello.svg"));
import Link from "next/link";
import { fade } from "@/helpers/transitions";

const Contact = () => {
	const containerRef = useRef(null);

	return (
		<Layout>
			<NextSeo title="Contact" />
			<LocomotiveScrollProvider
				options={{ smooth: true, lerp: 0.05 }}
				containerRef={containerRef}
				watch={[]}
			>
				<div data-scroll-container ref={containerRef} id="scroll-container">
					<div data-scroll-section>
						<LazyMotion features={domAnimation}>
							<m.div initial="initial" animate="enter" exit="exit">
								<m.div
									className="flex flex-wrap min-h-screen bg-black text-pink "
									variants={fade}
								>
									<m.main
										className="relative w-full p-6 pb-16 mb-auto md:pb-24 xl:pb-32"
										variants={fade}
									>
										<article className="flex flex-wrap">
											<div className="relative z-10 w-full mb-16 md:w-11/12 xl:w-10/12 md:mb-28 xl:mb-40">
												<Hello />
											</div>
											<div className="w-full mx-auto overflow-hidden md:w-11/12 xl:w-10/12 ">
												<div className="flex flex-wrap">
													<div className="w-full mb-12 md:w-1/2 md:mb-0 md:pr-12 xl:pr-24">
														<span className="text-span">All enquires</span>
														<hr className="my-6 border border-t-0 border-current opacity-50 md:my-8 xl:my-12" />
														<span className="text-span">Social</span>
													</div>
													<div className="w-full md:w-1/2">
														<form>
															<label htmlFor="name" className="sr-only">
																Your Name
															</label>
															<input
																type="text"
																id="name"
																placeholder="Your Name"
																className="form-attribute "
															/>
															<label htmlFor="email" className="sr-only">
																Email Address
															</label>
															<input
																type="email"
																id="email"
																placeholder="Email Address"
																className="form-attribute"
															/>
															<button
																type="submit"
																className="block w-full p-6 font-sans text-sm font-normal text-black uppercase transition-colors duration-500 ease-in-out bg-pink md:text-base xl:text-lg leading-[1.15] tracking-tight hover:bg-blush"
															>
																Submit
															</button>
														</form>
													</div>
												</div>
											</div>
										</article>
									</m.main>
									<m.footer
										className="relative w-full p-6 mt-auto"
										variants={fade}
									>
										<div className="flex flex-wrap">
											<span className="block font-sans text-sm font-normal uppercase md:text-base xl:text-lg leading-[1.15] tracking-tight mr-8 w-full md:w-auto mb-[5px] md:mb-0">
												@Palmar Agency 2021
											</span>
											<span className="block font-sans text-sm font-normal uppercase md:text-base xl:text-lg leading-[1.15] tracking-tight mr-8 md:mr-24 w-1/2 md:w-auto mb-[5px] md:mb-0">
												Site by
												<a
													href="https://github.com/abdukhamiddev"
													rel="noopener noreferrer"
													target="_blank"
													className="group relative  ml-2"
												>
													Abdukhamid{" "}
													<span className="absolute bottom-0 left-0 right-0 border-b border-current w-full group-hover:w-0 group-focus:w-0 transition-all ease-in-out duration-500 mb-[-1px] md:mb-[-3px]"></span>
												</a>
											</span>
											<span className="block font-sans text-sm font-normal uppercase md:text-base xl:text-lg leading-[1.15] tracking-tight mr-8 w-1/2 md:w-auto">
												<Link href="/">
													<a className="group relative">
														Back to home{" "}
														<span className="bottom-0 left-0 right-0 border-b border-current absolute w-full group-hover:w-0  group-focus:w-0 duration-500  transition-all ease-in-out"></span>
													</a>
												</Link>
											</span>
										</div>
									</m.footer>
								</m.div>
							</m.div>
						</LazyMotion>
					</div>
				</div>
			</LocomotiveScrollProvider>
		</Layout>
	);
};

export default Contact;
