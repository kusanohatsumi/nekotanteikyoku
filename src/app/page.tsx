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
				{/* 導入 */}
				<div className="about contentsItem">
					<div className="text">
						<p>
							<span>ようこそ</span>
							<br />
							<span>ねこ探偵局へ</span>
						</p>
					</div>
					<figure>
						<Image
							src="/images/aboutneko.png"
							alt="お出迎えしゃしゃき"
							width={0}
							height={0}
							priority={true}
							sizes="100vw"
							style={{ width: "205px", height: "202px" }}
						/>
					</figure>
				</div>
				{/* SNS */}
				<div className="sns contentsItem">
					<section>
						<h2 className="title">
							<Image
								src="/images/title_sns.png"
								alt="sns"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: "83px", height: "35px" }}
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
							<Image
								src="/images/title_goods.png"
								alt="sns"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: "83px", height: "35px" }}
							/>
							<Image
								src="/images/section_title.png"
								alt="見出し装飾"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: "250px", height: "60px" }}
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
				{/* お問い合わせ */}
				<div className="contact contentsItem">
					<figure className="px-6 my-6 flex justify-between">
						<Image
							src="/images/title_contact.png"
							alt="お問合せ"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "200px", height: "40px" }}
						/>
						<Image
							src="/images/stamp.svg"
							alt="スタンプ"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "115px", height: "35px" }}
						/>
					</figure>
					<p className="px-6 leading-9">
						ご質問やおすすめの猫スポットを募集しています。また、グッズやチラシ等のご依頼もお待ちしております！
					</p>
					<div className="btn">
						<Link
							href="mailto:nekotanteikyoku@gmail.com"
							className="w-full h-full flex items-center justify-center"
							style={{ color: "#6B8970" }}
						>
							<Image
								src="/images/icon_mail.svg"
								alt="mailIcon"
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: "20px", height: "20px" }}
							/>
							nekotanteikyoku@gmail.com
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
