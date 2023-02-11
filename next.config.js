/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.datocms-assets.com",
				port: "",
				pathname: "/93822/**",
			},
			{
				protocol: "https",
				hostname: "scontent-ord5-2.cdninstagram.com",
				port: "",
				pathname: "/v/t51.29350-15/**",
			},
		],
	},
};

module.exports = nextConfig;
