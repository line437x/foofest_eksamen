import { useState } from "react";

import Banner from "../Banner/Banner";
import Navigation from "./Navigation/Navigation";
import Slider from "./Slider/Slider";
import Button from "../Buttons/Button";
import { motion } from "framer-motion";

export default function Schedule() {
	const [day, setDay] = useState("mon");
	let dayPicked = getDay();

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

	function getDay() {
		let picked;
		switch (day) {
			case "mon":
				picked = "Monday";
				break;
			case "tue":
				picked = "Tuesday";
				break;
			case "wed":
				picked = "Wednesday";
				break;
			case "thu":
				picked = "Thursday";
				break;
			case "fri":
				picked = "Friday";
				break;
			case "sat":
				picked = "Saturday";
				break;
			case "sun":
				picked = "Sunday";
				break;
			default:
				console.log("No Match");
				break;
		}
		return picked;
	}

	return (
		<motion.div className="schedule" variants={containerVariants} initial="hidden" animate="visible" exit="exit">
			<Banner banner="SCHEDULE"></Banner>
			<Navigation setDay={setDay} day={day}></Navigation>
			<Button></Button>
			<h2>{dayPicked}</h2>
			<div className="schedule_text">
				<p>There are 3 stages at FOOFEST Festival: Midgard, Jotunheim and Vanaheim. Choose which day you want to see the schedule over, and scroll down the page to browse all the acts. Then you’ll know when to FOO, and when not to.</p>
			</div>
			<Slider day={day}></Slider>
		</motion.div>
	);
}
