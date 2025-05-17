import React from "react";
import styles from "./oldnewsection.module.scss";
import Listarrowicon from "@/assets/icon/listarrowicon";
import vsimage from "@/assets/image/vsimage.png";
import Image from "next/image";
import Versuslineimage from "@/assets/image/versusline.png"
import Versusimage from "@/assets/image/versusname.png"

export default function Oldnewsection() {
  const Oldwaydata = [
    {
      title: "100+ Page Reports:",
      paragraph:
        "Reading annual reports, concalls, and filings manually. Takes 4-6 hours per company.",
    },
    {
      title: "Manual Ratio Crunching:",
      paragraph:
        "40+ ratios to calculate and decode yourself. Time-consuming and error-prone.",
    },
    {
      title: "Missed Warning Signs:",
      paragraph:
        "Critical red flags buried deep in data. Needs expert knowledge.",
    },
    {
      title: "Expensive Analyst Services:",
      paragraph: "₹10,000-₹50,000/month or pay-per-report models.",
    },
    {
      title: "Requires Professional Expertise:",
      paragraph: "Only finance pros can interpret data confidently.",
    },
    {
      title: "3-5 Hours per Stock:",
      paragraph: "Manual research drains productivity.",
    },
  ];
  const Newwaydata = [
    {
      title: "Condensed Into What Matters:",
      paragraph:
        "Lorem ipsum is a nonsensical Latin text used to fill in graphic design, publishing, and web development.",
    },
    {
      title: "Instant Ratio Breakdown:",
      paragraph:
        "Auto-explained metrics in simple terms—understand company health without spreadsheets.",
    },
    {
      title: "Get Only What Matters:",
      paragraph:
        "Lorem ipsum is a nonsensical Latin text used to fill in graphic design, publishing, and web development.",
    },
    {
      title: "Affordable AI Financial Assistant:",
      paragraph: "All-in-one insights under ₹500/month—no extra fees, no analysts needed.",
    },
    {
      title: "Made for All Investors:",
      paragraph: "No MBA required. Retail or institutional—everyone can make smarter calls.",
    },
    {
      title: "Decide in Under 5 Minutes:",
      paragraph: "Lorem ipsum is a nonsensical Latin text used to fill in graphic design.",
    },
  ];
  return (
    <div className={styles.oldnewsectionmain}>
      <div className="container">
        <div className={styles.oldnewsection}>
          <div className={styles.oldnewsectiontitle}>
            <h3>
              <span>Old Ways</span> vs <span>New Ways</span> with Lorem Ipsum
            </h3>
            <p>
              Lorem ipsum is a nonsensical Latin text used to fill in graphic
              design, publishing, and web development. It comes from a
              1st-century BC text by Cicero, and has been popularized
            </p>
          </div>
          <div className={styles.oldnewsectioncontentmain}>
            <div className={styles.oldnewsectioncontent}>
              <h4>Old Ways With Others</h4>
              <div className={styles.oldnewsectioncontentflx}>
                {Oldwaydata.map((i) => (
                  <div className={styles.oldnewflx}>
                    <div className={styles.oldnewflxtitle}>
                      <Listarrowicon />
                      <h5>{i.title}</h5>
                    </div>
                    <p>{i.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.vsimagemain}>
              <div className={styles.vsimagemain}>
                <Image src={Versuslineimage} alt="Versuslineimage" width={1000} height={1000} className={styles.vsimage} />
                  <div className={styles.vsnameimage}>
                    <Image src={Versusimage} alt="Versusimage" width={1000} height={1000} />
                  </div>
              </div>
            </div>
            <div className={styles.oldnewsectioncontent}>
              <h4>New Ways with Loremipsum</h4>
              <div className={styles.oldnewsectioncontentflx}>
                {Newwaydata.map((i) => (
                  <div className={styles.oldnewflx}>
                    <div className={styles.oldnewflxtitle}>
                      <Listarrowicon />
                      <h5>{i.title}</h5>
                    </div>
                    <p>{i.paragraph}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
