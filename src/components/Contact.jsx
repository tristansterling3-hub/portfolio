import useReveal from "../hooks/useReveal.js";

export default function Contact() {
  const heading = useReveal();
  const cards = useReveal();
  const form = useReveal();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={`section-heading ${heading.className}`} ref={heading.ref}>
          <h2 className="section-title">
            Get In <span>Touch</span>
          </h2>
          <div className="section-line" />
          <p>
            Have a project in mind, want to collaborate, or looking for a
            developer who can build across multiple stacks? Reach out.
          </p>
        </div>

        <div className="contact-grid">
          <div className={`contact-cards ${cards.className}`} ref={cards.ref}>
            <article className="contact-card">
              <h3>Email Me</h3>
              <p>
                <a href="mailto:tristansterling3@gmail.com">tristansterling3@gmail.com</a>
              </p>
            </article>

            <article className="contact-card">
              <h3>Location</h3>
              <p>Available for remote opportunities</p>
            </article>

            <article className="contact-card">
              <h3>Let's Connect</h3>
              <p>
                Open to internships, collaborations, and software or game
                development opportunities.
              </p>
              <div className="contact-links">
                <a className="tag" href="https://github.com/tristansterling3-hub" target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a
                  className="tag"
                  href="https://www.linkedin.com/in/tristan-sterling-9a408121a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </article>
          </div>

          <form className={`contact-form ${form.className}`} ref={form.ref}>
            <label>
              Name *
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email *
              <input type="email" placeholder="tristansterling3@gmail.com" />
            </label>

            <label>
              Subject *
              <input type="text" placeholder="What's this about?" />
            </label>

            <label>
              Message *
              <textarea rows={6} placeholder="Tell me about your project or idea..." />
            </label>

            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
