"use client";
import React from "react";
import { Icons } from "./icons";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

export default function teamCard({ ...props }) {
	console.log(props);
	return (
		<div className="group relative grid grid-cols-1 bg-red-300 rounded-lg shadow-lg max-w-[350px] h-[350px] overflow-hidden m-10">
			<img
				src={props.url}
				className="absolute max-w-xs rounded-t-lg -bottom-10 -right-10 -rotate-[8deg] group-hover:rotate-0 transition duration-300"
			/>
			<div className="relative p-4">
				<div className="">
					<h2>{props.name}</h2>
					<h2>{props.title}</h2>
				</div>
				<div className="absolute flex flex-row space-x-3 my-3 bottom-0">
					<button>
						<Icons.linkedin className="w-[36px] h-[36px]" />
					</button>
					<button>
						<Icons.linkedin className="w-[36px] h-[36px]" />
					</button>
				</div>
			</div>
		</div>
	);
}
