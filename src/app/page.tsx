import BlogItem from "@/ui/blogItem";
import Ct_BgImg from "@/ui/contentsTitle/ct-bgImg";
import Ct_title from "@/ui/contentsTitle/ct-title";

export default function Home() {
  return (
    <main className="h-full  my-0 mx-auto">
      <h1 className="text-center mb-3">ねこ探偵局</h1>
      <section>
        <h2 className="text-center mb-3">
          ようこそ
          <br />
          ねこ探偵局へ
        </h2>
      </section>
      <section>
        <Ct_title className="m-auto pb-4">
          <h2>{/* ここにコンテンツ名の画像を入れる */}</h2>
          <Ct_BgImg />
        </Ct_title>
        <a href="/">
          <BlogItem />
        </a>
      </section>
    </main>
  );
}
