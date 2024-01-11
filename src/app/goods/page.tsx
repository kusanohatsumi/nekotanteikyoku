"use client";
import { client } from "@/lib/client";
import { Blog, Goods } from "@/types/blog";
import { MicroCMSQueries } from "microcms-js-sdk";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Home() {
	// const [items, setItems] = useState<any[]>([]);
	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const data = await client.getList({
	// 				endpoint: "goods",
	// 				queries: { limit: 4 },
	// 			});
	// 			const contents: any[] = data.contents;
	// 			setItems(contents);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchData();
	// }, [items]);

	return (
		<div
			className="m-auto h-screen border px-2 py-6"
			style={{ width: "390px", backgroundColor: "#F9F7F2" }}
		>
			<Link href="/">
				<Image
					src="/back.png"
					alt="戻る"
					width={100} // 任意の適切な値を指定
					height={100} // 任意の適切な値を指定
					sizes="100vw"
					style={{ width: "100px", height: "auto" }}
				/>
			</Link>

			<div className="py-7 flex flex-wrap justify-between gap-2">
				{/* {items.map((item, i) => (
					<div className="w-2/5 flex-grow h-auto m-2" key={i}>
						<div
							className="flex items-center justify-center p-4  rounded-lg bg-slate-50"
							style={{
								border: " 1px solid rgba(88, 80, 72, 0.3)",
								background: "rgba(255, 255, 255, 0.6)",
								boxShadow: " 0px 3px 0px 0px #cbc8c6",
							}}
						>
							<Image
								src={`${item.eyecatch.url}`}
								alt={item.title}
								width={100} // 任意の適切な値を指定
								height={100} // 任意の適切な値を指定
								sizes="100vw"
								style={{ width: "100px", height: "auto" }}
								className="bg-slate-100"
							/>
						</div>
						<div className="text-sm mt-2">
							<div>{item.title}</div>
							<div>{item.price.toLocaleString()}円</div>
						</div>
					</div>
				))} */}
			</div>
		</div>
	);
}
