/* eslint-disable react/prop-types */

function ChooseCard({ img, title, description }) {
  return (
    <div className="flex items-center gap-x-2 bg-white px-2 py-4">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E8F2FF] p-[10px]">
        <img src={img} alt="" className="h-6 w-6" />
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-base font-semibold capitalize">{title}</h1>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </div>
  );
}

export default ChooseCard;
