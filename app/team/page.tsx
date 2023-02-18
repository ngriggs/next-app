import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";
import { Icons } from "../components/icons";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

const About = () => {
	return (
		<>
			<div className="flex flex-col items-center p-10">
				<Head>
					<title>About Us</title>
				</Head>
				<h1 className="mb-2 font-summerVibesSolid font-normal text-4xl tracking-tight text-center sm:text-5xl sm:leading-none">
					meet the team
				</h1>

				{/* Meet the Owners */}
				<h2 className="text-xl font-bold mb-5 text-gray-900">
					Having fun is part of the job!
				</h2>
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
			<div className="group relative grid grid-cols-1 bg-red-300 rounded-lg shadow-lg max-w-[400px] h-[400px] overflow-hidden m-10">
				<img
					src={url}
					className="absolute max-w-xs rounded-t-lg -bottom-10 -right-10 -rotate-[8deg] group-hover:rotate-0 transition duration-300"
				/>
				<div className="p-4">
					<div className="">
						<h2>Jess</h2>
						<h2>Manager and Owner</h2>
					</div>
					<div className="flex flex-col max-w-[10rem] space-y-2">
						<button>
							<Icons.linkedin className="w-[24px] h-[24px]" />
						</button>
						<button className="rounded-full bg-blue-300 text-white px-2 py-1">
							something
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
