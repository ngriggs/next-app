interface Subheading {}

export interface NavItem {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	subheadings?: Subheading[];
}

export interface MainNavProps {
	items?: NavItem[];
}

interface Subheading {
	name: string;
	description: string;
	href: string;
	target: string;
	icon: string;
}
