import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router-dom";

export function EventsRootLayout() {
	return (
		<>
			<EventsNavigation/>
			<Outlet/>
		</>
	)
}

