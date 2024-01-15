"use client";
import "../styles/index.css";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/microcms";

const sns = [
	{
		name: "note",
		url: "https://note.com/nice_daisy154",
		detail: "ここに各SNSの説明を表示",
	},
	{
		name: "instagram",
		url: "https://www.instagram.com/nekotanteikyoku/",
		detail: "ここに各SNSの説明を表示",
	},
	{
		name: "twitter",
		url: "https://twitter.com/home?lang=ja",
		detail: "ここに各SNSの説明を表示",
	},
	{ name: "tiktok", url: "/", detail: "ここに各SNSの説明を表示" },
];

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
			<div className="container">
				{/* SNS */}
				<div className="sns contentsItem">
					<section>
						<h2 className="title">
							<Image
								src="/images/title_sns.png"
								alt="sns"
								width={83}
								height={35}
							/>
							<Image
								src="/images/section_title.png"
								alt="見出し装飾"
								width={250}
								height={60}
								className="m-auto absolute"
							/>
						</h2>
						<ul className="snsList">
							{sns.map((item) => {
								return (
									<li key={item.name} className={`${item.name}`}>
										<Link href={item.url}>
											<h3>{item.name}</h3>
											<p>{item.detail}</p>
										</Link>
									</li>
								);
							})}
						</ul>
					</section>
				</div>

				{/* グッズ一覧 */}
				<div className="goods contentsItem">
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
										<div className="cover">
											<Image
												className="rounded-lg"
												src={item.eyecatch.url}
												alt={item.title}
												width="0"
												height="0"
												sizes="90vw"
												style={{ width: "70%", height: "auto" }}
											/>
										</div>
										<div className="detail">
											<div className="text-left">{item.title}</div>
											<div>{item.price.toLocaleString()}円</div>
										</div>
									</li>
								);
							})}
						</ul>
					</section>
					<div className="more">
						<Link href="/goods">
							<Image
								className="rounded-lg"
								src="/images/btn_moreview.png"
								alt="もっと見る"
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
							/>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

async function getContents() {
	const response = await client.getList({
		customRequestInit: {
			cache: "no-store",
		},
		endpoint: "goods",
	});
	return response.contents;
}
