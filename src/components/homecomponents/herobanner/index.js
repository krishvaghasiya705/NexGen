import React from "react";
import styles from "./herobanner.module.scss";
import Link from "next/link";
import ringshape from "@/assets/image/ringshape.png";
import halfringshape from "@/assets/image/halfringshape.png";
import Image from "next/image";
import Rightarrow from "@/assets/icon/rightarrow";
import Commonmarquee from "@/components/commonmarquee";
import bannerimage from "@/assets/image/bannerimage.png";
import Halfringshape from "@/assets/icon/halfringshape";
import arrowimage from "@/assets/image/arrowimage.png";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";

export default function Herobanner() {
  const marqueeTexts = [
    "Digital Marketing",
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "Website Design",
    "Branding",
    "Website Development",
    "Mobile App Development"
  ];

  return (
    <div className={styles.herobannermain}>
      <div className="container">
        <div className={styles.herobannerflxmain}>
          <div className={styles.herobannerleftcontent}>
            <div className={styles.herobannerleftcontentbox}>
              <div className={styles.herobannerlefttitle}>
                <h1>Digital Solutions That Drive Success</h1>
                <div>
                  <Link href={"/"} className={styles.herobannerlinkmain}>
                    <div className={styles.linkicon}>
                      <Image
                        src={ringshape}
                        alt="ringshape"
                        width={1000}
                        height={1000}
                      />
                      <div className={styles.linkarrowmain}>
                        <div className={styles.linkarrow}>
                          <Rightarrow />
                        </div>
                      </div>
                    </div>
                    <span>Start a Project</span>
                  </Link>
                </div>
              </div>
              <p>
                At NexGen, we believe in the transformative power of digital
                solutions. Our team of experts is dedicated to helping
                businesses like yours thrive in the fast-paced digital
                landscape.
              </p>
            </div>
            <Commonmarquee texts={marqueeTexts} />
          </div>
          <div className={styles.herobannerrightcontent}>
            <div className={styles.herobannerimagediv}>
              <Image
                src={bannerimage}
                alt="bannerimage"
                width={1000}
                height={1000}
                className={styles.herobannerimage}
              />
              <Link href={"/"} className={styles.arrowlinkmain}>
                {/* <div className={styles.linkicon}>
                  <Halfringshape />
                  <div className={styles.linkarrowmain}>
                    <div className={styles.linkarrow}>
                      <Rightarrow />
                    </div>
                  </div>
                </div> */}
                <Image
                  src={arrowimage}
                  alt="arrowimage"
                  width={1000}
                  height={1000}
                />
              </Link>
            </div>
            <div className={styles.rightcontentbottombox}>
              <h2>Estatein Real Estate</h2>
              <p>Web Development.</p>
            </div>
          </div>
        </div>
        <div className={styles.herobannerrcountingsectionmain}>
          <div className={styles.coutingboxmain}>
            <span>Clients</span>
            <h3>200+</h3>
          </div>
          <div className={styles.coutingboxmain}>
            <span>PROJECTS</span>
            <h3>280+</h3>
          </div>
          <div className={styles.coutingboxmain}>
            <span>HAPPY CLIENTS</span>
            <h3>100%</h3>
          </div>
          <div className={styles.coutingboxmain}>
            <span>FOLLOWER</span>
            <h3>420K</h3>
          </div>
          <div className={styles.blank}></div>
          <div className={styles.coutingboxmain}>
            <span>Years Of Experience</span>
            <h3>10+</h3>
          </div>
          <div className={styles.knowmorebox}>
            <Link href={"/"} className={styles.knowmorelinkmain}>
              <Image
                src={arrowcircleimage}
                alt="arrowcircleimage"
                width={1000}
                height={1000}
              />
              <span>Know More</span>
            </Link>
          </div>
          <div className={styles.blank}></div>
        </div>
      </div>
    </div>
  );
}
