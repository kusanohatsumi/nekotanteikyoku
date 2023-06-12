import BlogItem from "@/ui/blogItem";

export default function Home() {
  return (
    <main className="h-full  my-0 mx-auto ">
      <h1 className="text-center mb-3">ねこ探偵局</h1>
      <section>
        <h2 className="text-center mb-3">
          ようこそ
          <br />
          ねこ探偵局へ
        </h2>
      </section>
      <section>
        <h2 className="text-center border-b-2 mb-3">ぶろぐ</h2>
        <a href="/">
          <BlogItem />
        </a>
      </section>
    </main>
  );
}
