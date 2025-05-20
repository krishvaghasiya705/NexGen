import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Rightuparrow from "@/assets/icon/rightuparrow";
import Commonmarquee from "@/components/commonmarquee";
import arrowcircleimage3 from "@/assets/image/arrowcircleimage3.png";
import Instagramicon from "@/assets/icon/instagramicon";
import Twittericon from "@/assets/icon/twittericon";
import Dribbleicon from "@/assets/icon/dribbleicon";
import Behanceicon from "@/assets/icon/behanceicon";

export default function Footer() {
  const marqueeTexts = [
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
    "Follow Us on Social Media",
  ];
  return (
    <>
      <div className="container">
        <div className={styles.readytranformsectionmain}>
          <div className={styles.readytranformleft}>
            <h6>Ready to Transform Your Digital Presence?</h6>
            <p>
              Take the first step towards digital success with NexGen by your
              side. Our team of experts is eager to craft tailored solutions
              that drive growth for your business.
            </p>
          </div>
          <Link href={"/"} className={styles.getintouchbutton}>
            <button type="button">
              <span>Get in Touch</span>
              <Rightuparrow />
            </button>
          </Link>
        </div>
        <Commonmarquee
          texts={marqueeTexts}
          marqclassname="commonmarqueebgblack3"
        />
        <footer className={styles.footermain}>
          <div className={styles.footerleft}>
            <Link href={"/"}>
              <div className={styles.footerleftbox}>
                <div className={styles.footerleftboxhead}>
                  <Instagramicon />
                  <Image
                    src={arrowcircleimage3}
                    alt="arrowcircleimage3"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.footerleftboxbody}>
                  <h6>instagram</h6>
                  <p>
                    Share visually appealing snippets of our latest web
                    projects.
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className={styles.footerleftbox}>
                <div className={styles.footerleftboxhead}>
                  <Twittericon />
                  <Image
                    src={arrowcircleimage3}
                    alt="arrowcircleimage3"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.footerleftboxbody}>
                  <h6>Twitter</h6>
                  <p>
                    Tweet about interesting coding challenges you've overcome.
                  </p>
                </div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className={styles.footerleftbox}>
                <div className={styles.footerleftboxhead}>
                  <Dribbleicon />
                  <Image
                    src={arrowcircleimage3}
                    alt="arrowcircleimage3"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.footerleftboxbody}>
                  <h6>Dribbble</h6>
                  <p>Showcase design elements of our web projects.</p>
                </div>
              </div>
            </Link>
            <Link href={"/"}>
              <div className={styles.footerleftbox}>
                <div className={styles.footerleftboxhead}>
                  <Behanceicon />
                  <Image
                    src={arrowcircleimage3}
                    alt="arrowcircleimage3"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.footerleftboxbody}>
                  <h6>Behance</h6>
                  <p>Create detailed presentations for our projects.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.footerright}>
            <div className={styles.footerlinksmain}>
              <div className={styles.footerlinkverticlemain}>
                <Link href={"/"} className={styles.footerparentlink}>
                  Home
                </Link>
                <div className={styles.footerlinkverticle}>
                  <Link href={"/"}>Why Us</Link>
                  <Link href={"/"}>About Us</Link>
                  <Link href={"/"}>Testimonials</Link>
                  <Link href={"/"}>FAQ's</Link>
                </div>
              </div>
              <div className={styles.footerlinkverticlemain}>
                <Link href={"/"} className={styles.footerparentlink}>
                  Services
                </Link>
                <div className={styles.footerlinkverticle}>
                  <Link href={"/"}>Web Development</Link>
                  <Link href={"/"}>App Development</Link>
                  <Link href={"/"}>Web Design</Link>
                  <Link href={"/"}>Digital Marketing</Link>
                </div>
              </div>
              <div className={styles.footerlinkverticlemain}>
                <Link href={"/"} className={styles.footerparentlink}>
                  Projects
                </Link>
                <div className={styles.footerlinkverticle}>
                  <Link href={"/"}>Klothink</Link>
                  <Link href={"/"}>Zenith</Link>
                  <Link href={"/"}>Novus</Link>
                  <Link href={"/"}>Apex</Link>
                </div>
              </div>
              <div className={styles.footerlinkverticlemain}>
                <Link href={"/"} className={styles.footerparentlink}>
                  Blogs
                </Link>
                <div className={styles.footerlinkverticle}>
                  <Link href={"/"}>Business</Link>
                  <Link href={"/"} className={styles.upcominglink}>Design <button type="button" className={styles.soonbutton}>Soon</button></Link>
                  <Link href={"/"} className={styles.upcominglink}>Development <button type="button" className={styles.soonbutton}>Soon</button></Link>
                </div>
              </div>
            </div>
            <div className={styles.newslettermain}>
              <div className={styles.newslettertitle}>
                <span>Newsletter</span>
                <h5>Subscribe To our Newsletter</h5>
              </div>
              <div className={styles.newsletterinputs}>
                <input placeholder="Enter your email" type="email" />
                <Image
                  src={arrowcircleimage3}
                  alt="arrowcircleimage3"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
            <div className={styles.footercopyrightmain}>
              <p>© 2024 NextGen. All rights reserved.</p>
              <div className={styles.termslink}>
                <Link href={"/"}>Terms & Conditions</Link>
                <Link href={"/"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
