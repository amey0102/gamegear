import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-icon">⚡</span>
        GameGear
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
      </nav>
    </header>
  );
}

export default Header;

