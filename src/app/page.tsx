import About from "@/ui/about";
import BlogItem from "@/ui/blogItem";
import FirstView from "@/ui/firstview";

export default function Home() {
  return (
    <main className="h-full  my-0 mx-auto ">
      <FirstView />
      <About />
    </main>
  );
}
