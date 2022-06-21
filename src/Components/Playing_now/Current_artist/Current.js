import Act from "../../Schedule/Act";
import { v4 as uuidv4 } from "uuid";

export default function CurrentArtist(props) {
	return (
		<div id="current_artist">
			<Act {...props} key={uuidv4()}></Act>
		</div>
	);
}
