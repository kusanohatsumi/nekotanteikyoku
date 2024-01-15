"use client";
import "../styles/index.css";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/lib/microcms";

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
		<>
			<div className="firstview relative  flex flex-col items-center">
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
			<Link href="/static">Static</Link>
			<ul>
				{contents.map((item) => {
					return (
						<div key={item.id}>
							<li>{item.name}</li>
							<Image
								src={item.eyecatch.url}
								alt={`${item.name}`}
								width={100}
								height={100}
							/>
						</div>
					);
				})}
			</ul>
		</>
	);
}

// const Home = async () => {
// 	const contents = await getContents();
// 	return (
// 		<ul>
// 			{contents.map((item, i) => {
// 				<div key={i}></div>;
// 				return <div key={i}>{item.name}</div>;
// 			})}
// 		</ul>
// 	);

// 	return (
// 		<>
// 			<Link href="/static">Static</Link>
// 			<div>{}</div>

// 			{/* <FirstView />
// 				<Contents className="m-auto py-44 ">
// 					<About />
// 					<section className="my-8">
// 						<Ct_title className="m-auto">
// 							<h2>
// 								<Image
// 									src="/title_sns.png"
// 									alt="sns"
// 									width={83}
// 									height={35}
// 									style={{ width: "auto" }}
// 								/>
// 							</h2>
// 							<Ct_BgImg />
// 						</Ct_title>
// 						<List>
// 							<SNS className="sns note">
// 								<Link href="https://note.com/nice_daisy154" target="_blank">
// 									<h3>note</h3>
// 									<p>
// 										ブログを投稿
// 										<br />
// 										しています
// 									</p>
// 								</Link>
// 							</SNS>
// 							<SNS className="sns instagram">
// 								<Link
// 									href="https://www.instagram.com/nekotanteikyoku/"
// 									target="_blank"
// 								>
// 									<h3>instagram</h3>
// 									<p>ここに各SNSの説明を表示</p>
// 								</Link>
// 							</SNS>
// 							<SNS className="sns twitter">
// 								<Link href="https://twitter.com/home?lang=ja" target="_blank">
// 									<h3>twitter</h3>
// 									<p>ここに各SNSの説明を表示</p>
// 								</Link>
// 							</SNS>
// 							<SNS className="sns tiktok">
// 								<Link href="#">
// 									<h3>tiktok</h3>
// 									<p>ここに各SNSの説明を表示</p>
// 								</Link>
// 							</SNS>
// 						</List>
// 					</section>
// 					<section className="my-8">
// 						<Ct_title className="m-auto">
// 							<h2>
// 								<Image
// 									src="/title_goods.png"
// 									alt="sns"
// 									width={83}
// 									height={35}
// 								/>
// 							</h2>
// 							<Ct_BgImg />
// 						</Ct_title>
// 						<List><GoodsList data={data} /></List>
// 						<More className="m-auto">
// 							<Link href="/goods">もっとみる </Link>
// 						</More>
// 					</section>
// 					<Contact>
// 						<figure className="px-6 my-6 flex justify-between">
// 							<Image
// 								src="/title_contact.png"
// 								alt="お問合せ"
// 								width={200}
// 								height={40}
// 							/>
// 							<Image src="/stamp.svg" alt="スタンプ" width={115} height={35} />
// 						</figure>
// 						<p className="px-6 leading-9">
// 							ご質問やおすすめの猫スポットを募集しています。また、グッズやチラシ等のご依頼もお待ちしております！
// 						</p>
// 						<ContactBtn>
// 							<Link
// 								href="mailto:nekotanteikyoku@gmail.com"
// 								className="w-full h-full flex items-center justify-center"
// 								style={{ color: "#6B8970" }}
// 							>
// 								<Image
// 									src="/icon_mail.svg"
// 									alt="mailIcon"
// 									width={20}
// 									height={20}
// 								/>
// 								nekotanteikyoku@gmail.com
// 							</Link>
// 						</ContactBtn>
// 					</Contact>
// 					<footer className="text-center">©nekotanteikyoku</footer>
// 				</Contents> */}
// 		</>
// 	);
// };
// export default Home;
