export type Blog = {
	id: string;
	title: string;
	bodyA: string;
	bodyB: string;
	bodyC: string;

	pickup: string;
	// ---
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};
export type Goods = {
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
};

export type News = {
	id: string;
	title: string;
	body: string;
	pickup: string;
	// ---
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
};
