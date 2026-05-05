
import styles from "./Contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {


  return (
    <section className={styles.contactPage}>

      {/* HERO */}
      <div className={styles.hero}>
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out with any questions and we’ll be happy to help.</p>
      </div>

      {/* CARDS (TOP ROW) */}
      <div className={styles.cardsRow}>

        <div className={styles.card}>
          <span>📞</span>
          <h3>Call Us</h3>
          <p>+92 300 123 4567</p>
        </div>

        <div className={styles.card}>
          <span>✉️</span>
          <h3>Email</h3>
          <p>info@hairoilbrand.com</p>
        </div>

        <div className={styles.card}>
          <span>💬</span>
          <h3>WhatsApp</h3>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsapp}
          >
            Chat Now
          </a>
        </div>

      </div>

      {/* FORM (BOTTOM CENTER) */}
      <div className={styles.formSection}>
        <ContactForm />
      </div>

    </section>
  );
};

export default Contact;