import { client } from "@/lib/client";
import { Goods } from "@/types/blog";
import Link from "next/link";

export default function GoodsList({ goods }: { goods: Goods[] }) {
	console.log(goods);

	return (
		<>
			<div className="flex flex-wrap ">
				{goods.map((posts) => (
					<div
						key={posts.id}
						style={{ border: "solid 2px tomato", width: "300px" }}
						className="flex flex-col items-center"
					>
						<Link href={`/goods/${posts.id}`}>
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
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export const getStaticProps = async () => {
	const data = await client.getList({ endpoint: "goods" });
	return {
		props: {
			goods: data.contents,
		},
	};
};
