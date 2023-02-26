import React from "react";
import Event from "../components/event";

interface Event {
	name: string;
	date: string;
	time: string;
	location: string;
}

const events: Event[] = [
	{
		name: "Community Cleanup",
		date: "March 15, 2023",
		time: "9:00 AM - 12:00 PM",
		location: "Central Park",
	},
	{
		name: "Neighborhood BBQ",
		date: "June 5, 2023",
		time: "11:00 AM - 2:00 PM",
		location: "Greenway Park",
	},
	{
		name: "Fall Festival",
		date: "October 15, 2023",
		time: "12:00 PM - 5:00 PM",
		location: "Main Street",
	},
];

const CommunityEvents: React.FC = () => {
	return (
		<div className="container mx-auto p-10">
			<h2 className="mb-5 text-lg font-bold">Upcoming Events</h2>
			{events.map((event) => (
				<Event
					key={event.name}
					name={event.name}
					date={event.date}
					time={event.time}
					location={event.location}
				/>
			))}

			<div className="mt-10 text-center">
				<button className="rounded-lg bg-indigo-600 px-5 py-3 text-white hover:bg-indigo-700">
					Join an Event
				</button>
			</div>
		</div>
	);
};

export default CommunityEvents;
