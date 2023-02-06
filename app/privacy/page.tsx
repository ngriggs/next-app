import React from "react";
import Link from "next/link";

const PrivacyPolicy: React.FC = () => {
	return (
		<div className="container mx-auto p-10">
			<h2 className="text-lg font-bold mb-5">Privacy Policy</h2>
			<p>
				At Giggles Play, we are committed to protecting your privacy. This
				Privacy Policy outlines the information we collect and how it is used.
				By using our website, you agree to the terms of this Privacy Policy.
			</p>
			<h3 className="text-lg font-bold mt-10 mb-3">Information Collection</h3>
			<p>
				We collect information that you voluntarily provide to us through forms,
				such as email addresses and contact information. This information is
				used to respond to your inquiries and to send updates about our
				services.
			</p>
			<h3 className="text-lg font-bold mt-10 mb-3">Information Use</h3>
			<p>
				The information we collect is used to provide you with better customer
				service and to communicate with you about our services. We will never
				sell or rent your information to third parties.
			</p>
			<h3 className="text-lg font-bold mt-10 mb-3">Data Security</h3>
			<p>
				We take appropriate security measures to protect against unauthorized
				access to or unauthorized alteration, disclosure, or destruction of
				data. These measures include internal reviews of our data collection,
				storage, and processing practices and security measures, as well as
				physical security measures to guard against unauthorized access to
				systems where we store personal data.
			</p>
			<h3 className="text-lg font-bold mt-10 mb-3">
				Changes to Privacy Policy
			</h3>
			<p>
				We may update this Privacy Policy from time to time. When we do, we will
				revise the updated date at the top of this page. We encourage you to
				periodically review this Privacy Policy to stay informed about how we
				are protecting the personal information we collect. Your continued use
				of the service constitutes your agreement to this Privacy Policy and any
				updates.
			</p>
			<h3 className="text-lg font-bold mt-10 mb-3">Contact Us</h3>
			<p>
				If you have any questions or concerns about this Privacy Policy, please
				contact us at{" "}
				<Link
					href={"/contact"}
					className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
				>
					the following page
				</Link>
				.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
