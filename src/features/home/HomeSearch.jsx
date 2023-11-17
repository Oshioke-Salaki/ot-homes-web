import LocationSearch from "./LocationSearch";
import calender from "../../assets/calendarIcon.svg";
import guestsIcon from "../../assets/2userIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
function HomeSearch() {
  return (
    <div className="text-textPrimary shadow-shadow1 flex h-fit w-[861px] items-center gap-x-[82px] rounded-lg bg-white  py-[17px] pl-6 pr-7">
      <LocationSearch />
      <div className="flex items-center gap-x-[53px]">
        <div className="custom-flex gap-x-[30px]">
          <div className="flex items-center gap-x-[17px]">
            <div className="bg-lightBorder h-[43px] w-[0.5px]"></div>
            <img src={calender} alt="" />
            <div className=" flex flex-col gap-y-1">
              <h1 className="text-xs font-normal text-[#8A8A8A]">Check In</h1>
              <h2 className="text-base font-normal">16 Nov</h2>
            </div>
          </div>
          <div className="flex items-center gap-x-[17px]">
            <div className="bg-lightBorder h-[43px] w-[0.5px]"></div>
            <img src={calender} alt="" />
            <div className=" flex flex-col gap-y-1">
              <h1 className="text-xs font-normal text-[#8A8A8A]">Check Out</h1>
              <h2 className="text-base font-normal">22 Nov</h2>
            </div>
          </div>
          <div className="flex items-center gap-x-[17px]">
            <div className="bg-lightBorder h-[43px] w-[0.5px]"></div>
            <img src={guestsIcon} alt="" />
            <div className=" flex flex-col gap-y-1">
              <h1 className="text-xs font-normal text-[#8A8A8A]">Guests</h1>
              <h2 className="text-base font-normal">2</h2>
            </div>
          </div>
        </div>
        <div className="h-[43px] w-[43px] rounded-full bg-[#F5E0F5] p-3">
          <img src={searchIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
