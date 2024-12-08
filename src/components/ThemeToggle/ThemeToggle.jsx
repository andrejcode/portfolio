import useTheme from '@/hooks/useTheme';
import { FaSun, FaMoon } from 'react-icons/fa6';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-button" aria-label="Toggle theme" onClick={toggleTheme}>
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
}
