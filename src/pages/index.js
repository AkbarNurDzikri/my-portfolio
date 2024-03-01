import Hero from "@/components/home/hero";
import ShortProfile from "@/components/home/shortProfile";
import Stack from "@/components/home/stack";
import Quotes from "@/components/home/quotes";

const Home = () => {
  return (
    <div className="bg-slate-100 py-24">
      <Hero />
      <ShortProfile />
      <Stack />
      <Quotes />
    </div>
  );
};

export default Home;
