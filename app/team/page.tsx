import Head from "next/head";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import TeamCard from "../components/teamCard";
import type { Metadata } from "next";
import { team } from "@/app/config/site";

export const metadata: Metadata = {
	title: "Meet the Team",
	description: "The Giggles Play Team Members",
	icons: {
		icon: "/sun.svg",
	},
};

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
					Our front-of-house positions including working in guest services and
					helping kids in our climbing and playground arenas. You will also be
					in charge of hosting parties and keeping our store spotlessly clean
					for visitors.
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
				<p className="mb-5 ">Do you want to join our team?</p>
				<Link href="/contact">
					<Button variant={"giggles"}>Contact Us</Button>
				</Link>
			</div>
			<div className="m-4 grid grid-cols-fluid justify-items-center gap-4">
				{team.map((info) => (
					<TeamCard key={info.name} {...info} />
				))}
			</div>
		</>
	);
};

export default About;
