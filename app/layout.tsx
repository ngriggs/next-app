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
			<body className="mx-auto w-[100%] overflow-x-clip overscroll-contain font-quicksand">
				<div className="mx-auto max-w-7xl font-medium">
					<MainNav items={siteConfig.mainNav} />
					<div className="mt-[80px] text-[#232323]">{children}</div>
				</div>
				<div className="">
					<Footer />
					{/* <Footer2 /> */}
				</div>
			</body>
		</html>
	);
}
