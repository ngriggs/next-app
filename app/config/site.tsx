import { NavItem } from "@/app/types/nav";

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
					name: "news",
					description: "Send us any feedback or inquiries",
					href: "/news",
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