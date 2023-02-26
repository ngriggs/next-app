import Image from "next/image";
import { Icons } from "./icons";
import { Button } from "./ui/button";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

export default function teamCard({ ...props }) {
	return (
		<div
			className={`group relative grid h-[400px] w-[100%] max-w-[350px] grid-cols-1 overflow-hidden rounded-lg bg-red-300 shadow-lg `}
		>
			<Image
				src={props.url}
				alt={props.name}
				width={1000}
				height={1000}
				className={`${props.imageClassName} absolute -bottom-10 -right-10 max-w-xs rotate-[-8deg] rounded-t-lg transition duration-300 group-hover:rotate-0`}
			/>
			<div className="relative p-4">
				<div className="">
					<h2 className="text-xl font-semibold">{props.name}</h2>
					<h2 className="text-base font-normal">{props.title}</h2>
				</div>
				<div className="absolute bottom-0 my-3 flex flex-row space-x-3">
					{/* <button>
						<Icons.linkedin className="h-[36px] w-[36px]" />
					</button> */}
					<Button variant={"ghost"} className="hover:bg-transparent">
						<a
							href={`mailto: ${props.email}`}
							className="flex h-[36px] w-[36px] rounded-full bg-[#0E76A8] hover:translate-y-[-1px] hover:shadow-xl"
						>
							<Icons.email className="fill-white p-[5px]" />
						</a>
					</Button>
				</div>
			</div>
		</div>
	);
}
