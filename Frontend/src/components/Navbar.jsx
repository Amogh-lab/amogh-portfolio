import './Navbar.css';

function Navbar() {
  return (
    <nav className="glass-navbar">
      <h1 className="logo">AMOGH</h1>
      <ul className="nav-links">
        <li><a href="#Home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;