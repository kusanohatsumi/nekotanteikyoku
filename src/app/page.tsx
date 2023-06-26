import About from "@/ui/about";
import BlogItem from "@/ui/blogItem";
import FirstView from "@/ui/firstview";
import Ct_BgImg from "@/ui/contentsTitle/ct-bgImg";
import Ct_title from "@/ui/contentsTitle/ct-title";

export default function Home() {
  return (
    <main className="h-full  my-0 mx-auto ">
      <FirstView />
      <About />
      <section>
        <Ct_title>
          <h2>ブログ</h2>
          <Ct_BgImg />
        </Ct_title>
        <a href="/">
          <BlogItem />
        </a>
      </section>
    </main>
  );
}
