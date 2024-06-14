import HeroSection from "../ui/HeroSection";
import HomeCard from "../ui/HomeCard";

function Home() {
  return (
    <div>
      <HeroSection />
      <div className="pt-5 px-8 h-[35rem]">
        <HomeCard />
      </div>
    </div>
  );
}

export default Home;
