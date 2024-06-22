import { QueryClient, QueryClientProvider } from "react-query";
import HeroSection from "../ui/HeroSection";
import HomeRows from "../ui/HomeRows";

function Home() {
  const queryClient = new QueryClient();

  return (
    <div>
      <HeroSection />
      <div className="py-5 px-5 md:px-0 md:pr-[60px]">
        {/*px-5 md:pl-8 md:pr-16*/}
        <QueryClientProvider client={queryClient}>
          <div className="">
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
