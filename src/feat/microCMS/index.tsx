import { getList } from "@/lib/client";
import { Goods } from "@/types/blog";

export default async function MicroCMS() {
	const { goods } = await getList();
	const GoodsItem: Goods[] = goods.contents;
	return GoodsItem;
}
