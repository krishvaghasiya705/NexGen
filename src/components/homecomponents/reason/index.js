import React from "react";
import styles from "./reason.module.scss";
import Link from "next/link";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";
import Image from "next/image";

export default function Reasonsection() {
  return (
    <div className={styles.reasonsectionmain}>
      <div className="container">
        <div className={styles.reasonsection}>
          <div className={styles.reasonsectiontitle}>
            <h4>Reasons to Choose NexGen for Your Digital Journey</h4>
          </div>
          <div className={styles.reasonboxgridmain}>
            <div className={styles.reasonbox}>
              <div>
                <h5>Expertise in Cutting-Edge Technologies</h5>
                <p>
                  NexGen ensures your projects are powered by state-of-the-art
                  technologies, guaranteeing innovation and future-proof
                  solutions.
                </p>
              </div>
              <Link href={"/"} className={styles.learnmorelink}>
                <Image
                  src={arrowcircleimage}
                  alt="arrowcircleimage"
                  width={1000}
                  height={1000}
                  className={styles.arrowcircleimage}
                />
                <span>Learn More</span>
              </Link>
            </div>
            <div className={styles.reasonbox}>
              <div>
                <h5>Proven Track Record of Success</h5>
                <p>
                  NexGen demonstrates a consistent ability to meet and exceed
                  client expectations, providing reliable and effective web
                  solutions tailored to diverse needs.
                </p>
              </div>
              <Link href={"/"} className={styles.learnmorelink}>
                <Image
                  src={arrowcircleimage}
                  alt="arrowcircleimage"
                  width={1000}
                  height={1000}
                  className={styles.arrowcircleimage}
                />
                <span>Learn More</span>
              </Link>
            </div>
            <div className={styles.reasonbox}>
              <div>
                <h5>Client-Centric Approach</h5>
                <p>
                  At NexGen, we prioritize understanding our clients' unique
                  requirements, fostering transparent communication throughout
                  the development process.
                </p>
              </div>
              <Link href={"/"} className={styles.learnmorelink}>
                <Image
                  src={arrowcircleimage}
                  alt="arrowcircleimage"
                  width={1000}
                  height={1000}
                  className={styles.arrowcircleimage}
                />
                <span>Learn More</span>
              </Link>
            </div>
            <div className={styles.reasonbox}>
              <div>
                <h5>Dedicated Team of Professionals</h5>
                <p>
                  Our professionals bring a wealth of expertise to the table,
                  ensuring the delivery of top-notch, scalable, and secure web
                  solutions for your business.
                </p>
              </div>
              <Link href={"/"} className={styles.learnmorelink}>
                <Image
                  src={arrowcircleimage}
                  alt="arrowcircleimage"
                  width={1000}
                  height={1000}
                  className={styles.arrowcircleimage}
                />
                <span>Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
