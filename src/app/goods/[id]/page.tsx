"use client";

import Link from "next/link";

export default async function GoodsItems({
	params,
}: {
	params: { id: number };
}) {
	const goodsImg = "/goods.png";
	const price = 1000;

	return (
		<>
			<div style={{ width: "286px", margin: "0 auto" }}>
				{/* グッズサムネイル ---グッズサムネイルと商品名と値段をそれぞれ変更 CMSで */}
				<figure>
					<img src={goodsImg} alt="ねこステッカー" />
					<figcaption>ねこステッカー</figcaption>
					<p className="price">{price}円</p>
				</figure>
				{/* グッズサムネイル終わり */}
				{/* 購入するボタン ---aタグのhrefを商品ごとに変更 CMSで */}
				<div
					style={{
						width: "300px",
						height: "60px",
						backgroundColor: "#6B8970",
						margin: "0 auto",
					}}
				>
					<a
						href="#"
						style={{
							width: "100%",
							height: "100%",
							display: "block",
							textAlign: "center",
							lineHeight: "60px",
							color: "#FFFFFF",
							textDecoration: "none",
							fontSize: "18px",
						}}
					>
						この商品を購入する
					</a>
					<p style={{ textAlign: "center" }}>
						<small>SUZURIのサイトへ移動します</small>
					</p>
				</div>
				{/* 購入するボタン終わり */}
			</div>
		</>
	);
}
