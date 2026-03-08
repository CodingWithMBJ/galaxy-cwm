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
      <section className="profile-header">
        <figure className="img-container">
          <img
            src={image}
            alt="fullName"
            className="avatar"
            height={500}
            width={500}
          />
        </figure>
      </section>
      <section className="profile-body">
        <article className="profile-body-top">
          <h1 className="myName">{fullName}</h1>
          <p className="handle">{handle}</p>
          <p className="myTitle">{myTitle}</p>
        </article>
        <article className="profile-body-mid">
          <p className="bio">{intro}</p>
          <Link to={`mailto:codingwithmbj@gmail.com`} className="email">
            codingwithmbj@gmail.com
          </Link>
        </article>
        <article className="profile-body-bottom">
          <ul className="social-ul">
            {socials.map((social) => (
              <li className="social-li" key={social.id}>
                <Link to={`${social.href}`} className="social-li-a">
                  <FontAwesomeIcon icon={social.icon} className="social-icon" />
                </Link>
              </li>
            ))}
          </ul>
        </article>
      </section>
      <section className="profile-footer">
        <Link to={"https://google.com"} className="btn">
          Go to Google?
        </Link>
        <Link to={"/home"} className="btn home-btn">
          View Profile
        </Link>
      </section>
    </aside>
  );
};

export default ProfileCard;
