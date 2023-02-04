import "./globals.css";
import Footer from "./components/footer";
import Navbar2 from "./components/navbar2";
import Navbar3 from "./components/navbar";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<div className="max-w-7xl mx-auto">
					<Navbar3 />
					<Navbar2 />
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
