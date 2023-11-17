function SpecialSection() {
  return (
    <div className="bg-special bg-primaryColor mx-[-100px] bg-center bg-no-repeat pt-[80px] text-center text-white">
      <h1 className="mb-3 text-5xl font-bold capitalize leading-[66px]">
        Special hotel deals and offers
      </h1>
      <h2 className="mb-[46px] text-base font-normal leading-[22px]">
        Enter your email address to receive secret hotel deals
      </h2>
      <div className="flex w-full items-center justify-center gap-x-[15px]">
        <input
          type="text"
          placeholder="Enter your email"
          className="w-[292px] rounded-[10px] bg-white px-[15px] py-[17px] text-base font-normal leading-[22px] text-[#000018]"
        />
        <button className="text- w-[211px] rounded-[10px] bg-[#98FB98] py-[15px] text-center text-base font-semibold leading-[22px]">
          Request a demo
        </button>
      </div>
    </div>
  );
}

export default SpecialSection;
