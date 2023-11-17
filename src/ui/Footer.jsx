import Logo from "./Logo";

function Footer() {
  return (
    <div className="flex gap-x-[23px] pb-[67px] pl-[108px] pt-[83px] text-[#46465E]">
      <div className="w-[405px]">
        <Logo />
        <p className="w-[365px] text-base font-normal ">
          Our mission is to empower you with cutting-edge solutions that elevate
          your performance, amplify your growth, and establish lasting
          connections with your audience. Join us in shaping a brighter future
          for your business.
        </p>
      </div>
      <div>
        <h1 className="font-semibold text-[#000018]">Platform</h1>
      </div>
    </div>
  );
}

export default Footer;
