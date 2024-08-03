import { useEffect, useState } from 'react';
import MenuIcon from '../MenuIcon/MenuIcon';
import NavLinks from '../NavLinks/NavLinks';
import './MobileMenu.css';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  function toggleMenu() {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <MenuIcon menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <NavLinks closeMenu={closeMenu} />
          </nav>
        </div>
      )}
    </>
  );
}
