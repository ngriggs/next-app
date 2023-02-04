import "./globals.css";
import Footer from "./components/footer";
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
				<div className="max-w-7xl mx-auto font-summerVibesBold">
					<Navbar3 />
					<div className="font-summerVibesLight">{children}</div>
				</div>
				<div className="font-summerVibesLight">
					<Footer />
				</div>
			</body>
		</html>
	);
}
