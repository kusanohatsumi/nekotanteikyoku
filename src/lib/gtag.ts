export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const existsGaId = GA_ID !== "";

export const pageview = (path: string) => {
	if (existsGaId && window.gtag) {
		window.gtag("config", GA_ID, {
			page_path: path,
		});
	}
};
