import Image from "next/image";
import styled from "styled-components";

const List = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 28px 8px 8px;
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

export const GoodsList = ({ data }: { data: any }) => {
	return (
		<>
			<List>
				{data.contents.reverse().map((item: any) => (
					<Goods className="m-2" key={item.id}>
						<Image
							src={item.eyecatch.url}
							alt={item.title}
							width="0"
							height="0"
							sizes="90vw"
							style={{ width: "70%", height: "auto" }}
						/>
					</Goods>
				))}
			</List>
		</>
	);
};
