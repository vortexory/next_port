"use client";

import { AppProvider } from "@/context/appContext";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
import { ParallaxProvider } from "react-scroll-parallax";

export default function RootClientLayout({ children }) {
	const queryClientRef = useRef();

	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient();
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<AppProvider>
				<ParallaxProvider>{children}</ParallaxProvider>
			</AppProvider>
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}
