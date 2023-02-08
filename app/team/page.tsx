import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";

const About = () => {
	return (
		<div className="flex flex-col h-screen items-center justify-center p-10">
			<Head>
				<title>About Us</title>
			</Head>
			<h1 className="text-2xl font-bold mb-5 text-gray-900">About Us</h1>

			{/* Meet the Owners */}
			<h2 className="text-xl font-bold mb-5 text-gray-900">Meet the Owners</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>

			{/* Our Story */}
			<h2 className="text-xl font-bold mb-5 text-gray-900">Our Story</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>

			{/* Call to Action */}
			<h2 className="text-xl font-bold mb-5 text-gray-900">Get in Touch</h2>
			<p className="mb-5 text-gray-700">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
				vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
				odio consectetur eu.
			</p>
			<Link href="/contact">
				<Button
					label="Contact Us"
					bgColor="#ec6a52"
					hoverColor=""
					styles="shadow-sm font-medium"
				/>
			</Link>
		</div>
	);
};

export default About;
