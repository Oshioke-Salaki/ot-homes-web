/* eslint-disable react/prop-types */
function SectionLayout({ children, title, subTitle }) {
  return (
    <div>
      <h1 className="text-primaryColor text-[32px] font-semibold capitalize">
        {title}
      </h1>
      <h2 className="text-sm font-normal capitalize text-[#505050]">
        {subTitle}
      </h2>
      <div className="mt-[11px]">{children}</div>
    </div>
  );
}

export default SectionLayout;
