import { getGoodsList } from "@/lib/microcms";
import styled from "styled-components";

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 28px 8px 8px;
`;

async function Goods() {
	const { contents } = await getGoodsList();
	if (!contents || contents.length === 0) {
		return <h1>No contents</h1>;
	}
	return { contents };
}

export async function GoodsList() {
	const contents = await Goods();
	console.log(contents);
	return (
		<List>
			{/* {contents.map((goods:any) => (
            <Goods className="m-2" key={goods.id}>
                <Image
                    src={goods.eyecatch.url}
                    alt={goods.title}
                    width="0"
                    height="0"
                    sizes="90vw"
                    style={{ width: "70%", height: "auto" }}
                />
            </Goods>
        ))} */}
		</List>
	);
}
