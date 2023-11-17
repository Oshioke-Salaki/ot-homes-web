import HomeHeroSection from "../features/home/HomeHeroSection";
import HomeSearch from "../features/home/HomeSearch";
import PopularCitiesSection from "../features/home/PopularCitiesSection";
import PopularHotelsSection from "../features/home/PopularHotelsSection";
import SpecialSection from "../features/home/SpecialSection";
import WhyChooseSection from "../features/home/WhyChooseSection";

function HomePage() {
  return (
    <div className="w-full pt-[53px]">
      <HomeHeroSection />
      <div className="mt-[-47px] flex w-full justify-center ">
        <HomeSearch />
      </div>
      <div className="mb-[60px] mt-[78px] flex flex-col gap-y-[57px]">
        <PopularCitiesSection />
        <PopularHotelsSection />
      </div>
      <WhyChooseSection />
      <SpecialSection />
    </div>
  );
}

export default HomePage;
