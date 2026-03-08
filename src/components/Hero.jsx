import { profile } from "../data/profile";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-name">{profile.fullName}</h1>
      <p className="hero-bio">{profile.intro}</p>
      <p className="hero-current">
        Currently a Student @ <span className="school">CodingTemple</span>
      </p>
    </section>
  );
};

export default Hero;
