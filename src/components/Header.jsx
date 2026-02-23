import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ onBack }) => {
  return (
    <header className="header">
      <button type="button" onClick={onBack} className="pill-btn">
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
    </header>
  );
};

export default Header;
