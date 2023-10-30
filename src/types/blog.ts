export type Goods = {
	id: string;
	title: string;
	text: string;
	eyecatch: { url: string };
	category: { id: string; name: string };
	contents: string;
};
