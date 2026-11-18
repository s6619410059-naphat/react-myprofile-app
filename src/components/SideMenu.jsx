import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiTarget,
  FiBriefcase,
  FiLayers,
  FiMail,
} from "react-icons/fi";

const items = [
  { to: "/", icon: FiHome, label: "Home" },
  { to: "/about", icon: FiUser, label: "About" },
  { to: "/eduexp", icon: FiBookOpen, label: "Education & Experience" },
  { to: "/spec", icon: FiTarget, label: "Specializations" },
  { to: "/projects", icon: FiBriefcase, label: "Projects" },
  { to: "/skills", icon: FiLayers, label: "Skills" },
  { to: "/contactme", icon: FiMail, label: "Contact" },
];

export default function SideMenu() {
  return (
    <nav className="sidemenu" aria-label="Main menu">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end
          title={label}
          aria-label={label}
          className={({ isActive }) => "sidemenu__item" + (isActive ? " is-active" : "")}
        >
          <Icon />
        </NavLink>
      ))}
    </nav>
  );
}
