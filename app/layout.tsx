import "./globals.css";
import Footer from "./components/footer";
import { MainNav } from "./components/mainNav";
import { siteConfig } from "@/app/config/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Giggles Play",
	description: "Welcome to Giggles",
	icons: {
		icon: "/sun.svg",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<body className="font-quicksand w-[100%] mx-auto overflow-x-clip overscroll-contain">
				<div className="max-w-7xl mx-auto font-medium">
					<MainNav items={siteConfig.mainNav} />
					<div className="text-[#232323] mt-[80px]">{children}</div>
				</div>
				<div className="">
					<Footer />
					{/* <Footer2 /> */}
				</div>
			</body>
		</html>
	);
}
