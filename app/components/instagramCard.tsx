"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface InstagramCardProps {
	username: string;
	profileImageUrl: string;
	postImageUrl: string;
	caption: string;
}

const InstagramCard: React.FC<InstagramCardProps> = ({
	username,
	profileImageUrl,
	postImageUrl,
	caption,
}) => {
	return (
		<motion.div
			key={username}
			className="pb-1 overflow-hidden rounded-lg"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<Link href={postImageUrl} target="_blank">
				<Image
					decoding="async"
					className="object-cover aspect-square hover:scale-110 rounded-lg transition duration-200"
					src={profileImageUrl}
					alt="instagram post"
					width={600}
					height={600}
				/>
			</Link>
			{/* <h2 className="text-slate-600 mt-1 text-sm font-semibold">
    {image.caption}
</h2> */}
		</motion.div>
	);
};

export default InstagramCard;
