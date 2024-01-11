// import { createClient } from "microcms-ts-sdk";
import { Blog } from "@/types/blog";
import { MicroCMSQueries, createClient } from "microcms-js-sdk";

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

// ブログ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
	const listData = await client.getList<Blog>({
		endpoint: "blogs",
		queries,
	});

	// データの取得が目視しやすいよう明示的に遅延効果を追加
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return listData;
};

// ブログの詳細を取得
export const getDetail = async (
	contentId: string,
	queries?: MicroCMSQueries,
) => {
	const detailData = await client.getListDetail<Blog>({
		endpoint: "blogs",
		contentId,
		queries,
	});

	// データの取得が目視しやすいよう明示的に遅延効果を追加
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return detailData;
};
