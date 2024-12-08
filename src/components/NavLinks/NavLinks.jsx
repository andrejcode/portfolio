import './NavLinks.css';

export default function Navigation({ closeMenu }) {
  return (
    <ul className="nav-links">
      <li>
        <a onClick={closeMenu} href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a onClick={closeMenu} href="#about">
          About
        </a>
      </li>
    </ul>
  );
}
