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
			<AnimatePresence exitBeforeEnter>
				<Component {...pageProps} key={router.path} />
			</AnimatePresence>
		</>
	);
}
export default MyApp;
