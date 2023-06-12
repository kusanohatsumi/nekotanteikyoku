"use client";
import styled from "styled-components";

export default function BlogItem() {
  return (
    <>
      <BlogArticle>
        <Figure>
          <img src="https://placehold.jp/3d4070/ffffff/100x100.png" />
        </Figure>
        <BlogItemStyle>
          <time className="text-xs">2023.5.15</time>
          <h3 className="line-clamp-3  font-bold text-sm">
            【#01】
            <br />
            「保護猫カフェ ウリエル」に行ってきました！
          </h3>
        </BlogItemStyle>
      </BlogArticle>
    </>
  );
}

const Figure = styled.figure`
  width: 100px;
  height: 100px;
`;

const BlogArticle = styled.article`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  border-bottom: 3px dotted #fff;
  padding: 12px 12px 8px;
`;
const BlogItemStyle = styled.div`
  width: 260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
