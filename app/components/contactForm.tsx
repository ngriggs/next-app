"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
import { Textarea } from "@/app/components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
type Inputs = {
	fullName: string;
	email: string;
	message: string;
	signup: boolean;
};
const defaultValues = {
	signup: false,
};

const contactForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<Inputs>({ defaultValues });
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="rounded-lg bg-white p-10 shadow-xl "
		>
			<h2 className="mb-2 font-summerVibesSolid text-3xl font-normal">
				contact us
			</h2>
			<p></p>
			{/* Full Name */}
			<Label htmlFor="fullName" className="text-base font-bold">
				Full Name
			</Label>
			<Input
				placeholder={"Full Name"}
				className="mb-5 w-full rounded-md border border-gray-400 p-2"
				{...register("fullName")}
			/>

			{/* Email */}
			<Label htmlFor="email" className="text-base font-bold">
				Email
			</Label>
			<Input
				placeholder="Email"
				className="mb-5 w-full rounded-md border border-gray-400 p-2"
				{...register("email", { required: true })}
			/>

			{/* Signature */}
			<Label htmlFor="signature" className="text-base font-bold">
				Message
			</Label>
			<Textarea
				className="mb-5 h-[8rem] w-full border border-gray-400 p-2 placeholder:text-slate-400"
				placeholder="Type your message here."
				{...register("message", { required: true })}
			/>
			<div className="mt-4 flex space-x-2">
				{/* <input type="checkbox" id="signup" {...register("signup")} /> */}
				<Controller
					name="signup"
					control={control}
					render={({ field: { onChange, value } }) => (
						<Checkbox id="signup" onCheckedChange={onChange} checked={value} />
					)}
				/>
				<Label htmlFor="signup">Sign up for our newsletter</Label>
			</div>

			{/* Submit Button */}
			<div className="flex justify-center">
				<Button variant={"giggles"} type="submit" className="min-w-[6rem]">
					Send
				</Button>
			</div>
		</form>
	);
};

export default contactForm;
