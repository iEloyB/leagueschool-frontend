import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <section className={`debug ` + styles.logoContainer}></section>
      <section className={`debug ` + styles.navContainer}></section>
      <section className={`debug ` + styles.sessionContainer}></section>
    </header>
  );
}

export default Header;
