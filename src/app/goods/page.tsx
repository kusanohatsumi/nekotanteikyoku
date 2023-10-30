import { getList } from "@/lib/client";
import { Goods } from "@/types/blog";

export default async function GoodsList() {
	const { goods } = await getList();
	const goodsITem: Goods[] = goods.contents;
	return (
		<>
			<div className="list">
				<h1>グッズ一覧</h1>
				<div className="flex flex-wrap ">
					{goodsITem.map((posts) => (
						<div
							key={posts.id}
							style={{ border: "solid 2px tomato", width: "300px" }}
							className="flex flex-col items-center"
						>
							<h2>{posts.title}</h2>
							<picture>
								<img
									src={posts.eyecatch.url}
									alt={posts.title}
									width={300}
									height={300}
								/>
							</picture>
							<p>{posts.contents}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
