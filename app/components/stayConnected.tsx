import { Input } from "./ui/input";
import { Button } from "./ui/button";

const stayConnected = () => {
	return (
		<div className="relative grid w-screen left-[calc(-50vw_+_50%)]">
			<div className="bg-giggles-blue py-10 -mb-1 relative w-screen left-0 clip3" />
			<div className="bg-giggles-blue py-10 w-screen relative left-0">
				<h1 className="font-summerVibesSolid font-normal text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl text-slate-50 text-center">
					stay connected
				</h1>
				<p className="text-slate-100 text-md px-5 mx-5 text-center sm:text-xl mt-1">
					sign-up for our email newsletters and be the first to know when we
					have news and updates
				</p>
				<form>
					<div className="max-w-xs flex flex-row mx-auto mt-4">
						{/* <Icons.email className="absolute fill-[#232323] w-[24px] h-[24px] my-auto" /> */}
						<Input
							type="email"
							placeholder="Email"
							className="bg-white rounded-l-full"
							required
						/>
						<Button
							type="submit"
							className="rounded-r-full bg-[#232323]"
							disabled
						>
							→
						</Button>
					</div>
				</form>
			</div>
			<div className="bg-giggles-blue py-10 -mt-1 relative w-screen left-0 clip3 rotate-180" />
			{/* to flip: transform -scale-x-100 */}
		</div>
	);
};

export default stayConnected;
