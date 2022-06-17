import Navigation from "./Menu/Menu";
import Lineup from "./Lineup/Lineup";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
	const containerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: { delay: 0.5, duration: 1.5 },
		},
		exit: {
			x: "-100vw",
			transition: { ease: "easeInOut", duration: 1 },
		},
	};
	return (
		<AnimatePresence>
			<motion.div id="content" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
				<Navigation className="navigation"></Navigation>
				<Lineup className="lineup"></Lineup>
			</motion.div>
		</AnimatePresence>
	);
}
