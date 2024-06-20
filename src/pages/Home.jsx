import { QueryClient, QueryClientProvider } from "react-query";
import HeroSection from "../ui/HeroSection";
import HomeRows from "../ui/HomeRows";

function Home() {
  const queryClient = new QueryClient();

  return (
    <div>
      <HeroSection />
      <div className="py-5 px-12 ">
        <QueryClientProvider client={queryClient}>
          <div className="mx-auto">
            <HomeRows RowHeading={"Best sellers"} />
            <HomeRows RowHeading={"Trending items"} />
            <HomeRows RowHeading={"Hot Deals"} />
          </div>
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default Home;
