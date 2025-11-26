function ProjectsSection() {
  return (
    <section className="hf-section" id="projects">
      <div className="hf-container">
        <h2>Selected Work</h2>
        <p className="hf-section-subtitle">
          A few systems and experiments from the forge. Case studies will plug
          in here later.
        </p>

        <div className="hf-grid hf-grid-3">
          <article className="hf-card hf-card-project">
            <h3>Mentor-Connect</h3>
            <p>SSO-heavy mentorship platform using microservices.</p>
            <span className="hf-tag">Identity · TypeScript · Next.js</span>
          </article>

          <article className="hf-card hf-card-project">
            <h3>Communyti</h3>
            <p>Reciprocal currency tooling for a Chattanooga non-profit.</p>
            <span className="hf-tag">APIs · Currency Logic · Node</span>
          </article>

          <article className="hf-card hf-card-project">
            <h3>Eonveil</h3>
            <p>Real-time multiplayer tabletop platform built from scratch.</p>
            <span className="hf-tag">Sockets · Node · React</span>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
