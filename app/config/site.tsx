import { NavItem } from "@/app/types/nav";
import { Icons } from "../components/icons";

interface SiteConfig {
	name: string;
	description: string;
	mainNav: NavItem[];
	links: {
		twitter: string;
		github: string;
		docs: string;
	};
}

export const siteConfig: SiteConfig = {
	name: "Next.js",
	description:
		"Beautifully designed components built with Radix UI and Tailwind CSS.",
	mainNav: [
		{
			title: "about",
			href: "/",
			subheadings: [
				{
					name: "giggles",
					description:
						"Book an upcoming party or check availability on your event date",
					href: "/giggles",
					target: "_top",
					icon: "CalendarDaysIcon",
				},
				{
					name: "team",
					description:
						"Book an upcoming party or check availability on your event date",
					href: "/team",
					target: "_top",
					icon: "CalendarDaysIcon",
				},
				{
					name: "insights",
					description: "Send us any feedback or inquiries",
					href: "/insights",
					target: "_top",
					icon: "CursorArrowRaysIcon",
				},
				{
					name: "contact us",
					description: "Sign a waiver for your children in advance",
					href: "/contact",
					target: "_top",
					icon: "ShieldCheckIcon",
				},
				{
					name: "FAQs",
					description: "Learn more about the team.",
					href: "/faq",
					target: "_top",
					icon: "Squares2X2Icon",
				},
			],
		},
		{
			title: "play",
			href: "/giggles",
			subheadings: [
				{
					name: "visit",
					description:
						"Book an upcoming party or check availability on your event date",
					href: "/visit",
					target: "_top",
					icon: "CalendarDaysIcon",
				},
				{
					name: "membership",
					description: "Send us any feedback or inquiries",
					href: "/membership",
					target: "_top",
					icon: "CursorArrowRaysIcon",
				},
				{
					name: "waiver",
					description: "Sign a waiver for your children in advance",
					href: "/waiver",
					target: "_top",
					icon: "ShieldCheckIcon",
				},
			],
		},
		{
			title: "parties",
			href: "/parties",
			subheadings: [
				{
					name: "themes",
					description:
						"Book an upcoming party or check availability on your event date",
					href: "/parties",
					target: "_top",
					icon: "CalendarDaysIcon",
				},

				{
					name: "gallery",
					description: "Sign a waiver for your children in advance",
					href: "/gallery",
					target: "_top",
					icon: "ShieldCheckIcon",
				},
			],
		},
		{
			title: "shop",
			href: "/shop",
			subheadings: [
				{
					name: "cart",
					description:
						"Book an upcoming party or check availability on your event date",
					href: "/shop/cart",
					target: "_top",
					icon: "CalendarDaysIcon",
				},
				{
					name: "checkout",
					description: "Sign a waiver for your children in advance",
					href: "/shop/checkout",
					target: "_top",
					icon: "ShieldCheckIcon",
				},
			],
		},
	],
	links: {
		twitter: "https://twitter.com/shadcn",
		github: "https://github.com/shadcn/ui",
		docs: "https://ui.shadcn.com",
	},
};

// Social Media Links
export const socialMedia = [
	{
		id: "social-media-1",
		icon: "/instagram.svg",
		link: "https://www.instagram.com/giggles.play/?fbclid=IwAR0-NhgItCvF9QTFJVUSnTPRaCS12Bv5HfOzghQa2SemmTWXGQpM_EwuGls",
	},
	{
		id: "social-media-2",
		icon: "/facebook.svg",
		link: "https://www.facebook.com/profile.php?id=100089486487628",
	},
];

// Team Members
export const team = [
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "/jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
		email: "jess@gigglesplay.com",
	},
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "/jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
		email: "jess@gigglesplay.com",
	},
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "/jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
		email: "jess@gigglesplay.com",
	},
	{
		name: "Jess",
		title: "Manager and Owner",
		url: "/jess.png",
		imageClassName: "-bottom-[10em] -right-[5em]",
		email: "jess@gigglesplay.com",
	},
	{
		name: "Noah",
		title: "Manager and Owner",
		url: "/noah.png",
		imageClassName: "-bottom-[1em] -right-[4em]",
		email: "noah@gigglesplay.com",
	},
	{
		name: "Noah",
		title: "Manager and Owner",
		url: "/noah.png",
		imageClassName: "-bottom-[1em] -right-[4em]",
		email: "noah@gigglesplay.com",
	},
];

