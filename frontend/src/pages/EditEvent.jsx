import EventForm from "../components/EventForm";
import {useLoaderData, useRouteLoaderData} from "react-router-dom";

export function EditEventPage() {
	const data = useRouteLoaderData("event-detail");
	return (
		<EventForm event={data.event} method={"patch"}/>
	)
}