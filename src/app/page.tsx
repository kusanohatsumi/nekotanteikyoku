"use client";
import About from "@/ui/about";
import FirstView from "@/ui/firstview";
import Ct_BgImg from "@/ui/contentsTitle/ct-bgImg";
import styled from "styled-components";
import { Bg } from "@/ui/color";
import { Ct_title } from "@/ui/contentsTitle/ct-title";
import Image from "next/image";
import Link from "next/link";

const Contents = styled.div`
	width: 370px;
	background: ${Bg};
	margin: 0 auto;
`;

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 28px 8px 8px;
`;
const SNS = styled.li`
	background: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 43%;
	height: 125px;
	border-radius: 6px;
	margin: 8px 8px 32px;
	position: relative;
	a {
		display: block;
		width: 100%;
		height: 100%;
		text-align: center;
		h3 {
			margin: 24px 0 4px;
		}
		p {
			width: 126px;
			margin: auto;
		}
	}
`;

const Goods = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 45%;
	height: 125px;
	border-radius: 6px;
	ここに各snsの説明を表示-align: center;
	border: solid 2px #333;
`;
const More = styled.div`
	width: 120px;
	height: 43px;
	line-height: 43px;
	text-align: center;
	border: solid 1px #333;
`;
const Contact = styled.div`
	width: 95%;
	height: 427px;
	margin: 0 auto;
	padding: 24px 0;
	background-image: url("/contact_bg.svg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
`;

const ContactBtn = styled.div`
	width: 300px;
	height: 48px;
	line-height: 48px;
	text-align: center;
	background: #fff;
	border: solid 1px #333;
	position: relative;
	margin: 12px auto;
	&::before,
	::after {
		content: "";
		display: block;
		background: #333;
		position: absolute;
	}
	&::before {
		width: 1px;
		height: 42px;
		bottom: -3px;
		right: -8px;
	}
	&::after {
		width: 280px;
		height: 1px;
		right: -3px;
		bottom: -8px;
	}
`;

export default async function Home() {
	return (
		<>
			<main className="h-full w-full ">
				<FirstView />
				<Contents className="m-auto py-44 ">
					<About />
					<section className="my-8">
						<Ct_title className="m-auto">
							<h2>
								<Image
									src="/title_sns.png"
									alt="sns"
									width={83}
									height={35}
									style={{ width: "auto" }}
								/>
							</h2>
							<Ct_BgImg />
						</Ct_title>
						<List>
							<SNS className="sns note">
								<Link href="https://note.com/nice_daisy154" target="_blank">
									<h3>note</h3>
									<p>
										ブログを投稿
										<br />
										しています
									</p>
								</Link>
							</SNS>
							<SNS className="sns instagram">
								<Link
									href="https://www.instagram.com/nekotanteikyoku/"
									target="_blank"
								>
									<h3>instagram</h3>
									<p>ここに各SNSの説明を表示</p>
								</Link>
							</SNS>
							<SNS className="sns twitter">
								<Link href="https://twitter.com/home?lang=ja" target="_blank">
									<h3>twitter</h3>
									<p>ここに各SNSの説明を表示</p>
								</Link>
							</SNS>
							<SNS className="sns tiktok">
								<Link href="#">
									<h3>tiktok</h3>
									<p>ここに各SNSの説明を表示</p>
								</Link>
							</SNS>
						</List>
					</section>
					<section className="my-8">
						<Ct_title className="m-auto">
							<h2>
								<Image
									src="/title_goods.png"
									alt="sns"
									width={83}
									height={35}
								/>
							</h2>
							<Ct_BgImg />
						</Ct_title>
						<List></List>
						<More className="m-auto">
							<Link href="/goods">もっとみる </Link>
						</More>
					</section>
					<Contact>
						<figure className="px-6 my-6 flex justify-between">
							<Image
								src="/title_contact.png"
								alt="お問合せ"
								width={200}
								height={40}
							/>
							<Image src="/stamp.svg" alt="スタンプ" width={115} height={35} />
						</figure>
						<p className="px-6 leading-9">
							ご質問やおすすめの猫スポットを募集しています。また、グッズやチラシ等のご依頼もお待ちしております！
						</p>
						<ContactBtn>
							<Link
								href="mailto:nekotanteikyoku@gmail.com"
								className="w-full h-full flex items-center justify-center"
								style={{ color: "#6B8970" }}
							>
								<Image
									src="/icon_mail.svg"
									alt="mailIcon"
									width={20}
									height={20}
								/>
								nekotanteikyoku@gmail.com
							</Link>
						</ContactBtn>
					</Contact>
					<footer className="text-center">©nekotanteikyoku</footer>
				</Contents>
			</main>
		</>
	);
}
