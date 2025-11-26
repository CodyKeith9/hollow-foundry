function Footer() {
  return (
    <footer className="hf-footer">
      <div className="hf-container hf-footer-inner">
        <span>
          © {new Date().getFullYear()} Hollow Foundry · Chattanooga, TN
        </span>
        <span className="hf-footer-note">
          Locally forged. Locally hosted.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
