import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Navbar2 from "./components/navbar2";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<Navbar2 />
				<div className="max-w-7xl mx-auto"> {children}</div>

				<Footer />
			</body>
		</html>
	);
}
