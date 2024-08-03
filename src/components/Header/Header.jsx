import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';
import NavLinks from '../NavLinks/NavLinks';
import MobileMenu from '../MobileMenu/MobileMenu';
import logo from '@/assets/logo.webp';
import './Header.css';
import SocialIcons from '../SocialIcons/SocialIcons';

export default function Header() {
  return (
    <header id="home">
      <div className="logo-and-nav">
        <div>
          <img className="logo" alt="AM Logo" src={logo} />
        </div>
        <div className="theme-and-nav">
          <ThemeToggle />
          <nav className="hide-mobile">
            <NavLinks />
          </nav>
          <MobileMenu />
        </div>
      </div>
      <div className="home-text">
        <h1>
          Hi there! 👋 I&apos;m<span className="home-name"> Andrej</span>
        </h1>
        <h2>Welcome to my portfolio!</h2>
      </div>

      <div className="hide-mobile desktop-social-icons">
        <SocialIcons />
      </div>
    </header>
  );
}
