export interface Goods {
	id: string;
	title: string;
	contents: string;
	eyecatch: { url: string; height: number; width: number };
	category: {
		id: string;
		name: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		revisedAt: string;
	};
	price: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
}
