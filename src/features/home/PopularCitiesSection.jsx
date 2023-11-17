import SectionLayout from "../../ui/SectionLayout";
import CityCard from "./CityCard";

function PopularCitiesSection() {
  return (
    <SectionLayout
      title="Popular cities with hotel"
      subTitle="Find, book, and embark on your next journey effortlessly"
    >
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-x-4">
        <CityCard bg="bg-city1" state="Edo" />
        <CityCard bg="bg-city2" state="Abuja" />
        <CityCard bg="bg-city3" state="Portharcourt" />
        <CityCard bg="bg-city4" state="Lagos" />
      </div>
    </SectionLayout>
  );
}

export default PopularCitiesSection;
