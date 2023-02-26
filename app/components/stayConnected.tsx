import { Input } from "./ui/input";
import { Button } from "./ui/button";

const stayConnected = () => {
	return (
		<div className="relative left-[calc(-50vw_+_50%)] grid w-screen">
			<div className="clip3 relative left-0 -mb-1 w-screen bg-giggles-blue py-10" />
			<div className="relative left-0 w-screen bg-giggles-blue py-10">
				<h1 className="text-center font-summerVibesSolid text-2xl font-normal text-slate-50 min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
					stay connected
				</h1>
				<p className="mx-5 mt-1 px-5 text-center text-slate-100 sm:text-xl">
					sign-up for our email newsletters and be the first to know when we
					have news and updates
				</p>
				<form>
					<div className="mx-auto mt-4 flex max-w-xs flex-row">
						{/* <Icons.email className="absolute fill-[#232323] w-[24px] h-[24px] my-auto" /> */}
						<Input
							type="email"
							placeholder="Email"
							className="rounded-l-full bg-white"
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
			<div className="clip3 relative left-0 -mt-1 w-screen rotate-180 bg-giggles-blue py-10" />
			{/* to flip: transform -scale-x-100 */}
		</div>
	);
};

export default stayConnected;
