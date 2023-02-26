import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import TeamCard from "../components/teamCard";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

const info = [
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "/jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
	},
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "/jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
	},
	{
		name: "Noah",
		title: "Manager and Owner",
		url: "/noah.png",
		imageClassName: "-bottom-[1em] -right-[4em]",
	},
	{
		name: "Noah",
		title: "Manager and Owner",
		url: "/noah.png",
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
				<h1 className="mb-2 text-center font-summerVibesSolid text-4xl font-normal tracking-tight sm:text-5xl sm:leading-none">
					meet the team
				</h1>

				{/* Meet the Owners */}
				<h2 className="mb-5 text-2xl font-bold">
					Having fun is part of the job!
				</h2>
				<p className="mb-5 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
					vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
					odio consectetur eu.
				</p>

				{/* Our Story */}
				<h2 className="mb-5 text-xl font-bold">Our Story</h2>
				<p className="mb-5 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
					vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
					odio consectetur eu.
				</p>

				{/* Call to Action */}
				<h2 className="mb-5 text-xl font-bold">Get in Touch</h2>
				<p className="mb-5 ">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel ipsum
					vel velit blandit efficitur. Sed dapibus semper sapien, id consectetur
					odio consectetur eu.
				</p>
				<Link href="/contact">
					<Button>Contact Us</Button>
				</Link>
			</div>
			<div className="m-4 grid grid-cols-fluid justify-items-center gap-4">
				{info.map((info) => (
					<TeamCard key={info.name} {...info} />
				))}
			</div>
		</>
	);
};

export default About;
