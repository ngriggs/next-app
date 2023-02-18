import React from "react";
// import "@shopify/shopify-api/adapters/node";
// import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
// import { restResources } from "@shopify/shopify-api/rest/admin/2023-01";

// const shopify = shopifyApi({
// 	apiKey: "App_API_key",
// 	apiSecretKey: "Admin_API_Access_Token", // Note: this is the API access token, NOT the API Secret Key
// 	apiVersion: LATEST_API_VERSION,
// 	// isCustomStoreApp: true,                     // this MUST be set to true (default is false)
// 	scopes: [],
// 	isEmbeddedApp: false,
// 	hostName: "my-shop.myshopify.com",
// 	// Mount REST resources.
// 	restResources,
// });

const Shop: React.FC = () => {
	return (
		<div className="flex flex-wrap">
			<div className="w-full md:w-1/2 lg:w-1/3 p-3">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
					<img
						className="w-full h-56 object-cover object-center"
						src="https://via.placeholder.com/500x280"
						alt="Product 1"
					/>
					<div className="p-6">
						<h1 className="text-xl font-medium text-gray-900">Product 1</h1>
						<p className="text-gray-600 mt-2">$20</p>
						<button className="bg-indigo-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-indigo-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 lg:w-1/3 p-3">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
					<img
						className="w-full h-56 object-cover object-center"
						src="https://via.placeholder.com/500x280"
						alt="Product 2"
					/>
					<div className="p-6">
						<h1 className="text-xl font-medium text-gray-900">Product 2</h1>
						<p className="text-gray-600 mt-2">$30</p>
						<button className="bg-indigo-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-indigo-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<div className="w-full md:w-1/2 lg:w-1/3 p-3">
				<div className="bg-white rounded-lg shadow-lg overflow-hidden">
					<img
						className="w-full h-56 object-cover object-center"
						src="https://via.placeholder.com/500x280"
						alt="Product 3"
					/>
					<div className="p-6">
						<h1 className="text-xl font-medium text-gray-900">Product 3</h1>
						<p className="text-gray-600 mt-2">$40</p>
						<button className="bg-indigo-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-indigo-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
