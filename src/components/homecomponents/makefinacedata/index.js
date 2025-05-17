import React from "react";
import styles from "./makefinacedata.module.scss";
import Iphoneimage from "@/assets/image/iphoneimage.png";
import Image from "next/image";
import Hoursicon from "@/assets/icon/hoursicon";
import Arrow from "@/assets/icon/arrow";
import Costicon from "@/assets/icon/costicon";
import Percetageicon from "@/assets/icon/percetageicon";
import Fastericon from "@/assets/icon/fastericon";

export default function Makefinacedata() {
  return (
    <div className={styles.makefinacedatamain}>
      <div className="container">
        <div className={styles.makefinacedata}>
          <div className={styles.makefinacedatatitle}>
            <h3>
              Making <span>Financial Data</span> Understandable, Actionable, and
              Quick - For Everyone.
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of.
            </p>
          </div>
          <div className={styles.makefinacedatabody}>
            <div className={styles.makefinacedatabodycontentmain}>
              <div className={styles.makefinacedatabodyboxleftmain}>
                <div className={styles.makefinacedatabodyboxleft}>
                  <div className={styles.makefinancebodyicon}>
                    <Hoursicon />
                  </div>
                  <h4>40h+ Time Saved Monthly</h4>
                  <p>
                    On report reading, ratio analysis, and concall decoding.
                  </p>
                </div>
                <span className={styles.explorelink}>
                  Explore More <Arrow />
                </span>
              </div>
              <div className={styles.makefinacedatabodyboxleftmain}>
                <div className={styles.makefinacedatabodyboxleft}>
                  <div className={styles.makefinancebodyicon}>
                    <Costicon />
                  </div>
                  <h4>10x Cost Savings</h4>
                  <p>Compared to hiring analysts or using premium tools.</p>
                </div>
                <span className={styles.explorelink}>
                  Explore More <Arrow />
                </span>
              </div>
            </div>
            <div className={styles.makefinacedatabodymobileimage}>
              <Image
                src={Iphoneimage}
                alt="Iphoneimage"
                width={1000}
                height={1000}
              />
            </div>
            <div className={styles.makefinacedatabodycontentmain}>
              <div className={styles.makefinacedatabodyboxrightmain}>
                <div className={styles.makefinacedatabodyboxright}>
                  <div className={styles.makefinancebodyicon}>
                    <Percetageicon />
                  </div>
                  <h4>90% Less Time Spent on Research</h4>
                  <p>
                    Natural-language insights replace deep-dive financial
                    analysis.
                  </p>
                </div>
                <span className={styles.explorelink}>
                  Explore More <Arrow />
                </span>
              </div>
              <div className={styles.makefinacedatabodyboxrightmain}>
                <div className={styles.makefinacedatabodyboxright}>
                  <div className={styles.makefinancebodyicon}>
                    <Fastericon />
                  </div>
                  <h4>3x Faster Faster Investment Clarity</h4>
                  <p>Instant red/green flags and summaries help act quicker.</p>
                </div>
                <span className={styles.explorelink}>
                  Explore More <Arrow />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
