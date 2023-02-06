import React from "react";

interface Props {
	name: string;
	date: string;
	time: string;
	location: string;
}

const Event: React.FC<Props> = ({ name, date, time, location }) => {
	return (
		<div className="mb-5">
			<h3 className="text-lg font-bold">{name}</h3>
			<p className="text-gray-700">
				Date: {date} <br />
				Time: {time} <br />
				Location: {location}
			</p>
		</div>
	);
};

export default Event;
