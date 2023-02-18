import React from "react";

const Pricing = () => {
	return (
		<section className="bg-[#FAF5F1] py-8 p-4 rounded-lg">
			<div className="container mx-auto mb-4">
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
							<p className="text-gray-700">General Admission: $XX per person</p>
							<p className="text-gray-700">Children under X: Free</p>
							<p className="text-gray-700">Annual Pass: $XXX per person</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap -mx-4 mt-4 md:mt-4">
					<div className="w-full md:w-1/2 px-4">
						<div className="bg-white rounded-lg p-6">
							<h3 className="text-lg font-medium">Party Packages</h3>
							<p className="text-gray-700">Standard Party Package: $XXX</p>
							<p className="text-gray-700">Deluxe Party Package: $XXX</p>
							<p className="text-gray-700">Premium Party Package: $XXX</p>
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

			<div className="my-8 flex flex-col items-center bg-none space-y-4">
				<div className="clip-your-needful-style w-full aspect-[3/1]">
					<img
						className="w-full h-full object-cover"
						src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
					/>
				</div>
				<div className="clip2 w-full aspect-[3/1]">
					<img
						className="w-full h-full object-cover"
						src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
					/>
				</div>
				<div className="clip3 w-full aspect-[3/1]">
					<img
						className="w-full h-full object-cover"
						src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
					/>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
