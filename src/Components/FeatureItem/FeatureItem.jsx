import React from "react";
import styles from "./FeatureItem.module.css";

const FeatureItem = ({ featureData }) => {
  const { featureImage, featureTitle, featureText } = featureData;
  return (
    <div className={styles.feature_item}>
      <img
        src={featureImage.src}
        alt={featureImage.alt}
        className={styles.feature_icon}
      />
      <h3 className={styles.feature_title}>{featureTitle}</h3>
      <p>{featureText}</p>
    </div>
  );
};

export default FeatureItem;
