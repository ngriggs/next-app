import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Footer2 from "./components/footer2";
import { MainNav } from "./components/mainNav";
import { siteConfig } from "@/app/config/site";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="font-quicksand w-[100%] mx-auto overflow-x-clip overscroll-contain">
				<div className="max-w-7xl mx-auto font-medium">
					{/* <Navbar /> */}
					<div className="my-20" />
					<MainNav items={siteConfig.mainNav} />
					{/* <MobileNav /> */}
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
