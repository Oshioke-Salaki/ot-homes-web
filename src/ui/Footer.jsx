import Logo from "./Logo";
import NavLink from "./NavLink";

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
        <div className="p-[10px]">
          <h1 className="font-semibold text-[#000018]">Platform</h1>
          <NavLink name="Analytics" />
          <NavLink name="Planning" />
          <NavLink name="Data managment" />
          <NavLink name="Security" />
        </div>
        <div className="p-[10px]">
          <h1 className="font-semibold text-[#000018]">Connect With Us</h1>
          <NavLink name="Instagram" />
          <NavLink name="Twitter" />
          <NavLink name="Facebook" />
          <NavLink name="LinkedIn" />
        </div>
        <div className="p-[10px]">
          <h1 className="font-semibold text-[#000018]">Reasources</h1>
          <NavLink name="Customers" />
          <NavLink name="Ebooks & Guides" />
          <NavLink name="Podacast & video" />
          <NavLink name="Finance" />
        </div>
        <div className="p-[10px]">
          <h1 className="font-semibold text-[#000018]">Our Services</h1>
          <NavLink name="About Us" />
          <NavLink name="Our Plans" />
          <NavLink name="Contact Us" />
          <NavLink name="Careers" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
