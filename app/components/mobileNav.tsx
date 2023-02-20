"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/app/components/icons";
import { Button } from "@/app/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/app/components/ui/dropdownMenu";

export function MobileNav() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="-ml-4 text-base hover:bg-transparent focus:ring-0  focus:ring-offset-0 sm:hidden"
				>
					<Icons.logo className="mx-2 h-4 w-4" />{" "}
					<span className="font-bold">Menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				align="start"
				sideOffset={24}
				alignOffset={4}
				className="w-[300px] overflow-scroll"
			>
				<DropdownMenuItem asChild>
					<Link href="/" className="flex items-center">
						<Icons.logo className="mr-2 h-4 w-4" /> something
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
