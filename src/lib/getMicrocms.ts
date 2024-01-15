import { Blog } from "@/types/blog";
import { Goods } from "@/types/goods";
import { MicroCMSQueries } from "microcms-js-sdk";
import { client } from "./microcms";

function getMicrocms(
	endpoint: "goods",
	queries?: MicroCMSQueries
): Promise<Goods>;
function getMicrocms(
	endpoint: "blogs",
	queries?: MicroCMSQueries
): Promise<Blog>;
async function getMicrocms<T>(
	endpoint: "goods" | "blogs",
	queries?: MicroCMSQueries
): Promise<T> {
	const data = await client.get<T>({
		endpoint,
		queries,
	});
	return data;
}
export { getMicrocms };
