import Head from "next/head";

const Membership = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<Head>
				<title>Membership</title>
			</Head>
			<h1 className="text-2xl font-bold mb-5">Membership</h1>

			{/* Monthly Memberships */}
			<h2 className="text-xl font-bold mb-5">Monthly Memberships</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>
			<p className="mb-5 text-gray-700">
				<strong>Discounts:</strong> Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Nam vel ipsum vel velit blandit efficitur.
			</p>

			{/* Annual Memberships */}
			<h2 className="text-xl font-bold mb-5">Annual Memberships</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>
			<p className="mb-5 text-gray-700">
				<strong>Discounts:</strong> Lorem ipsum dolor sit amet, consectetur
				adipiscing elit. Nam vel ipsum vel velit blandit efficitur.
			</p>

			{/* Call to Action */}
			<h2 className="text-xl font-bold mb-5">Sign Up for Membership</h2>
			<button className="bg-indigo-500 text-white py-2 px-4 rounded">
				Sign Up
			</button>
		</div>
	);
};

export default Membership;
