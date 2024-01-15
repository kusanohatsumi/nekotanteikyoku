import Link from "next/link";
import { client, getList } from "@/lib/microcms";
import { createClient } from "microcms-js-sdk";

export const revalidate = 0;

async function getContents() {
	const response = await client.getList({
		customRequestInit: {
			cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
		},
		endpoint: "goods",
	});

	return response.contents;
}
export default async function Home() {
	const contents = await getContents();
	return (
		<ul>
			{contents.map((item) => {
				return <li key={item.id}>{item.title}</li>;
			})}
		</ul>
	);
}

// export default async function StaticPage() {
// 	const { contents } = await getList();

// 	// ページの生成された時間を取得
// 	const time = new Date().toLocaleString();

// 	if (!contents || contents.length === 0) {
// 		return <h1>No contents</h1>;
// 	}

// 	return (
// 		<div>
// 			<h1>{time}</h1>
// 			<ul>
// 				{contents.map((post) => {
// 					return (
// 						<li key={post.id}>
// 							<Link href={`/static/${post.id}`}>{post.title}</Link>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }
