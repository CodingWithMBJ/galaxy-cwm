import Logo from "./Logo";
import ThemeBtn from "./ThemeBtn";

const Header = ({ isDesktop }) => {
  return (
    <header className="header">
      <Logo isDesktop={isDesktop} />
      <ThemeBtn />
    </header>
  );
};

export default Header;
