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
				hostname: "**.cdninstagram.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "via.placeholder.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
