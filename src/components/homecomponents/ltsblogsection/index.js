import React from "react";
import styles from "./ltsblogsection.module.scss";
import CommonButton from "@/components/commonbutton/buttons";
import Image from "next/image";
import Blogimage1 from "@/assets/image/blogimage1.jpg";
import Blogimage2 from "@/assets/image/blogimage2.jpg";
import Blogimage3 from "@/assets/image/blogimage3.jpg";
import Arrow from "@/assets/icon/arrow";

export default function Ltsblogsection() {
  const Blogdata = [
    {
      Blogimage: Blogimage1,
      blogdate: "Mar 13, 2025",
      blogtitle:
        "What is Backtesting and How Do You Backtest a Trading Strategy?",
      blogdetail:
        "Backtesting evaluates a trading strategy using historical data to assess performance before applying it to live markets....",
    },
    {
      Blogimage: Blogimage2,
      blogdate: "Mar 13, 2025",
      blogtitle: "NSE Holiday List 2025",
      blogdetail:
        "NSE holidays are designated non-trading days when the National Stock Exchange remains closed. These include national holidays, festivals...",
    },
    {
      Blogimage: Blogimage3,
      blogdate: "Mar 13, 2025",
      blogtitle: "What is a Stockbroker? A Complete Guide",
      blogdetail:
        "A stockbroker is a licensed professional who buys and sells stocks on behalf of clients, providing market insights and advice....",
    },
  ];
  return (
    <div className={styles.ltsblogsectionmain}>
      <div className="container">
        <div className={styles.ltsblogtitle}>
          <h4>
            Latest <span>Blog's</span>
          </h4>
          <p>
            Stay updated with market trends, investment strategies, trading
            tips, and financial insights for smarter investing.
          </p>
        </div>
        <div className={styles.ltsblogcardgrd}>
          {Blogdata.map((i) => (
            <div className={styles.ltsblogcardmain}>
              <div className={styles.blogimage}>
                <Image
                  src={i.Blogimage}
                  alt="Blogimage"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className={styles.blogdetails}>
                <div>
                  <div className={styles.blogdateandbutton}>
                    <button type="button" className={styles.sharemarketbutton}>
                      <span>Share Market</span>
                    </button>
                    <span className={styles.blogcarddate}>{i.blogdate}</span>
                  </div>
                  <h5>{i.blogtitle}</h5>
                  <p>{i.blogdetail}</p>
                </div>
                <span className={styles.bloglink}>
                  Read More <Arrow />
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ltsblogviewbutton}>
          <CommonButton
            Text="View More"
            Linkpath={"/"}
            Buttonclass="commonbuttondark"
          />
        </div>
      </div>
    </div>
  );
}
