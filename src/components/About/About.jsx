import profile from '@/assets/profile.webp';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="about-container">
        <img className="profile" src={profile} alt="Profile" />
        <p className="about-text">
          My name is Andrej Milanović. I am a passionate React front-end web developer. My journey
          began with personal projects, leading to a comprehensive learning experience at Turing
          College, where I excelled in front-end development and grew as a leader. As a Junior Team
          Lead, I honed my leadership and teamwork skills, supporting and motivating peers in an
          Agile environment. I am hardworking, punctual, and always eager to embrace new challenges
          and technologies. My goal is to continue growing in the tech industry and contribute my
          expertise and enthusiasm to new opportunities.
        </p>
      </div>
    </section>
  );
}
