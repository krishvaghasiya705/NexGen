import React from "react";
import styles from "./analyze.module.scss";
import Image from "next/image";
import step1image from "@/assets/image/step1.png";
import step2image from "@/assets/image/step2.png";

export default function Analyze() {
  const Analyzecarddata = [
    {
      step: "Step 1",
      title: "Upload Your Report",
      paragraph: "Submit your reports or links to generate insights instantly",
      cardimage: step1image,
    },
    {
      step: "Step 2",
      title: "Instant Summary",
      paragraph: "Generate a summary with just one click",
      cardimage: step2image,
    },
  ];
  return (
    <div className={styles.analyzesectionmain}>
      <div className="container">
        <div className={styles.analyzesection}>
          <div className={styles.analyzesectionflx}>
            <div className={styles.analyzesectionleft}>
              <h1>Analyze Financial Reports 10x Faster</h1>
              <p>
                Upload lengthy financial reports or paste a public URL and let
                our financial intelligence instantly break it down into a clear,
                actionable summary. From balance sheet breakdowns to key risk
                factors - get a complete financial health check without lifting
                a finger
              </p>
            </div>
            <div className={styles.analyzesectionright}>
              {Analyzecarddata.map((i) => (
                <div className={styles.analyzesectionrightcardmain}>
                  <div className={styles.analyzesectionrightcard}>
                    <div>
                      <button type="button" className={styles.stepbutton}>
                        <span>{i.step}</span>
                      </button>
                      <h2>{i.title}</h2>
                      <p>{i.paragraph}</p>
                    </div>
                    <div className={styles.stepimage}>
                      <Image
                        src={i.cardimage}
                        alt={i.cardimage}
                        widht={1000}
                        height={1000}
                      />
                    </div>
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
