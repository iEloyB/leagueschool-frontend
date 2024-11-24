import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <section className={`bigContainer ` + styles.welcomeContainer}>
        <h1>Welcome</h1>
        <div>
          <button className="primary">Primary button</button>
          <button className="secondary">Secondary button</button>
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
