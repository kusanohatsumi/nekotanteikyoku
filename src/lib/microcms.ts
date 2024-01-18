import { Goods } from "@/types/goods";
import { createClient } from "microcms-js-sdk";
import type {
	MicroCMSQueries,
	MicroCMSImage,
	MicroCMSDate,
} from "microcms-js-sdk";

//ブログの型定義
export type Blog = {
	id: string;
	title: string;
	content: string;
	eyecatch?: MicroCMSImage;
} & MicroCMSDate;

if (!process.env.NEXT_PUBLIC_SERVICE_DOMAIN) {
	throw new Error("NEXT_PUBLIC_SERVICE_DOMAIN is required");
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
	throw new Error("NEXT_PUBLIC_API_KEY is required");
}

// API取得用のクライアントを作成
export const client = createClient({
	serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
	apiKey: process.env.NEXT_PUBLIC_API_KEY,
});
//グッズの型定義

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
	queries?: MicroCMSQueries
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

// グッズ一覧を取得
export const getGoodsList = async (queries?: MicroCMSQueries) => {
	const listData = await client.getList<Goods>({
		endpoint: "goods",
		queries,
	});

	// データの取得が目視しやすいよう明示的に遅延効果を追加
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return listData;
};
// グッズの詳細を取得
export const getGoodsDetail = async (
	contentId: string,
	queries?: MicroCMSQueries
) => {
	const detailData = await client.getListDetail<Goods>({
		endpoint: "goods",
		contentId,
		queries,
	});

	// データの取得が目視しやすいよう明示的に遅延効果を追加
	await new Promise((resolve) => setTimeout(resolve, 3000));

	return detailData;
};
