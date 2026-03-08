import { Link } from "react-router-dom";

const Logo = ({ isDesktop }) => {
  return (
    <Link to={"/"} className="logo-link">
      {isDesktop ? <span>CodingWithMBJ</span> : <span>CWM</span>}
    </Link>
  );
};

export default Logo;
