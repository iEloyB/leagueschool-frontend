import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.logoContainer}></section>
      <section className={styles.navContainer}>
        <GiHamburgerMenu size={30} className={styles.hamburgerIcon} />
      </section>
      <section className={styles.sessionContainer}>
        <LoginButton></LoginButton>
      </section>
    </header>
  );
}

function LoginButton() {
  return <button className="accent">Sign in</button>;
}

export default Header;
