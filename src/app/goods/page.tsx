import { client, getGoodsList } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../../styles/index.css";

const GoodsList = async () => {
	const { contents } = await getGoodsList();

	if (!contents || contents.length === 0) {
		return <h1>No contents</h1>;
	}

	return (
		<div className="m-auto h-screen border px-2 py-6 container">
			<Link href="/">
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
				{contents.map((item, i) => (
					<div className="w-2/5 flex-grow h-auto m-2" key={i}>
						<Link href={`/goods/${item.id}`}>
							<div
								className="flex items-center justify-center p-4  rounded-lg bg-white"
								style={{
									border: " 1px solid rgba(88, 80, 72, 0.3)",
									boxShadow: " 0px 3px 0px 0px #cbc8c6",
								}}
							>
								<Image
									src={`${item.eyecatch.url}`}
									alt={item.title}
									width={100}
									height={100}
									sizes="100vw"
									style={{ width: "100px", height: "auto" }}
									className="bg-white"
								/>
							</div>
						</Link>
						<div className="text-sm mt-2">
							<div>{item.title}</div>
							<div>{item.price.toLocaleString()}円</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GoodsList;

// async function getGoodsList() {
// 	const response = await client.getList({
// 		customRequestInit: {
// 			cache: "no-store",
// 		},
// 		endpoint: "goods",
// 		queries: { limit: 5 },
// 	});
// 	return response.contents;
// }
