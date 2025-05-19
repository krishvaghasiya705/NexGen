import React from "react";
import styles from "./services.module.scss";
import Penicon from "@/assets/icon/penicon";
import Link from "next/link";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";
import Image from "next/image";
import Mobdevicon from "@/assets/icon/mobdevicon";
import Webdevicon from "@/assets/icon/webdevicon";
import Digitalmarketingicon from "@/assets/icon/digitalmarketingicon";

export default function Services() {
  return (
    <div className={styles.servicesmain}>
      <div className="container">
        <div className={styles.services}>
          <div className={styles.servicessectiontitle}>
            <h6>Our Services</h6>
          </div>
          <div className={styles.servicessectiongrid}>
            <div className={styles.servicesbox}>
              <div className={styles.servicesboxtopmain}>
                <div className={styles.servicesboxtopmain}>
                  <div className={styles.servicestopleft}>
                    <Penicon />
                    <span>Web Design</span>
                  </div>
                  <Link href={"/"} className={styles.bookcalllinkmain}>
                    <Image
                      src={arrowcircleimage}
                      alt="arrowcircleimage"
                      width={1000}
                      heigth={1000}
                    />
                    <span>Book A Call</span>
                  </Link>
                </div>
              </div>
              <div className={styles.serviceboxbottom}>
                <p>
                  Our Web Design service is all about creating visually stunning
                  and user-friendly websites that leave a lasting.
                </p>
                <span>Starts From $1,500</span>
              </div>
            </div>
            <div className={styles.servicesbox}>
              <div className={styles.servicesboxtopmain}>
                <div className={styles.servicesboxtopmain}>
                  <div className={styles.servicestopleft}>
                    <Mobdevicon />
                    <span>Mobile App Development</span>
                  </div>
                  <Link href={"/"} className={styles.bookcalllinkmain}>
                    <Image
                      src={arrowcircleimage}
                      alt="arrowcircleimage"
                      width={1000}
                      heigth={1000}
                    />
                    <span>Book A Call</span>
                  </Link>
                </div>
              </div>
              <div className={styles.serviceboxbottom}>
                <p>
                  With our Mobile App Development service, we harness the power
                  of mobile technology to create cutting-edge applications that
                  engage your customers on-the-go.
                </p>
                <span>Starts From $2,500</span>
              </div>
            </div>
            <div className={styles.servicesbox}>
              <div className={styles.servicesboxtopmain}>
                <div className={styles.servicesboxtopmain}>
                  <div className={styles.servicestopleft}>
                    <Webdevicon />
                    <span>Web Development</span>
                  </div>
                  <Link href={"/"} className={styles.bookcalllinkmain}>
                    <Image
                      src={arrowcircleimage}
                      alt="arrowcircleimage"
                      width={1000}
                      heigth={1000}
                    />
                    <span>Book A Call</span>
                  </Link>
                </div>
              </div>
              <div className={styles.serviceboxbottom}>
                <p>
                  Our Web Development service is focused on turning your website
                  into a powerful digital asset. We utilize the latest
                  technologies and industry best practices to build websites.
                </p>
                <span>Starts From $1,800</span>
              </div>
            </div>
            <div className={styles.servicesbox}>
              <div className={styles.servicesboxtopmain}>
                <div className={styles.servicesboxtopmain}>
                  <div className={styles.servicestopleft}>
                    <Digitalmarketingicon />
                    <span>Digital Marketing</span>
                  </div>
                  <Link href={"/"} className={styles.bookcalllinkmain}>
                    <Image
                      src={arrowcircleimage}
                      alt="arrowcircleimage"
                      width={1000}
                      heigth={1000}
                    />
                    <span>Book A Call</span>
                  </Link>
                </div>
              </div>
              <div className={styles.serviceboxbottom}>
                <p>
                  In the digital age, marketing is a critical aspect of your
                  business's success. Our Digital Marketing service employs
                  data-driven strategies to enhance your brand's visibility
                </p>
                <span>Starts From $1,200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
