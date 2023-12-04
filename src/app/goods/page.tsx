import { client } from "@/lib/client";
import Link from "next/link";

export default async function GoodsList() {
	const data = await client.getList({ endpoint: "goods" });
	const goods = data.contents;

	return (
		<>
			<div className="list">
				<h1>グッズ一覧</h1>
				<div className="flex flex-wrap ">
					{goods.map((posts) => (
						<div
							key={posts.id}
							style={{
								width: "163px",
								margin: "10px",
							}}
							className="flex flex-col items-center"
						>
							<Link href={`/goods/${posts.id}`}>
								<picture style={{ width: "300px" }}>
									<img
										src={posts.eyecatch.url}
										alt={posts.title}
										width="full"
										height="full"
										style={{
											height: "125px",
											objectFit: "cover",
											border: "solid 2px #ccc",
											boxShadow: "0 3px 1px #ccc",
											borderRadius: "5px",
										}}
									/>
								</picture>
								<h2>{posts.title}</h2>

								<p>{posts.price.toLocaleString()}円</p>
							</Link>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
