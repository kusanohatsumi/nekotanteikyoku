"use client";
import Image from "next/image";
import styled from "styled-components";

const Firstvirew = styled.div`
  background: #cfe9f3;
  position: relative;
  height: 700px;
  border-bottom: solid 4px #333;
`;
const ImageSize = styled.figure`
  width: 310px;
  height: auto;
`;

export default function FirstView() {
  return (
    <>
      <Firstvirew className=" flex flex-col items-center">
        <ImageSize>
          <Image
            src="/title.png"
            alt="しゃしゃき"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            className="relative top-56 "
            priority={true}
          />
        </ImageSize>

        <ImageSize>
          <Image
            src="/firstviewneko.png"
            alt="しゃしゃき"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
        </ImageSize>
      </Firstvirew>
    </>
  );
}
