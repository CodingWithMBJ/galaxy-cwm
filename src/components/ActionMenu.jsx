import { NavLink } from "react-router-dom";
import { navigation } from "../data/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActionMenu = () => {
  return (
    <nav className="action-menu-nav">
      <ul className="action-menu-ul">
        {navigation.map((item) => (
          <li className="action-menu-li" key={item.id}>
            <NavLink
              to={`${item.path}`}
              className={({ isActive }) =>
                `action-menu-a ${isActive ? "active-link" : ""}`
              }
            >
              <span className="action-menu-text absolute translate-y-14 text-xl">
                {item.name}
              </span>
              <FontAwesomeIcon
                icon={item.icon}
                className="action-menu-icon action-icon"
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ActionMenu;
