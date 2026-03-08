import { NavLink } from "react-router-dom";
import { navigation } from "../data/navigation";
const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-ul">
        {navigation.map((item) => (
          <li className="nav-li" key={item.id}>
            <NavLink
              to={`/${item.path}`}
              className={({ isActive }) =>
                `nav-li-a ${isActive ? "active-link" : ""}`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
