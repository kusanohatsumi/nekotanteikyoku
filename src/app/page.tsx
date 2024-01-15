"use client";
import "../styles/index.css";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/microcms";

export default async function Home() {
	const contents = await getContents();
	return (
		<>
			{/* ファーストビュー */}
			<div className="firstview w-full relative  flex flex-col items-center">
				<figure>
					<Image
						src="/images/title.png"
						alt="しゃしゃき"
						width={0}
						height={0}
						sizes="100vw"
						className="relative top-56 "
						priority={true}
					/>
				</figure>
				<figure>
					<Image
						src="/images/firstviewneko.png"
						alt="しゃしゃき"
						width={0}
						height={0}
						sizes="100vw"
						priority={false}
					/>
				</figure>
			</div>
			{/* グッズ一覧 */}
			<div className="container">
				<div className="goods">
					<section>
						<h2 className="title">
							<Image src="/title_goods.png" alt="sns" width={83} height={35} />
							<Image
								src="/section_title.png"
								alt="見出し装飾"
								width={250}
								height={60}
								className="m-auto absolute"
							/>
						</h2>
						<ul className="goodsList">
							{contents.map((item) => {
								return (
									<li key={item.id} className="m-2">
										<Image
											src={item.eyecatch.url}
											alt={item.title}
											width="0"
											height="0"
											sizes="90vw"
											style={{ width: "70%", height: "auto" }}
										/>
									</li>
								);
							})}
						</ul>
					</section>
					<div className="more">
						<Link href="/goods">もっとみる </Link>
					</div>
				</div>
			</div>
		</>
	);
}

async function getContents() {
	const response = await client.getList({
		customRequestInit: {
			cache: "no-store", // キャッシュを利用せずに常に新しいデータを取得する
		},
		endpoint: "goods",
	});
	return response.contents;
}
