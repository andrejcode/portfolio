import './MenuIcon.css';

export default function MenuIcon({ menuOpen, toggleMenu }) {
  return (
    <div className="menu-icon" onClick={toggleMenu}>
      <div className={`line ${menuOpen ? 'first-line-open' : 'first-line-close'}`}></div>
      <div className={`line ${menuOpen ? 'second-line-open' : 'second-line-close'}`}></div>
      <div className={`line ${menuOpen ? 'third-line-open' : 'third-line-close'}`}></div>
    </div>
  );
}
