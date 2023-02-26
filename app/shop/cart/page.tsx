import Image from "next/image";
import React from "react";

const Shop: React.FC = () => {
	return (
		<div className="flex flex-wrap">
			<div className="w-full p-3 md:w-1/2 lg:w-1/3">
				<div className="overflow-hidden rounded-lg bg-white shadow-lg">
					<Image
						className="h-56 w-full object-cover object-center"
						src="https://via.placeholder.com/500x280"
						alt="Product 1"
						width={1000}
						height={1000}
					/>
					<div className="p-6">
						<h1 className="text-xl font-medium text-gray-900">Product 1</h1>
						<p className="mt-2 text-gray-600">$20</p>
						<button className="mt-4 rounded-lg bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<div className="w-full p-3 md:w-1/2 lg:w-1/3">
				<div className="overflow-hidden rounded-lg bg-white shadow-lg">
					<Image
						className="h-56 w-full object-cover object-center"
						src="https://via.placeholder.com/500x280"
						alt="Product 2"
						width={1000}
						height={1000}
					/>
					<div className="p-6">
						<h1 className="text-xl font-medium text-gray-900">Product 2</h1>
						<p className="mt-2 text-gray-600">$30</p>
						<button className="mt-4 rounded-lg bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
			<div className="w-full p-3 md:w-1/2 lg:w-1/3">
				<div className="overflow-hidden rounded-lg bg-white shadow-lg">
					<Image
						className="h-56 w-full object-cover object-center"
						src="https://via.placeholder.com/500x280"
						alt="Product 3"
						width={1000}
						height={1000}
					/>
					<div className="p-6">
						<h1 className="text-xl font-medium text-gray-900">Product 3</h1>
						<p className="mt-2 text-gray-600">$40</p>
						<button className="mt-4 rounded-lg bg-indigo-500 py-2 px-4 text-white hover:bg-indigo-600">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
