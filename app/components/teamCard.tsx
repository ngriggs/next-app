import Image from "next/image";
import { Icons } from "./icons";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

export default function teamCard({ ...props }) {
	console.log(props);
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
					<h2 className="text-xl">{props.name}</h2>
					<h2 className="text-lg">{props.title}</h2>
				</div>
				<div className="absolute bottom-0 my-3 flex flex-row space-x-3">
					<button>
						<Icons.linkedin className="h-[36px] w-[36px]" />
					</button>
					<button>
						<div className="flex h-[36px] w-[36px] rounded-full bg-[#0E76A8]">
							<Icons.email className="fill-white  p-[5px]" />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
