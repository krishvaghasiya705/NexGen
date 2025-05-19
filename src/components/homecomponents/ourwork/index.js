import React from "react";
import styles from "./ourwork.module.scss";
import Zenithappicon from "@/assets/icon/zenithappicon";
import Link from "next/link";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";
import Image from "next/image";
import member1 from "@/assets/image/member1.png";
import member2 from "@/assets/image/member2.png";
import member3 from "@/assets/image/member3.png";
import member4 from "@/assets/image/member4.png";
import member5 from "@/assets/image/member5.png";
import member6 from "@/assets/image/member6.png";
import member7 from "@/assets/image/member7.png";
import member8 from "@/assets/image/member8.png";
import member9 from "@/assets/image/member9.png";
import member10 from "@/assets/image/member10.png";
import zenithimage from "@/assets/image/zenithimage.png";
import auraecommerceimage from "@/assets/image/auraecommerceimage.png";

export default function Ourwork() {
  return (
    <div className={styles.ourworkmain}>
      <div className="container">
        <div className={styles.ourworktitle}>
          <h1>Our Works</h1>
          <Link href={"/"} className={styles.allworklinkmain}>
            <Image
                    src={arrowcircleimage}
                    alt="arrowcircleimage"
                    width={1000}
                    heigth={1000}
                  />
            <span>ALL Works</span>
          </Link>
        </div>
        <div className={styles.ourworkgridmain}>
          <div className={styles.ourworkleftbox}>
            <div className={styles.ourworkleftboxtitle}>
              <div className={styles.ourworkappname}>
                <Zenithappicon />
                <span>Zenith Fitness App</span>
              </div>
              <Link href={"/"} className={styles.detailslinkamin}>
                <Image
                  src={arrowcircleimage}
                  alt="arrowcircleimage"
                  width={1000}
                  heigth={1000}
                />
                <span>Details</span>
              </Link>
            </div>
            <div className={styles.categorybuttonsmain}>
              <button type="button" className={styles.categorybutton}>
                <span className={styles.categoryname}>Category</span>
                <span className={styles.categorydote}></span>
                <p>Mobile App Development</p>
              </button>
              <button type="button" className={styles.categorybutton}>
                <span className={styles.categoryname}>Time Taken</span>
                <span className={styles.categorydote}></span>
                <p>6 months</p>
              </button>
            </div>
            <p className={styles.cardperagraph}>
              An all-in-one health and wellness app that offers personalized
              fitness plans, nutrition guidance, and virtual workout classes.
            </p>
          </div>
          <div className={styles.ourworkcenterbox}>
            <Image
              src={zenithimage}
              alt="zenithimage"
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.ourworkrightbox}>
            <div className={styles.technologybox}>
              <p>Technologies Used</p>
              <div className={styles.framworkbuttonsmain}>
                <button type="button" className={styles.framworkbutton}>
                  <span>React Native</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>Firebase</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>Redux</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>REST API</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>MongoDB</span>
                </button>
              </div>
            </div>
            <div className={styles.membersdivmain}>
              <p>Team Members</p>
              <div className={styles.memberimages}>
                <div className={styles.memberimage}>
                  <Image
                    src={member1}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member2}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member3}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member4}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member5}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
            <div className={styles.bookcallbuttonmain}>
              <button type="button" className={styles.bookcallbutton}>
                <span>Book A Call</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.ourworkgridmain}>
          <div className={styles.ourworkleftbox}>
            <div className={styles.ourworkleftboxtitle}>
              <div className={styles.ourworkappname}>
                <Zenithappicon />
                <span>A-Aura Ecommerce</span>
              </div>
              <Link href={"/"} className={styles.detailslinkamin}>
                <Image
                  src={arrowcircleimage}
                  alt="arrowcircleimage"
                  width={1000}
                  heigth={1000}
                />
                <span>Details</span>
              </Link>
            </div>
            <div className={styles.categorybuttonsmain}>
              <button type="button" className={styles.categorybutton}>
                <span className={styles.categoryname}>Category</span>
                <span className={styles.categorydote}></span>
                <p>Web Design & Development</p>
              </button>
              <button type="button" className={styles.categorybutton}>
                <span className={styles.categoryname}>Time Taken</span>
                <span className={styles.categorydote}></span>
                <p>3 months</p>
              </button>
            </div>
            <p className={styles.cardperagraph}>
              A complete overhaul of a corporate website to enhance its brand
              identity and user experience.
            </p>
          </div>
          <div className={styles.ourworkcenterbox}>
            <Image
              src={auraecommerceimage}
              alt="auraecommerceimage"
              width={1000}
              height={1000}
            />
          </div>
          <div className={styles.ourworkrightbox}>
            <div className={styles.technologybox}>
              <p>Technologies Used</p>
              <div className={styles.framworkbuttonsmain}>
                <button type="button" className={styles.framworkbutton}>
                  <span>WordPress</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>PHP</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>HTML5</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>CSS3</span>
                </button>
                <button type="button" className={styles.framworkbutton}>
                  <span>JavaScript</span>
                </button>
              </div>
            </div>
            <div className={styles.membersdivmain}>
              <p>Team Members</p>
              <div className={styles.memberimages}>
                <div className={styles.memberimage}>
                  <Image
                    src={member6}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member7}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member8}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member9}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className={styles.memberimage}>
                  <Image
                    src={member10}
                    alt="memberimage"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
            </div>
            <div className={styles.bookcallbuttonmain}>
              <button type="button" className={styles.bookcallbutton}>
                <span>Book A Call</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
