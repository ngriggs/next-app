import React from "react";

const Pricing = () => {
	return (
		<section className="rounded-lg bg-[#FAF5F1] p-4 py-8">
			<div className="container mx-auto mb-4">
				<h2 className="pb-4 text-center text-3xl font-medium">
					Pricing &amp; Hours
				</h2>
				<div className="-mx-4 mt-4 flex flex-wrap md:mt-0">
					<div className="w-full px-4 md:w-1/2">
						<div className="rounded-lg bg-white p-6">
							<h3 className="text-lg font-medium">Hours of Operation</h3>
							<p className="text-gray-700">
								Monday - Friday: 9am - 5pm Open Play
							</p>
							<p className="text-gray-700">Saturday: 10am - 6pm Parties</p>
							<p className="text-gray-700">Sunday: 12pm - 5pm Parties</p>
						</div>
					</div>
					<div className="mt-4 w-full px-4 md:mt-0 md:w-1/2">
						<div className="rounded-lg bg-white p-6">
							<h3 className="text-lg font-medium">Pricing</h3>
							<p className="text-gray-700">General Admission: $XX per person</p>
							<p className="text-gray-700">Children under X: Free</p>
							<p className="text-gray-700">Annual Pass: $XXX per person</p>
						</div>
					</div>
				</div>
				<div className="-mx-4 mt-4 flex flex-wrap md:mt-4">
					<div className="w-full px-4 md:w-1/2">
						<div className="rounded-lg bg-white p-6">
							<h3 className="text-lg font-medium">Party Packages</h3>
							<p className="text-gray-700">Standard Party Package: $XXX</p>
							<p className="text-gray-700">Deluxe Party Package: $XXX</p>
							<p className="text-gray-700">Premium Party Package: $XXX</p>
						</div>
					</div>
					<div className="mt-4 w-full px-4 md:mt-0 md:w-1/2">
						<div className="rounded-lg bg-white p-6">
							<h3 className="text-lg font-medium">Special Events</h3>
							<p className="text-gray-700">Monthly Parent&apos;s Night Out</p>
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
