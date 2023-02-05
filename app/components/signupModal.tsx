"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, Suspense } from "react";
import NewsLetterSignUpForm from "./subscribeForm";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "./button";

export default function MyModal() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<Suspense>
			<div className="mx-auto">
				<Button
					label="join our newsletter"
					bgColor="[#ec6a52]"
					styles="m-4 font-normal"
					hoverColor=""
					onClick={openModal}
				/>
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
						<div className="fixed inset-0 bg-black bg-opacity-25" />
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
								<Dialog.Panel className="w-full max-w-screen-lg transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
									<button
										onClick={closeModal}
										className="absolute z-60 top-2 right-2"
									>
										<XMarkIcon className="h-6 w-6" />
									</button>
									<div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-xl">
										<div className="max-w-full h-1/2 overflow-hidden sm:w-1/2 sm:max-h-full">
											<img
												className="object-cover aspect-square sm:aspect-auto sm:h-full"
												src="newsletter-modal.svg"
												alt="Newsletter modal image"
											/>
										</div>
										<div className="w-full sm:w-1/2 px-6 sm:py-6 py-12 text-center align-middle my-auto">
											<Dialog.Title
												as="h3"
												className="font-summerVibesSolid text-5xl pb-6 leading-6 text-[#ec6a52]"
											>
												subscribe
											</Dialog.Title>
											<div className="mt-2">
												<p className="text-black text-lg">
													Join the Giggles Play family and stay in the loop!
													Sign up for our newsletter to receive updates on new
													play areas, special events, and exclusive offers. Let
													the fun and giggles begin with just a few clicks.
													Don't wait, sign up now!
												</p>
											</div>
											<div className="w-3/4 mx-auto">
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
}
