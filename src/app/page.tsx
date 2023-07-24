"use client";
import About from "@/ui/about";
import BlogItem from "@/ui/blogItem";
import FirstView from "@/ui/firstview";
import Ct_BgImg from "@/ui/contentsTitle/ct-bgImg";
import styled from "styled-components";
import { Bg } from "@/ui/color";
import { Ct_title } from "@/ui/contentsTitle/ct-title";

const Contents = styled.div`
  width: 370px;
  background: ${Bg};
  margine: 0 auto;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 28px 8px 8px;
`;
const SNS = styled.li`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 43%;
  height: 125px;
  border-radius: 6px;
  margin: 8px 8px 32px;
  position: relative;
  a {
    display: block;
    padding-top: 28px;
    width: 100%;
    height: 100%;
    text-align: center;

    h3 {
      margin-bottom: 4px;
    }
    p {
      width: 126px;
      margin: auto;
    }
  }
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
const More = styled.div`
  width: 120px;
  height: 43px;
  line-height: 43px;
  text-align: center;
  border: solid 1px #333;
`;

export default function Home() {
  return (
    <main className="h-full w-full  ">
      <FirstView />
      <Contents className="m-auto pt-44">
        <About />

        {/* SNS */}
        <section>
          <Ct_title className="m-auto">
            <h2>SNS</h2>
            <Ct_BgImg />
          </Ct_title>
          <List>
            <SNS className="sns note">
              <a href="/">
                <h3>note</h3>
                <p>
                  ブログを投稿
                  <br />
                  しています
                </p>
              </a>
            </SNS>
            <SNS className="sns instagram">
              <a href="/">
                <h3>instagram</h3>
                <p>ここに各SNSの説明を表示</p>
              </a>
            </SNS>
            <SNS className="sns twitter">
              <a href="/">
                <h3>twitter</h3>
                <p>ここに各SNSの説明を表示</p>
              </a>
            </SNS>
            <SNS className="sns tiktok">
              <a href="/">
                <h3>tiktok</h3>
                <p>ここに各SNSの説明を表示</p>
              </a>
            </SNS>
          </List>
        </section>
        {/* --- */}
        {/* グッズ */}
        <section>
          <Ct_title className="m-auto">
            <h2>ぐっず</h2>
            <Ct_BgImg />
          </Ct_title>
          <List>
            <Goods className="m-2"></Goods>
            <Goods className="m-2"></Goods>
            <Goods className="m-2"></Goods>
            <Goods className="m-2"></Goods>
          </List>
          <More className="m-auto">もっとみる</More>
        </section>
        {/* --- */}
      </Contents>
    </main>
  );
}
