import Head from "next/head";

const Membership = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<Head>
				<title>Membership</title>
			</Head>
			<h1 className="mb-5 text-2xl font-bold">Membership</h1>

			{/* Monthly Memberships */}
			<h2 className="mb-5 text-xl font-bold">Monthly Memberships</h2>
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
			<h2 className="mb-5 text-xl font-bold">Annual Memberships</h2>
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
			<h2 className="mb-5 text-xl font-bold">Sign Up for Membership</h2>
			<button className="rounded bg-indigo-500 py-2 px-4 text-white">
				Sign Up
			</button>
		</div>
	);
};

export default Membership;
