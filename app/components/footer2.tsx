import {
	DevicePhoneMobileIcon,
	MapPinIcon,
	EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import SignUpModal from "./signupModal";
const socialMedia = [
	{
		id: "social-media-1",
		icon: "instagram.svg",
		link: "https://www.instagram.com/",
	},
	{
		id: "social-media-2",
		icon: "facebook.svg",
		link: "https://www.facebook.com/",
	},
];
export default function Footer() {
	return (
		<>
			<div className="relative ">
				<div className="absolute flex flex-row w-screen mx-auto bg-blue-50">
					<div className="w-1/2 flex flex-col space-y-20 p-4">
						<Link
							href="/"
							className="flex justify-center items-center max-h-36 mt-15"
						>
							<Image
								className="hover:scale-105"
								width={288}
								height={288}
								alt="logo"
								src="/giggles.svg"
								priority={false}
							/>
						</Link>
						<p>
							*Please note that our weekend opening hours can be affected by
							scheduled private events
						</p>
					</div>
					<div className="w-1/2 flex flex-col">
						<div className="mx-auto">
							{" "}
							<div className="flex flex-col items-center justify-center h-full text-[#232323] p-10">
								<p className="text-xl mt-4 font-extrabold">
									Bring joy and imagination to your child's playtime
								</p>
								<SignUpModal />
							</div>
						</div>
						<div className="flex flex-row">
							<div className="px-2 w-1/2">
								<div className="bg-white rounded-lg p-6">
									<h3 className="text-lg font-medium">Hours of Operation</h3>
									<p className="text-gray-700">Monday - Friday: 9am - 5pm</p>
									<p className="text-gray-700">Saturday: 10am - 6pm</p>
									<p className="text-gray-700">Sunday: 12pm - 5pm</p>
								</div>
							</div>
							<div className="px-2 w-1/2">
								<div className="bg-white rounded-lg p-6">
									<div className="m-2.5 inline-flex items-center">
										<MapPinIcon className="mr-2 w-6 h-6 text-[#ec6a52]" />
										<p className="text-gray-600 font-semibold">
											328 Green Bay Road, Highwood, IL 60040
										</p>
									</div>
									{/* :::Phone */}
									<div className="m-2.5 inline-flex items-center">
										<DevicePhoneMobileIcon className="mr-2 w-6 h-6 text-[#ec6a52]" />
										<p className="text-gray-600 font-semibold">357-233-9644</p>
									</div>
									{/* :::Address */}
									<div className="m-2.5 inline-flex items-center">
										<EnvelopeIcon className="mr-2 w-6 h-6 text-[#ec6a52]" />
										<p className="text-gray-600 font-semibold">
											my-email@fancymail.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex w-screen bottom-0 absolute -mb-10 bg-blue-50">
						<div className="mx-auto w-screen sm:max-w-7xl flex flex-col gap-y-4 px-4 py-3 gap-x-4 text-center text-[#232323] sm:flex-row sm:justify-between sm:text-left">
							<div className="">© 2023 Giggles Play | All Rights Reserved</div>
							<div className="flex flex-row justify-center md:mt-0 mt-6">
								{socialMedia.map((social, index) => (
									<Image
										key={social.id}
										src={social.icon}
										alt={social.id}
										height={21}
										width={21}
										className={`w-[21px] h-[21px] object-contain cursor-pointer hover:scale-105 ${
											index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
										}`}
									/>
								))}
							</div>
							<div className="">
								<Link className="hover:underline" href="/privacy">
									Privacy Policy
								</Link>
								<span> | </span>
								<Link className="hover:underline" href="/tos">
									Terms of Service
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
