import locationIcon from "../../assets/locationIcon.svg";

function LocationSearch() {
  return (
    <div className="relative">
      <img
        src={locationIcon}
        className="absolute left-[9px] top-[9.5px] h-4 w-4"
        alt=""
      />
      <input
        type="text"
        placeholder="Search for hotel"
        className="border-lightBorder text-textPrimary rounded border-[0.5px] border-solid py-[9px] pl-[33px] pr-2 text-sm font-normal placeholder:text-[#505050]"
      />
    </div>
  );
}

export default LocationSearch;
