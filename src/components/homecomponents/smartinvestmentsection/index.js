import React from "react";
import styles from "./smartinvestment.module.scss";
import Smartinvestmentimage from "@/assets/image/smartinvestmentimage.png";
import Image from "next/image";

export default function Smartinvestment() {
  const Smartinvestmentdat = [
    {
      title: "Instant Insights from Financial Reports",
      minititle: "Save Time and Free of Cost",
      paragraph: "Generate Lorem Ipsum text with customizable options for characters, words, sentences or paragraphs. Learn about the history..."
    },
    {
      title: "Understand Concalls Without Watching",
      minititle: "Skip the Full Video or Transcript",
      paragraph: "Generate Lorem Ipsum text with customizable options for characters, words, sentences or paragraphs."
    },
    {
      title: "Instant Insights from Financial Reports",
      minititle: "Save Time and Free of Cost",
      paragraph: "Generate Lorem Ipsum text with customizable options for characters, words, sentences or paragraphs. Learn about the history and..."
    }
  ]
  return (
    <div className={styles.smartinvestmentmain}>
      <div className="container">
        <div className={styles.smartinvestmenttitle}>
          <h5>
            Make <span>Smarter Investment</span> Decisions Effortlessly
          </h5>
          <p>
            Generate Lorem Ipsum text with customizable options for characters,
            words, sentences or paragraphs.{" "}
          </p>
        </div>
        <div className={styles.smartinvestmentflx}>
          <div className={styles.smartinvestmentflxleft}>
            {Smartinvestmentdat.map((index) => (
              <div className={styles.smartinvestmentbox}>
                <h6>{index.title}</h6>
                <span>{index.minititle}</span>
                <p>{index.paragraph}</p>
              </div>
            ))}
          </div>
          <div className={styles.smartinvestmentflxright}>
            <Image
              src={Smartinvestmentimage}
              alt="Smartinvestmentimage"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
