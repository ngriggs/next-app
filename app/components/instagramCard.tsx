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
	id: number;
}

const InstagramCard: React.FC<InstagramCardProps> = ({
	id,
	username,
	profileImageUrl,
	postImageUrl,
	caption,
}) => {
	return (
		<div key={id}>
			<motion.div
				key={id}
				className="overflow-hidden rounded-lg"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
			>
				<Link href={postImageUrl} target="_blank">
					<Image
						decoding="async"
						className="aspect-square rounded-lg object-cover transition duration-100 hover:scale-110"
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
		</div>
	);
};

export default InstagramCard;
