"use client";
import Image from "next/image";
import styled from "styled-components";

const Header_item = styled.header`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Ham = styled.div`
  brder: solid 2px skyblue;
  span {
    display: block;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #333;
  }
`;

export default function Header() {
  return (
    <Header_item className="px-4">
      <h1>
        <Image alt="logo" width={80} height={50} src="/syasyaki.png" />
      </h1>
      <Ham className="mr-4">
        <span className="mb-2"></span>
        <span></span>
      </Ham>
    </Header_item>
  );
}
