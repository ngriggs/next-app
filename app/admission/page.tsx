import React from "react";

const Admissions: React.FC = () => {
	return (
		<div className="bg-gray-100">
			<header className="bg-white p-4 shadow-md">
				<h1 className="text-3xl font-medium">Admissions - Indoor Playspace</h1>
			</header>
			<main className="p-4">
				<h2 className="text-2xl font-medium mb-4">Admission Fees</h2>
				<table className="w-full border border-gray-300">
					<thead className="bg-gray-200">
						<tr>
							<th className="p-4 border border-gray-300">Age Group</th>
							<th className="p-4 border border-gray-300">Fee (per hour)</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-gray-100">
							<td className="p-4 border border-gray-300">0-2 years</td>
							<td className="p-4 border border-gray-300">$5</td>
						</tr>
						<tr className="bg-gray-200">
							<td className="p-4 border border-gray-300">3-5 years</td>
							<td className="p-4 border border-gray-300">$10</td>
						</tr>
						<tr className="bg-gray-100">
							<td className="p-4 border border-gray-300">6-12 years</td>
							<td className="p-4 border border-gray-300">$15</td>
						</tr>
					</tbody>
				</table>
				<h2 className="text-2xl font-medium mt-4 mb-4">Play Area Rules</h2>
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
