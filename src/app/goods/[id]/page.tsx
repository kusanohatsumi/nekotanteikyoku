// static/[postId]/page.tsx

import "../../../styles/goodsdetail.css";
import { notFound } from "next/navigation";
import { getGoodsDetail, getList } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
	const { contents } = await getList();

	const paths = contents.map((post) => {
		return {
			postId: post.id,
		};
	});

	return [...paths];
}

export default async function DetailPage({ params }: { params: any }) {
	const post = await getGoodsDetail(params.id);
	console.log(post);

	if (!post) {
		notFound();
	}
	return (
		<>
			<div
				className="detailtem m-auto h-screen border px-2 py-6"
				style={{ width: "390px", backgroundColor: "#F9F7F2" }}
			>
				<Link href="/goods">
					<Image
						src="/images/back.png"
						alt="戻る"
						width={100}
						height={100}
						sizes="100vw"
						style={{ width: "100px", height: "auto" }}
					/>
				</Link>
				<div className="py-7 flex flex-wrap justify-between gap-2">
					<div className="w-2/5 flex-grow h-auto m-2">
						<div
							className="h-56 flex items-center justify-center p-4  rounded-lg bg-slate-50"
							style={{
								border: " 1px solid rgba(88, 80, 72, 0.3)",
								background: "rgba(255, 255, 255, 0.6)",
								boxShadow: " 0px 3px 0px 0px #cbc8c6",
							}}
						>
							<Image
								src={`${post.eyecatch.url}`}
								alt={post.title}
								width={0}
								height={0}
								sizes="100vw"
								style={{ width: "auto", height: "90%" }}
								className="bg-slate-100"
							/>
						</div>
						<div className="text-base mt-2">
							<div>{post.title}</div>
							<div>{post.price.toLocaleString()}円</div>
						</div>
					</div>
				</div>
				<div className="btn">
					<Link
						href={`${post.url}`}
						className="w-full h-full flex items-center justify-center"
						style={{ color: "#fff" }}
					>
						<Image
							src="/images/cart.svg"
							alt="mailIcon"
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "20px", height: "20px" }}
						/>
						この商品を購入する
					</Link>
					<p className="text-sm m-3">SUZURIのサイトへ移動します</p>
				</div>
			</div>
		</>
	);
}
