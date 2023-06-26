"use client";
import Image from "next/image";

export default function Ct_BgImg() {
  return (
    <>
      <Image
        src="/section_title.png"
        alt="見出し装飾"
        width={250}
        height={60}
        className="m-auto absolute"
      />
    </>
  );
}
