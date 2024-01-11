import { client } from "@/lib/client";
export const fetchData = async () => {
	try {
		const data = await client.getList({
			endpoint: "goods",
			queries: { limit: 4 },
		});
		const contents: any[] = data.contents;
		return contents;
	} catch (error) {
		console.error(error);
	}
};

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
