function AboutSection() {
  return (
    <section className="hf-section" id="about">
      <div className="hf-container hf-about-grid">
        <div>
          <h2>About Hollow Foundry</h2>
          <p className="hf-section-subtitle">
            A one-person studio with an engineer's mindset and a foundry's
            patience.
          </p>
          <p>
            I'm Cody Keith, a software engineer who cut his teeth in
            telecommunications and system reliability before moving into
            full-stack development. Hollow Foundry is my way of combining
            local relationships, modern engineering, and infrastructure you can
            actually trust.
          </p>
          <p>
            Every project is built with long-term maintainability in mind... not
            just launch-day gloss.
          </p>
        </div>
        <div className="hf-about-accent">
          <div className="hf-about-box">Founder photo / art here</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
