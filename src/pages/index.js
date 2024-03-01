import Hero from "@/components/home/hero";
import ShortProfile from "@/components/home/shortProfile";
import Stack from "@/components/home/stack";
import Quotes from "@/components/home/quotes";
import About from "@/components/home/about";
import Experience from "@/components/home/experience";

const Home = () => {
  return (
    <div className="bg-slate-200 py-24">
      <Hero />
      <ShortProfile />
      <Stack />
      <Quotes />
      <About />
      <Experience />
    </div>
  );
};

export default Home;
