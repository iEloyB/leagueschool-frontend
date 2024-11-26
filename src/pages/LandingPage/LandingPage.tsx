import { useState } from "react";
import styles from "./LandingPage.module.css";

function Welcome() {
  return (
    <section className={`bigContainer ` + styles.welcomeContainer}>
      <div className={styles.videoContainer}>
        <video src="/videos/battleAcademia.webm" autoPlay muted loop />
        <div className={styles.blackScreen}></div>
      </div>
      <div className={styles.welcomeContent}>
        <video src="/videos/battleAcademia.webm" autoPlay muted loop />
        <div className={styles.blackScreen}></div>
        <h1>League School</h1>
        <button className="accent">Start learning</button>
      </div>
      <div className={styles.separator}>
        <div className={styles.leftAnimation}></div>
        <div className={styles.rightAnimation}></div>
      </div>
    </section>
  );
}

type FeatureKey =
  | "Interactive tests"
  | "League dictionary"
  | "Progress tracker";

const featuresData: Record<FeatureKey, { description: string }> = {
  "Interactive tests": {
    description:
      "Think you can outsmart a Teemo in a bush? Put your skills to the test with interactive challenges that’ll make you the Faker of your friend group.",
  },
  "League dictionary": {
    description:
      "Lost in the Rift? Learn what 'inting', 'CS', and 'mid diff' really mean! Our League dictionary is your go-to guide for mastering the lingo—without needing an Ornn-level forge.",
  },
  "Progress tracker": {
    description:
      "Track your journey from Iron IV to (hopefully) something better! See how your skills improve over time and celebrate every victory—even those 'enemy team has AFK' wins.",
  },
};

function Features() {
  const [selectedFeature, setSelectedFeature] =
    useState<FeatureKey>("Interactive tests");

  return (
    <section className={styles.featuresContainer + " bigContainer"}>
      <div className={styles.leftChain}></div>
      <div className={styles.rightChain}></div>
      <article className={styles.featuresList}>
        {Object.keys(featuresData).map((feature) => (
          <h4
            key={feature}
            className={
              selectedFeature === feature
                ? `${styles.featureItem} ${styles.active}`
                : styles.featureItem
            }
            onClick={() => setSelectedFeature(feature as FeatureKey)}
          >
            {feature}
          </h4>
        ))}
      </article>
      <article className={styles.currentFeature}>
        <div>
          <h2>{selectedFeature}</h2>
          <p>{featuresData[selectedFeature].description}</p>
        </div>
      </article>
    </section>
  );
}

function Pricing() {
  return (
    <section className={styles.pricingContainer + " bigContainer"}>
      <h1>Find Your Fit</h1>

      <article className={styles.firstPricing}>
        <div className={styles.pricingContent}>
          <div>
            <h3>Free</h3>
            <p>Perfect for testing the waters before you dive into the Rift.</p>
          </div>
          <ul>
            <li>Get free access for 14 days</li>
            <li>Interactive tests</li>
            <li>League dictionary</li>
          </ul>
        </div>

        <div className={styles.price}>
          <h4>$0</h4>
        </div>
      </article>

      <article className={styles.secondPricing}>
        <div className={styles.pricingContent}>
          <div>
            <h3>Standard</h3>
            <p>Your go-to for climbing without blaming your jungler.</p>
          </div>
          <ul>
            <li>Interactive tests</li>
            <li>League dictionary</li>
            <li>Progress tracker</li>
            <li>Access to the community forum</li>
            <li>Priority for new feature voting</li>
          </ul>
        </div>

        <div className={styles.price}>
          <h4>$50</h4>
          <p>/ Per year</p>
        </div>
      </article>

      <article className={styles.featuredPricing}>
        <div className={`${styles.pricingContent} ${styles.premium}`}>
          <div>
            <h3>Premium</h3>
            <p>
              For those who want to support us while flexing their shiny badge.
            </p>
          </div>
          <ul>
            <li>Interactive tests</li>
            <li>League dictionary</li>
            <li>Progress tracker</li>
            <li>Access to the community forum</li>
            <li>Priority for new feature voting</li>
            <li>Exclusive supporter badge</li>
            <li>Customizable profile in the community</li>
            <li>Directly support the project</li>
          </ul>
        </div>

        <div className={styles.price}>
          <h4>$100</h4>
          <p>/ Per year</p>
        </div>
      </article>
    </section>
  );
}

function LandingPage() {
  return (
    <>
      <Welcome />
      <Features />
      <Pricing />
    </>
  );
}

export default LandingPage;
