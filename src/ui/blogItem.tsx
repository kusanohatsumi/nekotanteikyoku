"use client";
import Image from "next/image";
import styled from "styled-components";

const Figure = styled.figure`
	width: 100px;
	height: 100px;
`;

const BlogArticle = styled.article`
	display: flex;
	justify-content: space-between;
	margin-bottom: 8px;
	border-bottom: 2px dashed #999;
	padding: 12px;
`;
const BlogItemStyle = styled.div`
	width: 260px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

export default function BlogItem() {
	return (
		<>
			<BlogArticle>
				<Figure></Figure>
				<BlogItemStyle>
					<time className="text-xs">日付</time>
					<h3 className="line-clamp-3  font-bold text-sm">
						【#00】
						<br />
						タイトル
					</h3>
				</BlogItemStyle>
			</BlogArticle>
		</>
	);
}
