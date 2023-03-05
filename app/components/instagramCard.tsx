import React from "react";
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
			<div key={id} className="overflow-hidden rounded-lg">
				<Link href={postImageUrl} target="_blank">
					<Image
						className="aspect-square rounded-lg object-cover transition duration-100 hover:scale-110"
						src={profileImageUrl}
						alt="instagram post"
						width={600}
						height={600}
						priority
					/>
				</Link>
				{/* <h2 className="text-slate-600 mt-1 text-sm font-semibold">
    {image.caption}
</h2> */}
			</div>
		</div>
	);
};

export default InstagramCard;
