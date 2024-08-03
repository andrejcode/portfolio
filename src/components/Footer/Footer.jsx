import SocialIcons from '../SocialIcons/SocialIcons';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <hr />
      <SocialIcons />
      <p>&copy; {year} Andrej Milanović</p>
    </footer>
  );
}
