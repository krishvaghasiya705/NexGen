import React from "react";
import styles from "./ltsnewssection.module.scss";
import CommonButton from "@/components/commonbutton/buttons";
import Bookmarkicon from "@/assets/icon/bookmarkicon";
import Arrow from "@/assets/icon/arrow";

export default function Ltsnewssection() {
  return (
    <div className={styles.ltsnewssectionmain}>
      <div className="container">
        <div className={styles.ltsnewssection}>
          <div className={styles.ltsnewssectionflx}>
            <div className={styles.ltsnewssectionleft}>
              <div className={styles.ltsnewstitlediv}>
                <h2>
                  Latest <span>News</span>
                </h2>
                <p>
                  Stay updated with the latest market trends and trading tips.
                  With our AI trading software, you can get insightful articles,
                  news releases, and product improvements that can help you
                  learn more about automated trading.
                </p>
                <CommonButton
                  Text="View More"
                  Linkpath={"/"}
                  Buttonclass="commonbuttondark"
                />
              </div>
              <div className={styles.ltscardmain}>
                <div>
                  <div className={styles.ltscarddatestitle}>
                    <div className={styles.ltscarddates}>
                      <span>Apr 16, 2025</span>
                      <span>Company Earnings</span>
                      <span>1 hour ago</span>
                    </div>
                    <div className={styles.bookmarkdiv}>
                      <Bookmarkicon />
                    </div>
                  </div>
                  <div className={styles.carddetails}>
                    <h3>
                      Q4 results today: Wipro, Waaree Renewables among 10
                      companies to announce...
                    </h3>
                    <p>
                      Wipro and Waaree Renewables, among 10 companies, are
                      releasing Q4 earnings. Wipro anticipates a slight revenue
                      increase but a decline in constant currency; profits
                      are...
                    </p>
                    <span className={styles.newlink}>
                      AI News Analyatics <Arrow />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ltsnewssectionright}>
              <div className={styles.ltscardmain}>
                <div>
                  <div className={styles.ltscarddatestitle}>
                    <div className={styles.ltscarddates}>
                      <span>Apr 16, 2025</span>
                      <span>Company Earnings</span>
                      <span>1 hour ago</span>
                    </div>
                    <div className={styles.bookmarkdiv}>
                      <Bookmarkicon />
                    </div>
                  </div>
                  <div className={styles.carddetails}>
                    <h3>
                      ICICI Pru Life Q4 net profit soars as new business looks
                      up
                    </h3>
                    <p>
                      ICICI Prudential Life Insurance reported a surge in Q4 net
                      profit, but new business growth slowed due to reduced ULIP
                      demand. Investors should analyze the overall financial...
                    </p>
                    <span className={styles.newlink}>
                      AI News Analyatics <Arrow />
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.ltscardmain}>
                <div>
                  <div className={styles.ltscarddatestitle}>
                    <div className={styles.ltscarddates}>
                      <span>Apr 16, 2025</span>
                      <span>Company Earnings</span>
                      <span>1 hour ago</span>
                    </div>
                    <div className={styles.bookmarkdiv}>
                      <Bookmarkicon />
                    </div>
                  </div>
                  <div className={styles.carddetails}>
                    <h3>
                      A muted March quarter can keep bank stocks under
                      pressure...
                    </h3>
                    <p>
                      Lower price-to-book ratios for most Indian banks compared
                      to last year indicate potential continued downward
                      pressure on bank stocks. HDFC Bank and ICICI Bank are
                      exceptions,...
                    </p>
                    <span className={styles.newlink}>
                      AI News Analyatics <Arrow />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
