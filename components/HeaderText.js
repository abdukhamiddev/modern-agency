import { m } from "framer-motion";
function HeaderText({ children, reveal }) {
	return (
		<span className="block overflow-hidden">
			<m.span variants={reveal} className="block">
				<span className="block translate-y-[-8px]">{children}</span>
			</m.span>
		</span>
	);
}
export default HeaderText;
