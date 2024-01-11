import { fetchData } from "@/api/Goods";

export default async function Page() {
	const contents = await fetchData();

	return (
		<main>
			{contents
				? contents.map((item, i) => <p key={i}>{item.title}</p>)
				: "loading..."}
		</main>
	);
}
