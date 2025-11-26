function ServicesSection() {
  return (
    <section className="hf-section" id="services">
      <div className="hf-container">
        <h2>Services & Pricing</h2>
        <p className="hf-section-subtitle">
          Straightforward packages for local businesses, founders, and
          organizations in Chattanooga. Custom scopes available when you're
          building something bigger.
        </p>

        <div className="hf-grid hf-grid-3">
          <article className="hf-card">
            <h3>Starter Site</h3>
            <p className="hf-tag">$1,500 - $2,500</p>
            <p>
              A fast, modern website for your business or project. Perfect for
              restaurants, services, portfolios, and small teams.
            </p>
            <ul className="hf-list">
              <li>Up to 5 pages</li>
              <li>Mobile-responsive design</li>
              <li>Contact form & basic SEO</li>
              <li>Deployed with managed local hosting option</li>
            </ul>
          </article>

          <article className="hf-card">
            <h3>Business Web App</h3>
            <p className="hf-tag">$3,000 - $5,000+</p>
            <p>
              Custom tools that match how you actually work — dashboards,
              internal tools, client portals, or booking systems.
            </p>
            <ul className="hf-list">
              <li>Custom UI & workflows</li>
              <li>React front end / Node back end</li>
              <li>Database integration</li>
              <li>Role-based access & auth options</li>
            </ul>
          </article>

          <article className="hf-card">
            <h3>Local Managed Hosting</h3>
            <p className="hf-tag">from $50 / month</p>
            <p>
              Hosting, monitoring, and backups on Chattanooga-managed
              infrastructure through a trusted local partner.
            </p>
            <ul className="hf-list">
              <li>Local rack space & backups</li>
              <li>SSL, updates, & uptime checks</li>
              <li>Email or message a real human for support</li>
              <li>Priority fixes if something breaks</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

