import React from "react";
import styles from "./testimonial.module.scss";
import Link from "next/link";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";
import Image from "next/image";

export default function Testimonial() {
  return (
    <div className={styles.testimonialmain}>
      <div className="container">
        <div className={styles.testimonial}>
          <div className={styles.testimonialtitle}>
            <h2>Testimonials</h2>
            <Link href={"/"} className={styles.testimoniallinkmain}>
              <Image
                src={arrowcircleimage}
                alt="arrowcircleimage"
                width={1000}
                heigth={1000}
              />
              <span>ALL Testimonials</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
