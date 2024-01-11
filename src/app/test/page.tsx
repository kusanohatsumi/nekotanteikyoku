"use client";
import { client } from "@/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// export function Test() {
// 	const [data, setData] = useState([]);
// 	const [loading, setLoading] = useState(true);
// 	const [error, setError] = useState<string | null>(null);

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			try {
// 				const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/item`);
// 				if (!response.ok) {
// 					throw new Error("Network response was not ok");
// 				}
// 				const result = await response.json();
// 				setData(result);
// 			} catch (error) {
// 				setError((error as Error).message);
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		fetchData();
// 	}, []);
// 	return (
// 		<div>
// 			{loading && <p>Loading...</p>}
// 			{error && <p>Error: {error}</p>}
// 			{data.map((item: any, i: number) => (
// 				<div key={i}>{item}</div>
// 			))}
// 		</div>
// 	);
// }

// export async function getList() {
// 	const [state, setState] = useState<any[]>([""]);
// 	useEffect(() => {
// 		let isMounted = true; // コンポーネントがアンマウントされているかどうかのフラグ

// 		const fetchData = async () => {
// 			try {
// 				const data = await client.getList({
// 					endpoint: "item",
// 					queries: { limit: 4 },
// 				});

// 				if (isMounted) {
// 					const contents: any[] = data.contents;
// 					setState(contents);
// 				}
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		};

// 		fetchData();

// 		// クリーンアップ関数
// 		return () => {
// 			isMounted = false; // コンポーネントがアンマウントされたらフラグをfalseにする
// 		};
// 	}, []);

// 	return (
// 		<>
// 			<div>List</div>
// 			{/* stateを利用して描画 */}
// 			{state.map((item, index) => (
// 				<div key={index}>{/* 各アイテムの表示内容をここに記述 */}</div>
// 			))}
// 		</>
// 	);
// }

// export default async function Home() {
// 	const [item, setItem] = useState<any[]>([""]);
// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const data = await client.getList({
// 				endpoint: "goods",
// 				queries: { limit: 4 },
// 			});
// 			const item = data.contents;
// 			setItem(item);
// 		};
// 		fetchData();
// 	}, []);

// 	return (
// 		<>
// 			<div>List</div>
// 			{/* {item.map((item, i: number) => (
// 				<div className="listItem" key={i}>
// 					<div className="img">
// 						<Image
// 							src={item.eyecatch.url}
// 							alt={item.title}
// 							width={100}
// 							height={100}
// 							// sizes="100vw"
// 							// style={{ width: "100px", height: "auto" }}
// 						/>
// 					</div>
// 					{item.title}
// 					{item.eyecatch.url}
// 					<div></div>
// 				</div>
// 			))} */}
// 			{item.map((item, i: number) => (
// 				<div key={i}>{item.title}</div>
// 			))}
// 		</>
// 	);
// }

export default function Home() {
	const [items, setItems] = useState<any[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await client.getList({
					endpoint: "goods",
					queries: { limit: 4 },
				});

				const fetchedItems = data.contents;
				setItems(fetchedItems);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []); // 空の依存配列を指定

	return (
		<>
			<div>List</div>
			<div
				className="border flex flex-wrap justify-center gap-2"
				style={{ width: "390px" }}
			>
				{items.map((item, i) => (
					<div className="w-2/5 m-2" key={i}>
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
						<div className="text-sm my-2">
							<div>{item.title}</div>
							<div>{item.price.toLocaleString()}円</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
