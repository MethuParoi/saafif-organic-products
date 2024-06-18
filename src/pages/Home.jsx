import { QueryClient, QueryClientProvider } from "react-query";
import HeroSection from "../ui/HeroSection";
import HomeRows from "../ui/HomeRows";

function Home() {
  const queryClient = new QueryClient();

  return (
    <div>
      <HeroSection />
      <div className="py-5 px-12 h-[105rem]">
        <QueryClientProvider client={queryClient}>
          <HomeRows RowHeading={"Eid Special"} />
          <HomeRows RowHeading={"Trending items"} />
          <HomeRows RowHeading={"Hot Deals"} />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default Home;
