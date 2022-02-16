import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
import "../styles/main.css";
import SEO from "@/helpers/seo.config";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	return (
		<>
			<DefaultSeo {...SEO} />
			<div className="fixed inset-0 w-full h-full pointer-events-none z-[100]" />
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.path} />
			</AnimatePresence>
		</>
	);
}
export default MyApp;
