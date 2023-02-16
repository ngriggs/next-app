import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { NavigationMenuDemo } from "@/app/components/mainNav";
import { MobileNav } from "./components/mobileNav";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="font-quicksand w-[100%] mx-auto overflow-x-clip overscroll-contain">
				<div className="max-w-7xl mx-auto font-bold">
					<Navbar />
					{/* <NavigationMenuDemo />
					<MobileNav /> */}
					<div className="">{children}</div>
				</div>
				<div className="">
					<Footer />
				</div>
			</body>
		</html>
	);
}
