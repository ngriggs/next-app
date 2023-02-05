import React from "react";

const Pricing = () => {
	return (
		<section className="bg-gray-200 py-8 p-4 rounded-lg">
			<div className="container mx-auto">
				<h2 className="text-center text-3xl font-medium pb-4">
					Pricing &amp; Hours
				</h2>
				<div className="flex flex-wrap -mx-4 mt-4 md:mt-0">
					<div className="w-full md:w-1/2 px-4">
						<div className="bg-white rounded-lg p-6">
							<h3 className="text-lg font-medium">Hours of Operation</h3>
							<p className="text-gray-700">
								Monday - Friday: 9am - 5pm Open Play
							</p>
							<p className="text-gray-700">Saturday: 10am - 6pm Parties</p>
							<p className="text-gray-700">Sunday: 12pm - 5pm Parties</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
						<div className="bg-white rounded-lg p-6">
							<h3 className="text-lg font-medium">Pricing</h3>
							<p className="text-gray-700">General Admission: $10 per person</p>
							<p className="text-gray-700">Children under 2: Free</p>
							<p className="text-gray-700">Annual Pass: $200 per person</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap -mx-4 mt-4 md:mt-4">
					<div className="w-full md:w-1/2 px-4">
						<div className="bg-white rounded-lg p-6">
							<h3 className="text-lg font-medium">Party Packages</h3>
							<p className="text-gray-700">Standard Party Package: $300</p>
							<p className="text-gray-700">Deluxe Party Package: $500</p>
							<p className="text-gray-700">Premium Party Package: $800</p>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-4 mt-4 md:mt-0">
						<div className="bg-white rounded-lg p-6">
							<h3 className="text-lg font-medium">Special Events</h3>
							<p className="text-gray-700">Monthly Parent's Night Out</p>
							<p className="text-gray-700">Holiday Parties</p>
							<p className="text-gray-700">Special Event Rentals</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
