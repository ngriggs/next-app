import Head from "next/head";

const Visit = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<Head>
				<title key="title">Visit Us</title>
			</Head>
			<h1 className="text-2xl font-bold mb-5">Visit Us</h1>

			{/* Admission Hours */}
			<h2 className="text-xl font-bold mb-5">Admission Hours</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>

			{/* Frequently Asked Questions */}
			<h2 className="text-xl font-bold mb-5">Frequently Asked Questions</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>

			{/* Call to Action */}
			<h2 className="text-xl font-bold mb-5">Sign a Waiver</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>
			<button className="bg-indigo-500 text-white py-2 px-4 rounded">
				Sign Waiver
			</button>
		</div>
	);
};

export default Visit;
