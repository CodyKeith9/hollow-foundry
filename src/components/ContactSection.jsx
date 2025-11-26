import { useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/xjkddwdb"; 

function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section className="hf-section" id="contact">
      <div className="hf-container hf-contact-grid">
        <div>
          <h2>Start Something New</h2>
          <p className="hf-section-subtitle">
            Tell me about your business, idea, or system. I'll follow up with a
            realistic scope and options.
          </p>
          <p className="hf-contact-note">
            I usually respond within one business day. If you'd rather email
            directly, you can reach me at{" "}
            <a href="mailto:codykeith9@gmail.com">
              codykeith9@gmail.com
            </a>
            .
          </p>
        </div>

        <form className="hf-card hf-contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Project details
            <textarea
              name="message"
              rows="4"
              placeholder="What are you trying to build or fix?"
              required
            />
          </label>

          {/* Optional hidden field for subject line in emails */}
          <input
            type="hidden"
            name="_subject"
            value="New inquiry from Hollow Foundry website"
          />

          <button
            type="submit"
            className="hf-btn hf-btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="hf-form-status hf-form-status--success">
              Message sent. I’ll be in touch soon.
            </p>
          )}

          {status === "error" && (
            <p className="hf-form-status hf-form-status--error">
              Something went wrong. You can email me directly instead.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
