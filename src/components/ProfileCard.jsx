import { Link } from "react-router-dom";
import { profile } from "../data/profile";
import { socials } from "../data/socials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileCard = () => {
  const {
    fullName,
    handle,
    myTitle,
    location,
    availability,
    image,
    intro,
    skills,
  } = profile;

  return (
    <aside className="profile-card">
      <section className="profile-card-container">
        <figure className="img-container">
          <img
            src={image}
            alt="fullName"
            className="avatar"
            height={800}
            width={800}
          />
        </figure>
        <article className="bio">
          <section className="bio-top">
            <h1 className="myName">{fullName}</h1>
            <p className="handle">{handle}</p>
            <p className="myTitle">{myTitle}</p>
          </section>
          <section className="bio-mid">
            <p className="bio-body">{intro}</p>
            <Link to={`mailto:codingwithmbj@gmail.com`} className="email">
              codingwithmbj@gmail.com
            </Link>
          </section>
          <section className="bio-bottom">
            <ul className="social-ul">
              {socials.map((social) => (
                <li className="social-li" key={social.id}>
                  <Link to={`${social.href}`} className="social-a">
                    <FontAwesomeIcon
                      icon={social.icon}
                      className="social-icon"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="skill-ul">
              {skills.map((skill) => (
                <li className="skill-li" key={skill.id}>
                  <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                </li>
              ))}
            </ul>{" "}
          </section>
        </article>
      </section>
    </aside>
  );
};

export default ProfileCard;
