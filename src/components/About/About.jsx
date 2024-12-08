import profile from '@/assets/profile.webp';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-container">
        <img className="profile" src={profile} alt="Andrej's profile picture" />
        <p className="about-text">
          I&apos;m Andrej Milanović, a passionate React front-end developer with experience building
          engaging, user-friendly interfaces. I honed my skills through projects and comprehensive
          learning at Turing College, where I also developed leadership abilities as a Junior Team
          Lead in Agile teams. I&apos;m eager to embrace new challenges, grow in the tech industry,
          and contribute my skills to impactful projects.
        </p>
      </div>
    </section>
  );
}
