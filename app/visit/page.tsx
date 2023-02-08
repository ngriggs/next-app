import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";

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
			<Link href="/waiver">
				<Button
					label="Sign Waiver"
					bgColor=""
					hoverColor=""
					styles="text-white font-medium py-2 px-4 rounded-lg shadow-sm"
				/>
			</Link>
		</div>
	);
};

export default Visit;
