import Head from "next/head";
import Link from "next/link";
import Button from "../components/button";
import TeamCard from "../components/teamCard";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

const info = [
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
	},
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
	},
	{
		name: "Noah",
		title: "Manager and Owner",
		url: "noah.png",
		imageClassName: "-bottom-[1em] -right-[4em]",
	},
	{
		name: "Noah",
		title: "Manager and Owner",
		url: "noah.png",
		imageClassName: "-bottom-[1em] -right-[4em]",
	},
];

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
				<h2 className="text-xl font-bold mb-5">
					Having fun is part of the job!
				</h2>
				<p className="mb-5 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
					vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
					odio consectetur eu.
				</p>

				{/* Our Story */}
				<h2 className="text-xl font-bold mb-5">Our Story</h2>
				<p className="mb-5 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
					vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
					odio consectetur eu.
				</p>

				{/* Call to Action */}
				<h2 className="text-xl font-bold mb-5">Get in Touch</h2>
				<p className="mb-5 ">
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
			<div className="grid grid-cols-fluid gap-4 justify-items-center m-4">
				{info.map((info) => (
					<TeamCard {...info} />
				))}
			</div>
		</>
	);
};

export default About;
