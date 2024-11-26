import styles from "./Footer.module.css";
import { FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.socials}>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <FaDiscord className={styles.icon} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <FaYoutube className={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </a>
      </section>
      <section className={styles.links}>
        <a href="">Terms of service</a>
        <a href="">User agreement</a>
      </section>
    </footer>
  );
}

export default Footer;
