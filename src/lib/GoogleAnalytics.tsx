"use client";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { GA_ID, pageview } from "./Gtag";

export const ScriptGa = () => {
	const pathnema = usePathname();
	const searchParams = useSearchParams();
	useEffect(() => {
		if (!GA_ID) {
			return;
		}
		const url = pathnema + searchParams.toString();
		pageview(url);
	}, [pathnema, searchParams]);
	return (
		<>
			<Script
				defer
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
			/>
			<Script
				id="gtag-init"
				defer
				dangerouslySetInnerHTML={{
					__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
        `,
				}}
			/>
		</>
	);
};
