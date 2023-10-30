// import { createClient } from "microcms-ts-sdk";
import { createClient } from "microcms-js-sdk";

export const serviceDomain = process.env.NEXT_PUBLIC_SERVICE_DOMAIN;
export const APIKey = process.env.NEXT_PUBLIC_API_KEY;

if (serviceDomain === undefined) {
	throw new Error("error");
}
if (APIKey === undefined) {
	throw new Error("error");
}

export const client = createClient({
	serviceDomain: serviceDomain,
	apiKey: APIKey,
});
