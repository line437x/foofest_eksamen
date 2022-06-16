import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navigation() {
	return (
		<motion.section className="navigation">
			<nav>
				<ul className="grid">
					<Link className="link" to="/schedule">
						<li>
							<div className="menu_img pic1 "></div>
							<h3>SCHEDULE</h3>
						</li>
					</Link>
					<Link className="link" to="/playing">
						<li>
							<h3>PLAYING NOW !!!</h3>
						</li>
					</Link>
					<Link className="link" to="/festivalmap">
						<li>
							<h3>FESTIVAL MAP</h3>
							<div className="menu_img pic2"></div>
						</li>
					</Link>
					<a href="https://foofest-booking.netlify.app" target="_blank">
						<li>
							<div className="menu_img pic3"></div>
							<h3>GET YOUR TICKET HERE</h3>
						</li>
					</a>
				</ul>
			</nav>
		</motion.section>
	);
}
