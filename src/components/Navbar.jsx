function Navbar() {
  return (
    <header className="hf-navbar">
      <div className="hf-container hf-navbar-inner">
        <div className="hf-logo">
          <span className="hf-logo-mark">HF</span>
          <span className="hf-logo-text">Hollow Foundry</span>
        </div>
        <nav className="hf-nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
