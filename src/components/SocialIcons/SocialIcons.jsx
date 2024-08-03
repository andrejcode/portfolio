import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa6';
import './SocialIcons.css';

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/andrejmilanovic"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit LinkedIn"
      >
        <FaLinkedin className="social-icon" />
      </a>
      <a
        href="https://github.com/andrejcode"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit GitHub"
      >
        <FaGithub className="social-icon" />
      </a>
      <a
        href="https://x.com/andrejcodes"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Twitter/X"
      >
        <FaXTwitter className="social-icon" />
      </a>
      <a href="mailto:amilanovi0@gmail.com" aria-label="Send an email">
        <FaEnvelope className="social-icon" />
      </a>
    </div>
  );
}
