"use client";

import { DiscussionEmbed } from "disqus-react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const Comments = ({ title, slug }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted)
		return (
			<div className="block py-20 text-center">
				<Spinner />
			</div>
		);

	return (
		<DiscussionEmbed
			shortname={process.env.NEXT_PUBLIC_DISCUSS_SHORTNAME}
			config={{
				url: process.env.NEXT_PUBLIC_SITE_URL,
				identifier: slug,
				title: title,
			}}
		/>
	);
};

export default Comments;
