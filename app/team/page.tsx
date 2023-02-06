import Head from "next/head";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<Head>
				<title>About Us</title>
			</Head>
			<h1 className="text-2xl font-bold mb-5">About Us</h1>

			{/* Meet the Owners */}
			<h2 className="text-xl font-bold mb-5">Meet the Owners</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>

			{/* Our Story */}
			<h2 className="text-xl font-bold mb-5">Our Story</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>

			{/* Call to Action */}
			<h2 className="text-xl font-bold mb-5">Get in Touch</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>
			<button className="bg-indigo-500 text-white py-2 px-4 rounded">
				Contact Us
			</button>
		</div>
	);
};

export default About;
