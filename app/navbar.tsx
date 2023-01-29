"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<nav className="grid grid-cols-3 grid-rows-1 justify-between p-4 mx-auto">
				<div className="col-start-1 col-span-1">
					<Link href="/" className="font-bold text-xl">
						Logo
					</Link>
				</div>
				<div className="hidden md:grid md:grid-cols-3 col-start-3 col-span-1 justify-items-center">
					<Link href="/" className="row-span-1">
						Home
					</Link>
					<Link href="/articles" className="row-span-1">
						Articles
					</Link>
					<Link href="#">Contact</Link>
				</div>
				<div className="grid col-start-3 col-span-1 justify-items-end md:hidden">
					<button onClick={() => setOpen(!open)} className="content-end">
						{open ? (
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						) : (
							<Bars3Icon className="h-6 w-6" aria-hidden="true" />
						)}
					</button>
					{open && (
						<div className="absolute top-0 right-0 h-full w-1/3 opacity-1 bg-black text-white">
							<div className="flex flex-col text-center">
								<button
									className="flex justify-end p-4"
									onClick={() => setOpen(!open)}
								>
									<XMarkIcon className="h-6 w-6" aria-hidden="true" />
								</button>
								<Link
									href="/"
									onClick={() => setOpen(!open)}
									className="flex justify-center p-4"
								>
									Home
								</Link>
								<Link
									href="/articles"
									onClick={() => setOpen(!open)}
									className="flex justify-center p-4"
								>
									Articles
								</Link>
								<Link
									href="#"
									onClick={() => setOpen(!open)}
									className="flex justify-center p-4"
								>
									Contact
								</Link>
							</div>
						</div>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
