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
		],
	},
};

module.exports = nextConfig;
