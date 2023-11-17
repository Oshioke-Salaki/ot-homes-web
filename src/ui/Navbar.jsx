import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SignIn from "./SignIn";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white pt-[23px]">
      <Logo />
      <div className="custom-flex gap-x-[51px]">
        <NavLinks />
        <SignIn />
      </div>
    </nav>
  );
}

export default Navbar;
