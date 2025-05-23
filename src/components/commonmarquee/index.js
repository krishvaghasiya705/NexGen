import React from "react";
import styles from "./commonmarquee.module.scss";
import Marquee from "react-fast-marquee";

export default function Commonmarquee({ texts, marqclassname }) {
  return (
    <div className={`${styles.commonmarqueemain} ${styles[marqclassname]}`}>
      <div className={styles.marqueebody}>
        <Marquee direction="left">
          {texts.map((text, index) => (
            <div key={index} className={styles.commonmarqueeflx}>
              <p>{text}</p>
              <span></span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
