import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <section className={`bigContainer ` + styles.welcomeContainer}>
        <div className={styles.videoContainer}>
          <video src="/videos/battleAcademia.webm" autoPlay muted loop />
          <div className={styles.blackScreen}></div>
        </div>
        <div className={styles.welcomeContent}>
          <video src="/videos/battleAcademia.webm" autoPlay muted loop />
          <div className={styles.blackScreen}></div>
          <h1>League School</h1>
          <button className="primary">Start learning</button>
        </div>
        <div className={styles.separator}>
          <div className={styles.leftAnimation}></div>
          <div className={styles.rightAnimation}></div>
        </div>
      </section>
      <section className="bigContainer debug">
        <h1>Features</h1>
      </section>
      <section className="bigContainer debug">
        <h1>Pricing</h1>
      </section>
    </>
  );
}

export default LandingPage;