// Frequently Asked Questions
export const questions = [
	{
		question: "What is your refund policy?",
		answer: "We have a XX-day refund policy for all of our products.",
	},
	{
		question: "Do you offer warranties on your products?",
		answer: "Yes, we offer a X-year warranty on all of our products.",
	},
	{
		question: "How long does shipping take?",
		answer: "Shipping typically takes 3-5 business days.",
	},
	{
		question: "Can I bring my own decorations?",
		answer: "Yes, you are welcome to bring your own decorations.",
	},
	{
		question: "Is there a limit on the number of guests I can invite?",
		answer: "There is a maximum capacity of 50 guests for our party events.",
	},
	{
		question: "Do you provide catering services?",
		answer:
			"TBD, we may provide catering services as part of our premium package or as a separate option.",
	},
];

export const discounts = [
	{
		title: "Bestie",
		description: "Annual Discount",
		price: "$99",
		per: "family",
		features: [
			{ feature: "6 Guest Passes per year" },
			{ feature: "Special daily pass pricing" },
			{ feature: "Special monthly membership pricing" },
			{ feature: "10% off party pricing", caveat: "(excluding add-ons)" },
			{ feature: "10% off classes & workshops" },
			{ feature: "Early access to classes & events" },
			{ feature: "Special members-only hours" },
			{ feature: "Special members-only events" },
		],
	},
	{
		title: "Basic Bestie",
		description: "Daily Pass + Annual Discount",
		price: "$13",
		per: "child",
		crossedOut: "$18",
		features: [
			{ feature: "Play for the day" },
			{ feature: "Re-entry" },
			{ feature: "Discounts for siblings", caveat: "($8/sibling)" },
		],
	},
	{
		title: "Buddy Plus",
		description: "Monthly + Annual Discount",
		price: "$50",
		per: "child",
		crossedOut: "$65",
		features: [
			{ feature: "Unlimited visits" },
			{ feature: "1 Friend Pass per month" },
			{ feature: "Discount for siblings", caveat: "($30/sibling)" },
			{ feature: "Special members-only hours" },
			{ feature: "Special members-only events" },
		],
	},
];
export const memberships = [
	{
		title: "Buddy",
		description: "Monthly",
		price: "$65",
		per: "child",
		features: [
			{ feature: "Unlimited visits" },
			{ feature: "1 Guest Pass per month" },
			{ feature: "Discount for siblings", caveat: "($43/sibling)" },
			{ feature: "Special members-only hours" },
			{ feature: "Special members-only events" },
		],
	},
	{
		title: "Bestie",
		description: "Annual Discount",
		price: "$99",
		per: "family",
		features: [
			{ feature: "6 Guest Passes per year" },
			{ feature: "Special daily pass pricing" },
			{ feature: "Special monthly membership pricing" },
			{ feature: "10% off party pricing", caveat: "(excluding add-ons)" },
			{ feature: "10% off classes & workshops" },
			{ feature: "Early access to classes & events" },
			{ feature: "Special members-only hours" },
			{ feature: "Special members-only events" },
		],
	},
];
export const passes = [
	{
		title: "Basic",
		description: "Daily Pass",
		price: "$18",
		per: "child",
		features: [
			{ feature: "Play for the day" },
			{ feature: "Re-entry" },
			{ feature: "Discount for siblings", caveat: "($12/sibling)" },
		],
	},
	{
		title: "Basic Bestie",
		description: "Daily Pass + Annual Discount",
		price: "$13",
		crossedOut: "$18",
		per: "child",
		features: [
			{ feature: "Play for the day" },
			{ feature: "Re-entry" },
			{ feature: "Discount for siblings", caveat: "($8/sibling)" },
		],
	},
	{
		title: "Friend",
		variant: "popular",
		price: "$162",
		per: "child",
		crossedOut: "$180",
		features: [
			{ feature: "10 visits" },
			{ feature: "Re-entry" },
			{ feature: "Discount for siblings", caveat: "($108/sibling)" },
		],
	},
];

export const cards = [
	{
		price: "Price 0",
		contents: [
			{
				check: <Icons.customCheck1 />,
				description: "Donec at tristique.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <Icons.customX1 />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 1",
		contents: [
			{
				check: <Icons.customCheck1 />,
				description: "Donec at tristique.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <Icons.customX1 />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 2",
		contents: [
			{
				check: <Icons.customCheck1 />,
				description: "Donec at tristique.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <Icons.customX1 />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 3",
		contents: [
			{
				check: <Icons.customCheck1 />,
				description: "Donec at tristique.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Nullam sed aliquam eros, ac.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <Icons.customX1 />,
				description: "In rhoncus.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Etiam vulputate eleifend.",
				lineThrough: "line-through",
			},
			{
				check: <Icons.customX1 />,
				description: "Lorem ipsum dolor.",
				lineThrough: "line-through",
			},
		],
	},
	{
		price: "Price 4",
		contents: [
			{
				check: <Icons.customCheck1 />,
				description: "Maecenas dignissim convallis sem vel.",
			},
			{
				check: <Icons.customCheck1 />,
				description: "Donec at tristique.",
			},
		],
	},
];
