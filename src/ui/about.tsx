"use client";

import Image from "next/image";
import styled from "styled-components";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutText = styled.div`
  width: 360px;
  height: 160px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-left: solid 2px #fff;
    border-bottom solid 2px #fff;
    transform: rotate(-45deg);
    position: absolute;
    top: 145px;
    left: 70px;
  }
`;

const Hand = styled.div`
  position: absolute;
  bottom: 12px;
  right: 28px;
  font-size: 20px;
  cursor: pointer;
`;

export default function About() {
  return (
    <>
      <AboutSection className="mt-44">
        <AboutText className="mb-6">
          <p className="text-2xl text-left">
            <span className="text-xl">ようこそ</span>
            <br />
            <span className="font-bold">ねこ探偵局へ</span>
          </p>
          <Hand>✊</Hand>
        </AboutText>
        <Image
          src="/aboutneko.png"
          alt="お出迎えしゃしゃき"
          width={205}
          height={202}
        />
      </AboutSection>
    </>
  );
}
