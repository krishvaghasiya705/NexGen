import React from "react";
import styles from "./testimonial.module.scss";
import Link from "next/link";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";
import arrowcircleimage2 from "@/assets/image/arrowcircleimage2.png";
import Image from "next/image";
import profile1 from "@/assets/image/profile1.png"
import profile2 from "@/assets/image/profile2.png"
import profile3 from "@/assets/image/profile3.png"
import profile4 from "@/assets/image/profile4.png"

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
          <div className={styles.testimonialgridmain}>
            <div className={styles.tetimonialbox}>
              <div className={styles.testimonialtopbox}>
                <h3>NexGen turned our business around!</h3>
                <p>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
              </div>
              <div className={styles.testimonialnamesboxmain}>
                <div className={styles.testimonialnamesflx}>
                  <Image src={profile1} alt="profile1" width={1000} height={1000} />
                  <div>
                    <p>Sarah Thompson</p>
                    <span>CEO of BlueBloom</span>
                  </div>
                </div>
                <div className={styles.arrowicon}>
                  <Image src={arrowcircleimage2} alt="arrowcircleimage2" width={1000} height={1000} />
                </div>
              </div>
            </div>
            <div className={styles.tetimonialbox}>
              <div className={styles.testimonialtopbox}>
                <h3>NexGen turned our business around!</h3>
                <p>Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!</p>
              </div>
              <div className={styles.testimonialnamesboxmain}>
                <div className={styles.testimonialnamesflx}>
                  <Image src={profile2} alt="profile2" width={1000} height={1000} />
                  <div>
                    <p>Wade Warren</p>
                    <span>Art Director</span>
                  </div>
                </div>
                <div className={styles.arrowicon}>
                  <Image src={arrowcircleimage2} alt="arrowcircleimage2" width={1000} height={1000} />
                </div>
              </div>
            </div>
            <div className={styles.tetimonialbox}>
              <div className={styles.testimonialtopbox}>
                <h3>Working with NexGen was a pleasure.</h3>
                <p>Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
              </div>
              <div className={styles.testimonialnamesboxmain}>
                <div className={styles.testimonialnamesflx}>
                  <Image src={profile3} alt="profile3" width={1000} height={1000} />
                  <div>
                    <p>Lisa Williams</p>
                    <span>CEO Of HealthTech</span>
                  </div>
                </div>
                <div className={styles.arrowicon}>
                  <Image src={arrowcircleimage2} alt="arrowcircleimage2" width={1000} height={1000} />
                </div>
              </div>
            </div>
            <div className={styles.tetimonialbox}>
              <div className={styles.testimonialtopbox}>
                <h3>NexGen's web design team brought our vision to life.</h3>
                <p>Their responsive design ensures our website looks stunning on all devices, contributing to increased user engagement.</p>
              </div>
              <div className={styles.testimonialnamesboxmain}>
                <div className={styles.testimonialnamesflx}>
                  <Image src={profile4} alt="profile4" width={1000} height={1000} />
                  <div>
                    <p>Jennifer Lee</p>
                    <span>COO of Foodie Haven</span>
                  </div>
                </div>
                <div className={styles.arrowicon}>
                  <Image src={arrowcircleimage2} alt="arrowcircleimage2" width={1000} height={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
