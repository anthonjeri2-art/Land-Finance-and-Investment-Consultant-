export default function Home() {
  return (
    <main style={styles.container}>
      
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Land Finance & Investment Consultant</h1>
        <p style={styles.subtitle}>
          Strategic Real Estate Investment, Land Advisory & Financial Growth Solutions
        </p>

        <div style={styles.buttonGroup}>
          <a href="#services" style={styles.primaryBtn}>Our Services</a>
          <a href="#contact" style={styles.secondaryBtn}>Contact Us</a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={styles.section}>
        <h2>About Us</h2>
        <p>
          We provide expert guidance in land acquisition, real estate investment, 
          financial planning, and consultancy services tailored for long-term wealth creation.
        </p>
      </section>

      {/* SERVICES */}
      <section id="services" style={styles.section}>
        <h2>Our Services</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3>Land Investment Advisory</h3>
            <p>Identify high-value land opportunities with strong ROI potential.</p>
          </div>

          <div style={styles.card}>
            <h3>Real Estate Consultancy</h3>
            <p>Professional guidance for buying, selling, and property development.</p>
          </div>

          <div style={styles.card}>
            <h3>Financial Planning</h3>
            <p>Structured investment strategies for sustainable wealth growth.</p>
          </div>

          <div style={styles.card}>
            <h3>Project Management</h3>
            <p>End-to-end oversight of property and investment projects.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2>Contact Us</h2>
        <p>Phone: 0740 117 438</p>
        <p>Email: info@landfinanceconsult.com</p>

        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          <button type="submit" style={styles.primaryBtn}>Send Message</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} Land Finance & Investment Consultant. All rights reserved.</p>
      </footer>
    </main>
  );
}

/* INLINE STYLES */
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#111",
    lineHeight: 1.6,
  },
  hero: {
    padding: "100px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "18px",
    opacity: 0.85,
  },
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  primaryBtn: {
    padding: "10px 20px",
    background: "#d4af37",
    color: "#000",
    textDecoration: "none",
    borderRadius: "5px",
    fontWeight: "bold",
  },
  secondaryBtn: {
    padding: "10px 20px",
    border: "1px solid #fff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  section: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  textarea: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "100px",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#0f172a",
    color: "white",
    marginTop: "40px",
  },
};
