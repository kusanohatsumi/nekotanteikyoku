import About from "@/ui/about";
import FirstView from "@/ui/firstview";
import Ct_BgImg from "@/ui/contentsTitle/ct-bgImg";
import Ct_title from "@/ui/contentsTitle/ct-title";
import BlogItem from "@/ui/blogItem";
import { client } from "@/libs/client";

export default function Home() {
  return (
    <main className="h-full  my-0 mx-auto ">
      <FirstView />
      <About />
      <section>
        <Ct_title className="m-auto border-b border-solid border-white">
          <h2>ぶろぐ</h2>
          <Ct_BgImg />
        </Ct_title>
        <BlogItem />
        <a href="/"></a>
      </section>
      <section>
        <Ct_title>
          <h2>しゃしん</h2>
          <Ct_BgImg />
        </Ct_title>
      </section>
      <section>
        <Ct_title>
          <h2>ぐっず</h2>
          <Ct_BgImg />
        </Ct_title>
      </section>

      <section>
        <Ct_title>
          <h2>にゅーす</h2>
          <Ct_BgImg />
        </Ct_title>
      </section>
    </main>
  );
}
