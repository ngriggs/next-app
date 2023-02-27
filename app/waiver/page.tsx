"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../components/ui/select";

const WaiverForm = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [signature, setSignature] = useState("");

	const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		// Submit form data to server
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("Signature:", signature);
	};

	return (
		// <form onSubmit={handleSubmit} className="rounded-lg bg-white p-10">
		// 	<h1 className="mb-5 text-2xl font-bold">Sign Waiver</h1>

		// 	{/* Full Name */}
		// 	<label htmlFor="fullName" className="mb-2 block font-bold">
		// 		Full Name
		// 	</label>
		// 	<input
		// 		type="text"
		// 		id="fullName"
		// 		value={fullName}
		// 		onChange={(e) => setFullName(e.target.value)}
		// 		className="mb-5 w-full border border-gray-400 p-2"
		// 	/>

		// 	{/* Email */}
		// 	<label htmlFor="email" className="mb-2 block font-bold">
		// 		Email
		// 	</label>
		// 	<input
		// 		type="email"
		// 		id="email"
		// 		value={email}
		// 		onChange={(e) => setEmail(e.target.value)}
		// 		className="mb-5 w-full border border-gray-400 p-2"
		// 	/>

		// 	{/* Submit Button */}
		// 	<div className="flex justify-center">
		// 		<Button variant={"giggles"} type="submit">
		// 			Submit
		// 		</Button>
		// 	</div>
		// </form>
		<form onSubmit={handleSubmit} className="rounded-lg bg-white p-10">
			<div>
				<h1 className="text-center text-3xl">
					Risk Acknowledgement and Waiver
				</h1>
			</div>
			<div className="pt-4 text-base font-normal">
				<p className="py-2">
					I hereby acknowledge, agree and accept the risk of injury and/or
					health illness inherent in any physical activity, program or class
					offered by or at WeOrbit, LLC. Such risks include but are not limited
					to falling, bumping, risks from abrasions, scrapes, cuts, broken,
					sprained or bruised limbs, and even serious injuries as paralysis or
					death, as well as risk from the actions or omission of others.{" "}
				</p>
				<p className="py-2">
					I hereby acknowledge that any inappropriate behavior, such as, but not
					limited to, harassment, physical or health endangerment of self or
					another person, or foul language will result in the immediate removal
					from the premises. I hereby release and discharge WeOrbit, LLC, its
					members, managers, affiliates, agents, employees, contractors,
					successors and assigns, from any and all injury, illness, medical
					conditions, damages, claims, liabilities, expenses or judgments,
					including attorney&apos;s fees and court costs resulting from my
					participation in an activity, program or class at WeOrbit, LLC.{" "}
				</p>
				<p className="py-2">
					I hereby indemnify and hold harmless WeOrbit, LLC, its members,
					managers, affiliates, agents, employees, contractors, successors and
					assigns, from and against any and all injuries, illnesses, medical
					conditions, damages, claims, liabilities, expenses or judgments,
					including attorney&apos;s fees and court costs resulting from any
					negligent or deliberate act or omission of my child(ren), caregiver or
					myself.{" "}
				</p>
				<p className="py-2">
					I understand the play area may contain activities, programs or classes
					that may be physically strenuous and I voluntarily participate in them
					with full knowledge that there is risk of personal injury, property
					loss or death. I agree that neither I, my heirs, assigns or legal
					representatives will sue or make any claims of any kind against
					WeOrbit, LLC or its members, managers, affiliates, agents, employees,
					successors for any personal injury, property damage/loss, or wrongful
					death whether caused by negligence or otherwise.
				</p>
				<p className="py-2">
					Parent Or Legal Guardian Certification And Consent: I hereby certify
					that I am the parent or legal guardian of the Child(ren) whose name(s)
					appears below, and I have authority to waive rights on behalf of the
					minor Child(ren). I understand that this is a permanent waiver to be
					kept on file by WeOrbit, LLC for today&apos;s visit and all subsequent
					and future visits. I have informed myself on the contents of this
					Waiver from WeOrbit, LLC and hereby release from liability and
					indemnify WeOrbit, LLC after reading and signing this agreement.
				</p>
			</div>
			<div className="mx-auto mt-4 max-w-3xl">
				<div className="">
					<Label htmlFor="fname">Parent&apos;s First Name:</Label>
					<Input type="text" id="fname" />
					<Label htmlFor="lname">Parent&apos;s Last name:</Label>
					<Input type="text" id="lname" />
				</div>
				<div>
					<Label htmlFor="phoneNumber">Phone number</Label>
					<Input type="tel" />
				</div>
				<div className="">
					<Label htmlFor="numberOfChildren">Number of Children</Label>
					<Select name="numberOfChildren">
						<SelectTrigger>
							<SelectValue placeholder="Number of Children" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="1 Child">1 Child</SelectItem>
							<SelectItem value="2 Children">2 Children</SelectItem>
							<SelectItem value="3 Children">3 Children</SelectItem>
							<SelectItem value="4 Children">4 Children</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="mt-4 flex justify-center">
					<Button type="submit" variant={"giggles"}>
						Submit
					</Button>
				</div>
			</div>
		</form>
	);
};

export default WaiverForm;
