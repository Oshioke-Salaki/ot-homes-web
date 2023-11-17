import NavLink from "./NavLink";

const links = [
  {
    to: "about",
    name: "About us",
  },
  {
    to: "listProperty",
    name: "List your property",
  },
  {
    to: "support",
    name: "Support",
  },
];

function NavLinks() {
  return (
    <div className="custom-flex gap-x-[22px] text-base font-normal">
      {links.map((link, i) => (
        <NavLink to={link.to} name={link.name} key={i} />
      ))}
    </div>
  );
}

export default NavLinks;
