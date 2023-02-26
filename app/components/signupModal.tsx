"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect, Suspense } from "react";
import NewsLetterSignUpForm from "./subscribeForm";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		let modalShown = getCookie("modalShown");
		if (!modalShown) {
			setTimeout(() => {
				setIsOpen(true);
			}, 5000);
		}
	}, []);

	function closeModal() {
		setIsOpen(false);
		setCookie("modalShown", "true", 30);
	}

	function openModal() {
		setIsOpen(true);
		setCookie("modalShown", "true", 30);
	}

	return (
		<Suspense>
			<div className="mx-auto">
				<Button className="my-8" variant={"giggles"} onClick={openModal}>
					join our newsletter
				</Button>
			</div>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>
					<div className="fixed inset-0 bg-black/30" aria-hidden="true" />
					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="max-h-[300vw] w-full max-w-[800px] overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
									<button
										onClick={closeModal}
										className="absolute top-2 right-2 z-50"
									>
										<XMarkIcon className="h-6 w-6" />
									</button>
									<div className="flex flex-col rounded-lg bg-white shadow-xl sm:flex-row">
										<div className="h-1/2 max-w-full overflow-hidden sm:max-h-full sm:w-1/2">
											<Image
												width={1000}
												height={1000}
												className="aspect-square object-cover sm:aspect-auto sm:h-full"
												src="newsletter-modal.svg"
												alt="Newsletter modal image"
											/>
										</div>
										<div className="my-auto w-full px-6 py-12 text-center align-middle sm:w-1/2 sm:py-6">
											<Dialog.Title
												as="h3"
												className="pb-6 font-summerVibesSolid text-5xl leading-6 text-[#ec6a52]"
											>
												subscribe
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-lg text-[#232323]">
													Join the Giggles Play family and stay in the loop!
													Sign up for our newsletter to receive updates on new
													play areas, special events, and exclusive offers. Let
													the fun and giggles begin with just a few clicks.
													Don&apos;t wait, sign up now!
												</p>
											</div>
											<div className="mx-auto w-3/4">
												<div className="mt-4">
													<NewsLetterSignUpForm onClick={closeModal} />
												</div>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</Suspense>
	);

	function setCookie(name: string, value: string, days: number) {
		let expires = "";
		if (days) {
			let date = new Date();
			date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
			expires = "; expires=" + date.toUTCString();
		}
		document.cookie = name + "=" + (value || "") + expires + "; path=/";
	}
	function getCookie(name: string) {
		let nameEQ = name + "=";
		let ca = document.cookie.split(";");
		for (let i = 0; i < ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === " ") c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
		}
		return null;
	}
}
