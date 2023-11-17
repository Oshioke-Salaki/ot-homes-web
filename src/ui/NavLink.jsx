/* eslint-disable react/prop-types */
import { NavLink as NavLinkDom } from "react-router-dom";

function NavLink({ to, name }) {
  return <NavLinkDom to={to}>{name}</NavLinkDom>;
}

export default NavLink;
