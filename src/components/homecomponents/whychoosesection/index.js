import React from "react";
import styles from "./whychoosesection.module.scss";
import Clockinhandicon from "@/assets/icon/clockinhandicon";
import Lockicon from "@/assets/icon/lockicon";
import Coinupicon from "@/assets/icon/coinupicon";
import Archaryicon from "@/assets/icon/archaryicon";

export default function Whychoosesection() {
  return (
    <div className={styles.whychoosesectionmain}>
      <div className="container">
        <div className={styles.whychoosesection}>
          <div className={styles.whychoosesectionmidcontnetmobile}>
            <h6>
              Why Choose <span>Lorem Ipsum</span>
            </h6>
            <p>
              Dhanarthi empowers investors with AI-driven financial insights,
              simplifying complex reports into actionable, natural language
              summaries—saving hours and driving smarter decisions.
            </p>
          </div>
          <div className={styles.whychooseboxflx}>
            <div className={styles.whychoosebox}>
              <div className={styles.whychooseicon}>
                <Clockinhandicon />
              </div>
              <h5>Time-Saving Smart Reports</h5>
              <p>
                Skip 100-page reports and long concalls—we provide concise,
                predictive summaries of annual reports and YouTube earnings
                calls, optimized for fast decision-making.
              </p>
            </div>
            <div className={styles.whychoosebox}>
              <div className={styles.whychooseicon}>
                <Lockicon />
              </div>
              <h5>Privacy & Security</h5>
              <p>
                Lorem ipsum is a nonsensical Latin text used to fill in graphic
                design, publishing, and web development. It comes from a
                1st-century BC text by Cicero.
              </p>
            </div>
          </div>
          <div className={styles.whychoosesectionmidcontnet}>
            <h6>
              Why Choose <span>Lorem Ipsum</span>
            </h6>
            <p>
              Dhanarthi empowers investors with AI-driven financial insights,
              simplifying complex reports into actionable, natural language
              summaries—saving hours and driving smarter decisions.
            </p>
          </div>
          <div className={styles.whychooseboxflx}>
            <div className={styles.whychoosebox}>
              <div className={styles.whychooseicon}>
                <Coinupicon />
              </div>
              <h5>Simplified Financial Intelligence</h5>
              <p>
                We decode complex financial data like balance sheets, P&Ls, and
                cash flows into simple natural language insights backed by 40+
                key ratios and red-green flags.
              </p>
            </div>
            <div className={styles.whychoosebox}>
              <div className={styles.whychooseicon}>
                <Archaryicon />
              </div>
              <h5>AI-Powered Accuracy</h5>
              <p>
                From financial health analysis to real-time news insights, our
                AI ensures accuracy and relevance so investors can act quickly
                and confidently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
