import Map from "../../img/map.png";
import Banner from "../Banner/Banner";
import Button from "../Buttons/Button";
import { motion } from "framer-motion";

export default function FestivalMap() {
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
		<motion.div className="festival_map_container" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
			<Banner banner="FESTIVAL MAP"></Banner>
			<Button />
			<div className="map_text">
				<p>At FOOFEST Festival we have 6 areas. 5 camping sites and 1 stage area. Dont know where to find your camping site? We have created a map for you, that hopefully will solve that problem.</p>
			</div>
			<figure>
				<img className="map" src={Map} alt="Festival Map" />
			</figure>
		</motion.div>
	);
}
