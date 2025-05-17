import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Twittericon from "@/assets/icon/twittericon";
import Youtubeicon from "@/assets/icon/youtubeicon";
import Instagramicon from "@/assets/icon/instagramicon";
import Facebookicon from "@/assets/icon/facebookicon";
import Linkedinicon from "@/assets/icon/linkedinicon";
import Logo from "@/assets/icon/logo";
import Googleplayicon from "@/assets/image/googleplayicon.png";
import CommonButton from "@/components/commonbutton/buttons";

export default function Footer() {
  const Socialmediabuttons = [
    {
      sociallink: "https://x.com/",
      socialicon: <Twittericon />,
      socialname: "Twitter",
    },
    {
      sociallink: "https://www.youtube.com/",
      socialicon: <Youtubeicon />,
      socialname: "Youtube",
    },
    {
      sociallink: "https://www.instagram.com/",
      socialicon: <Instagramicon />,
      socialname: "Instagram",
    },
    {
      sociallink: "https://www.facebook.com/",
      socialicon: <Facebookicon />,
      socialname: "Facebook",
    },
    {
      sociallink: "https://in.linkedin.com/",
      socialicon: <Linkedinicon />,
      socialname: "Linkedin",
    },
  ];
  return (
    <>
      <div className={styles.ourcommunitiesmain}>
        <div className="container">
          <div className={styles.ourcommunitiestitle}>
            <h3>
              Our <span>Communities</span>
            </h3>
          </div>
          <div className={styles.socialmediabuttonsflxmain}>
            {Socialmediabuttons.map((i) => (
              <Link href={i.sociallink} target="_blank">
                <button type="button" className={styles.socialbutton}>
                  <div className={styles.socialmediaicon}>{i.socialicon}</div>
                  <span className={styles.socialmedianame}>{i.socialname}</span>
                  <span className={styles.socialmedianamebig}>
                    {i.socialname}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className={styles.footermain}>
        <div className={styles.footer}>
          <div className="container">
            <div className={styles.footerflxmain}>
              <div className={styles.footerleftcontentmain}>
                <div className={styles.footerlogo}>
                  <Link href={"/"}>
                    <Logo />
                  </Link>
                </div>
                <div className={styles.footerleftcontent}>
                  <p>The right partner for investment</p>
                  <p>
                    Lorem Ipsum is <br/> simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
                <div className={styles.googleplaybutton}>
                  <Image
                    src={Googleplayicon}
                    alt="Googleplayicon"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className={styles.footerlinksmain}>
                <span>Links</span>
                <div className={styles.footerlinkflx}>
                  <Link href={"/"}>Home</Link>
                  <Link href={"/"}>Blog</Link>
                  <Link href={"/"}>News</Link>
                  <Link href={"/"}>Contact us</Link>
                </div>
              </div>
              <div className={styles.footerrightcontentmain}>
                <h1>Get started to up your business with personal Lorem ipsum</h1>
                <input type="email" className={styles.emailinputmain} placeholder="Enter your email address" />
                <CommonButton Text="Submit Now" Linkpath="/" Buttonclass="commonbuttonlightsc" />
              </div>
            </div>
          </div>
          <div className={styles.footercopyrightmain}>
            <div className="container">
              <div className={styles.footercopyright}>
                <p>©2025 Lorem, All rights reserved.</p>
                <div className={styles.footertermslink}>
                  <Link href={"/"}>Terms of Service</Link>
                  <Link href={"/"}>Privacy Policy</Link>
                  <Link href={"/"}>Cookie Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
