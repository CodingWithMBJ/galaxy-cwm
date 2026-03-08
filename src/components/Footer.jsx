import { Link } from "react-router-dom";
import Logo from "./Logo";
import { socials } from "../data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-top">
        <Logo />
      </section>
      <section className="footer-bottom">
        <p className="cta-footer">Let's collaborate!</p>
        <Link to={`mailto:codingwithmbj@gmail.com`} className="footer-email">
          codingwithmbj@gmail.com
        </Link>
        <ul className="social-ul">
          {socials.map((social) => (
            <li className="social-li" key={social.id}>
              <Link to={`${social.href}`} className="social-li-a">
                <FontAwesomeIcon icon={social.icon} className="social-icon" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <p className="copy-r">{`Built with Hast =)`}</p>
    </footer>
  );
};

export default Footer;
