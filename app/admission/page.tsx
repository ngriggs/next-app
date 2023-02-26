import React from "react";

const Admissions: React.FC = () => {
	return (
		<div className="bg-gray-100">
			<header className="bg-white p-4 shadow-md">
				<h1 className="text-3xl font-medium">Admissions - Indoor Playspace</h1>
			</header>
			<main className="p-4">
				<h2 className="mb-4 text-2xl font-medium">Admission Fees</h2>
				<table className="w-full border border-gray-300">
					<thead className="bg-gray-200">
						<tr>
							<th className="border border-gray-300 p-4">Age Group</th>
							<th className="border border-gray-300 p-4">Fee (per hour)</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-gray-100">
							<td className="border border-gray-300 p-4">0-2 years</td>
							<td className="border border-gray-300 p-4">$5</td>
						</tr>
						<tr className="bg-gray-200">
							<td className="border border-gray-300 p-4">3-5 years</td>
							<td className="border border-gray-300 p-4">$10</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="border border-gray-300 p-4">6-12 years</td>
							<td className="border border-gray-300 p-4">$15</td>
						</tr>
					</tbody>
				</table>
				<h2 className="my-4 text-2xl font-medium">Play Area Rules</h2>
				<ul className="list-disc pl-4">
					<li className="mb-2">
						Everyone should take off their shoes before entering the play area
					</li>
				</ul>
			</main>
		</div>
	);
};

export default Admissions;
