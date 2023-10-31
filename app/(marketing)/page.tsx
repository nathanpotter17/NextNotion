import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
  return (
      <div className="min-h-full flex flex-col">
        <div className="flex flex-col itemss-center justify-center md:justify-start text-center gepy-y-8 flex-1 px6 pb-10">
          <Heading />
          <Heroes />
        </div>
        <Footer />
      </div>
  );
}

export default MarketingPage;