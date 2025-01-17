"use client";

import Image from "next/image";
import StarRatings from "react-star-ratings";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";

const Review = ({ review: { name, meta, givenreview, image, text } }) => {
	return (
		<div className="review card mt-11 p-4 md:p-5">
			<div className="review-image fiximage relative -mt-14 mb-4 inline-block h-20 w-20 overflow-hidden rounded-full border-4 border-primary md:-mt-16">
				<Image
					loader={imageLoader}
					unoptimized={true}
					src={image}
					alt="user image"
					height={80}
					width={80}
					placeholder="blur"
					blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(80, 80))}`}
				/>
			</div>
			<h5 className="mb-0">{name}</h5>
			<p className="mb-2 text-body">
				<small>{meta}</small>
			</p>
			<div className="review-stars mb-3">
				<StarRatings
					rating={Number(givenreview)}
					starRatedColor="#FFD233"
					numberOfStars={5}
					name="rating"
					starSpacing="2px"
					starDimension="18px"
				/>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Review;
