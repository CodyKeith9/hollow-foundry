import Logo from "../assets/hollow-foundry-logo.png";

function Hero() {
  return (
    <section className="hf-section hf-hero" id="top">
      <div className="hf-container hf-hero-grid">
        
        {/* LEFT SIDE — TEXT */}
        <div>
          <p className="hf-eyebrow">Chattanooga · Web & Hosting Studio</p>
          <h1>Hollow Foundry</h1>
          <p className="hf-hero-subtitle">
            Local web development and managed hosting. Built here, hosted here,
            supported here.
          </p>

          <div className="hf-hero-actions">
            <a href="#contact" className="hf-btn hf-btn-primary">
              Start a Project
            </a>
            <a href="#projects" className="hf-btn hf-btn-ghost">
              View Work
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — LOGO */}
        <div className="hf-hero-placeholder">
          <img 
            src={Logo} 
            alt="Hollow Foundry Logo" 
            className="hf-hero-logo"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
