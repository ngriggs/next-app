import Head from "next/head";
import { Button } from "../components/ui/button";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/app/components/ui/tabs";

const Membership = () => {
	return (
		<div className="flex flex-col items-center justify-center p-10">
			<Head>
				<title>Membership</title>
			</Head>
			<h1 className="mb-5 text-2xl font-bold">Membership</h1>
			<Tabs defaultValue="monthly" className="w-[400px]">
				<TabsList>
					<TabsTrigger value="monthly">Monthly</TabsTrigger>
					<TabsTrigger value="annual">Annual</TabsTrigger>
				</TabsList>
				<TabsContent value="monthly">
					<h2 className="mb-5 text-xl font-bold">Monthly Memberships</h2>
					<p className="mb-5 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
						ipsum vel velit blandit efficitur. Sed dapibus semper sapien, id
						consectetur odio consectetur eu.
					</p>
					<p className="mb-5 text-gray-700">
						<strong>Discounts:</strong> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam vel ipsum vel velit blandit efficitur.
					</p>
				</TabsContent>
				<TabsContent value="annual">
					<h2 className="mb-5 text-xl font-bold">Annual Memberships</h2>
					<p className="mb-5 text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel
						ipsum vel velit blandit efficitur. Sed dapibus semper sapien, id
						consectetur odio consectetur eu.
					</p>
					<p className="mb-5 text-gray-700">
						<strong>Discounts:</strong> Lorem ipsum dolor sit amet, consectetur
						adipiscing elit. Nam vel ipsum vel velit blandit efficitur.
					</p>
				</TabsContent>
			</Tabs>

			{/* Call to Action */}
			<h2 className="mb-5 text-xl font-bold">Sign Up for Membership</h2>
			<Button variant={"giggles"} size={"lg"} className="rounded-full" disabled>
				Sign Up
			</Button>
		</div>
	);
};

export default Membership;
