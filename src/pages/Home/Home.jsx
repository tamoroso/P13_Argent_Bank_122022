import React from "react";
import { FeatureItem } from "../../components";
import styles from "./Home.module.css";

const Home = () => {
  const featuresData = [
    {
      featureImage: {
        src: "/assets/images/icon-chat.png",
        alt: "Chat Icon",
      },
      featureTitle: "You are our #1 priority",
      featureText:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      featureImage: {
        src: "/assets/images/icon-money.png",
        alt: "Money Icon",
      },
      featureTitle: "More savings means higher rates",
      featureText:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      featureImage: {
        src: "/assets/images/icon-security.png",
        alt: "Security Icon",
      },
      featureTitle: "Security you can trust",
      featureText:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];

  return (
    <main>
      <div className={styles.hero}>
        <section className={styles.hero_content}>
          <h2 className="sr-only">Promoted Content</h2>
          <p className={styles.subtitle}>No fees.</p>
          <p className={styles.subtitle}>No minimum deposit.</p>
          <p className={styles.subtitle}>High interest rates.</p>
          <p className={styles.text}>
            Open a savings account with Argent Bank today!
          </p>
        </section>
      </div>
      <section className={styles.features}>
        <h2 className="sr-only">Features</h2>
        {featuresData.map((feature, index) => (
          <FeatureItem key={index} featureData={feature} />
        ))}
      </section>
    </main>
  );
};

export default Home;
