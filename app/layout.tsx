import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Footer2 from "./components/footer2";

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
					<div className="text-[#232323]">{children}</div>
				</div>
				<div className="">
					<Footer />
					{/* <Footer2 /> */}
				</div>
			</body>
		</html>
	);
}
