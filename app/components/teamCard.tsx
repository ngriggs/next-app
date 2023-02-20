import { Icons } from "./icons";

const url =
	"https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80";

export default function teamCard({ ...props }) {
	console.log(props);
	return (
		<div
			className={`group relative grid grid-cols-1 bg-red-300 rounded-lg shadow-lg w-[100%] max-w-[350px] h-[400px] overflow-hidden `}
		>
			<img
				src={props.url}
				className={`${props.imageClassName} absolute max-w-xs rounded-t-lg -bottom-10 -right-10 -rotate-[8deg] group-hover:rotate-0 transition duration-300`}
			/>
			<div className="relative p-4">
				<div className="">
					<h2 className="text-xl">{props.name}</h2>
					<h2 className="text-lg">{props.title}</h2>
				</div>
				<div className="absolute flex flex-row space-x-3 my-3 bottom-0">
					<button>
						<Icons.linkedin className="w-[36px] h-[36px]" />
					</button>
					<button>
						<div className="flex bg-[#0E76A8] rounded-full w-[36px] h-[36px]">
							<Icons.email className="fill-white  p-[5px]" />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
