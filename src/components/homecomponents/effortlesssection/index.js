import React from "react";
import styles from "./effortless.module.scss";
import bullimage from "@/assets/image/bullimage.png";
import Image from "next/image";
import Graphicon from "@/assets/icon/graphicon";
import Raceflagicon from "@/assets/icon/raceflagicon";
import Magnifyicon from "@/assets/icon/magnifyicon";

export default function Effortless() {
  const Effortlessdata = [
    {
      icon: <Graphicon />,
      title: "Real-Time Analysis of 40+ Financial Ratios",
      minititle: "Save Time and Cost",
      paragraph:
        "Lorem ipsum is a nonsensical Latin text used to fill in graphic design, publishing, and web development. It comes from a 1st-century BC text by Cicero, and has been popularized.",
      number: "1",
    },
    {
      icon: <Raceflagicon />,
      title: "Detect Red & Green Flags Instantly",
      minititle: "Don't Miss Any Risk",
      paragraph:
        "Lorem ipsum is a nonsensical Latin text used to fill in graphic design, publishing, and web development. It comes from a 1st-century BC text by Cicero, and has been popularized.",
      number: "2",
    },
    {
      icon: <Magnifyicon />,
      title: "Assess Financial Health in Seconds",
      minititle: "No Need for Expertise",
      paragraph:
        "Lorem ipsum is a nonsensical Latin text used to fill in graphic design, publishing, and web development. It comes from a 1st-century BC text by Cicero, and has been popularized.",
      number: "3",
    }
  ];
  return (
    <div className={styles.effortlesssectionmain}>
      <div className="container">
        <div className={styles.effortlesssection}>
          <div className={styles.effortlesssectioncontent}>
            <div className={styles.effortlesssectioncontentleft}>
              <h1>Effortless Company's Stocks Research with Lorem Ipsum</h1>
              <p>
                Analyze financial health, ratios, and red-green flags in
                real-time—no spreadsheets, just smart insights.
              </p>
              <Image
                src={bullimage}
                alt="bullimage"
                widht={1000}
                height={1000}
              />
            </div>
            <div className={styles.effortlesssectioncontentright}>
              {Effortlessdata.map((i) => (
                <div className={styles.effortlesssectboxmain}>
                  <div className={styles.effortlesssectboxicon}>{i.icon}</div>
                  <div className={styles.effortlesssectbox}>
                    <h2>{i.title}</h2>
                    <span>{i.minititle}</span>
                    <p>{i.paragraph}</p>
                    <span className={styles.effortlesssectboxnumber}>
                      {i.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
