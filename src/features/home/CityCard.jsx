/* eslint-disable react/prop-types */
function CityCard({ bg, state }) {
  return (
    <div
      className={`${bg} cityCard border-lightBorder flex flex-col rounded-[10px] border-[0.5px] border-solid bg-cover bg-[50%_center] bg-no-repeat pb-[18px] pt-[93px] text-center font-bold text-white`}
    >
      <h1 className="mb-[18px] text-[32px]  capitalize">Hotels In</h1>
      <h5 className="text-lg">{state} State</h5>
      <button className="mt-[55px] self-center justify-self-end rounded-[5px] border-[0.5px] border-solid border-white bg-transparent p-[10px] text-sm font-semibold text-white">
        Book hotels in {state.toLowerCase()} state
      </button>
    </div>
  );
}

export default CityCard;
