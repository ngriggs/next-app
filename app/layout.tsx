import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body className="font-quicksand">
				<div className="max-w-7xl mx-auto font-bold">
					<Navbar />
					<div className="">{children}</div>
				</div>
				<div className="">
					<Footer />
				</div>
			</body>
		</html>
	);
}
