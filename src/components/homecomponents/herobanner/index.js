import React from "react";
import styles from "./homeherobanner.module.scss";
import CommonButton from "@/components/commonbutton/buttons";
import Marquee from "react-fast-marquee";
import Dropdownicon from "@/assets/icon/dropdownicon";
import Image from "next/image";
import graphimage from "@/assets/image/graphimage.png";
import graphdetailimage from "@/assets/image/graphdetailimage.png";
import Adanilogo from "@/assets/image/adanilogo.png";

export default function Homeherobanner() {
  return (
    <div className={styles.herobannermain}>
      <div className="container">
        <div className={styles.herobanner}>
          <div className={styles.herobannercontainer}>
            <div className={styles.herobannercontent}>
              <h1>India's First AI-Driven Financial Insight Platform</h1>
              <p>
                Generate Lorem Ipsum text with customizable options for
                characters, words, sentences or paragraphs. Learn about the
                history and usage of this classic dummy text in design and.
              </p>
              <div className={styles.buttonalignment}>
                <CommonButton
                  Linkpath="/"
                  Text="See How It Work"
                  Buttonclass="commonbuttonlight"
                />
                <CommonButton
                  Linkpath="/"
                  Text="Get a free demo"
                  Buttonclass="commonbuttonlight"
                />
              </div>
            </div>
            <div className={styles.herobannercardsection}>
              <div className={styles.herobannerchartboxmain}>
                <div className={styles.herobannerchartbox}>
                  <Image
                    src={graphimage}
                    alt="graphimage"
                    width={1000}
                    height={1000}
                  />
                </div>
              </div>
              <div className={styles.herobannerchartdetailsboxmain}>
                <div className={styles.herobannerchartdetailsbox}>
                  {/* <Image src={graphdetailimage} alt="graphdetailimage" width={1000} height={1000} /> */}
                  <div className={styles.chartdetailsboxheader}>
                    <Image
                      src={Adanilogo}
                      alt="Adanilogo"
                      width={1000}
                      height={1000}
                    />
                    <span>adani power limited </span>
                  </div>
                  <div className={styles.chartdetailsboxbody}>
                    <button type="button" className={styles.financebutton}>
                      Financial Health
                    </button>
                    <p>
                      Adani Power demonstrates strong financial health through
                      substantial revenue and profit growth. The company's total
                      revenue increased by <span className={styles.green}>40%</span> to <span className={styles.green}>₹60,281 crore</span>, and EBITDA grew
                      by <span className={styles.green}>96%</span> to <span className={styles.green}>₹28,111 crore</span>. Profit After Tax (PAT) also
                      showed a significant rise of <span className={styles.green}>94%</span>, amounting to <span className={styles.green}>₹20,829</span>
                      crore. Additionally, the company has improved its debt
                      management, reducing its net external debt to equity ratio
                      from <span className={styles.blue}>1.09x in FY 2022-23 to 0.62x in FY 2023-24.</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.herobannerchartgridmain}>
                <div className={styles.herobannerchartgridboxmain}>
                  <div className={styles.herobannerchartgridbox}>
                    <span>90%</span>
                    <p>Save Time</p>
                  </div>
                </div>
                <div className={styles.herobannerchartgridboxmain}>
                  <div className={styles.herobannerchartgridbox}>
                    <span>100%</span>
                    <p>Gain Clarity</p>
                  </div>
                </div>
                <div className={styles.herobannerchartgridboxmain}>
                  <div className={styles.herobannerchartgridbox}>
                    <span>95%</span>
                    <p>Cost Cut</p>
                  </div>
                </div>
                <div className={styles.herobannerchartgridboxmain}>
                  <div className={styles.herobannerchartgridbox}>
                    <span>2000%</span>
                    <p>Company reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.herobannermarquee}>
          <Marquee>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
            <div className={styles.sharesmarquee}>
              <h2>
                Nestleind <span>₹2367.9</span>
                <span className={styles.sharespercentage}>
                  <Dropdownicon /> 6.50(0.28%)
                </span>
              </h2>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
