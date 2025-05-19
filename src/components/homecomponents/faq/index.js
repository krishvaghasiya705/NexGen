"use client"
import React, { useState } from "react";
import styles from "./faq.module.scss";
import Image from "next/image";
import arrowcircleimage from "@/assets/image/arrowcircleimage.png";
import Link from "next/link";
import Faqplusicon from "@/assets/icon/faqplusicon";
import Faqminusicon from "@/assets/icon/faqminusicon";

const FAQS = [
  {
    question: "How long does it take to complete a web development project?",
    answer:
      "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you handle large-scale mobile app development projects?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "Can you integrate third-party APIs into our mobile app?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "How do you ensure cross-platform compatibility for mobile apps?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
  {
    question: "What is your approach to user experience (UX) design?",
    answer: "The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(idx === openIndex ? null : idx);
  };

  return (
    <div className={styles.faqmain}>
      <div className="container">
        <div className={styles.faqtitle}>
          <h4>Frequently Asked Questions</h4>
          <Link href={"/"} className={styles.faqtitleinkmain}>
            <Image
              src={arrowcircleimage}
              alt="arrowcircleimage"
              width={68}
              height={68}
            />
            <span>View All</span>
          </Link>
        </div>
        <div className={styles.faqsectionflxmain}>
          <div className={styles.faqsectionflxleft}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`${styles.faqboxmain} ${
                  openIndex === idx ? styles.faqboxmainactive : ""
                }`}
              >
                <div
                  className={styles.faqboxtitle}
                  onClick={() => handleToggle(idx)}
                  aria-expanded={openIndex === idx}
                  tabIndex={0}
                  role="button"
                  onKeyPress={(e) =>
                    (e.key === "Enter" || e.key === " ") &&
                    handleToggle(idx)
                  }
                >
                  <p>{faq.question}</p>
                  <div className={styles.faqboxtitleicon}>
                    {openIndex === idx ? <Faqminusicon /> : <Faqplusicon />}
                  </div>
                </div>
                <div
                  className={styles.faqboxdetails}
                >
                  {faq.answer && <p>{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.faqsectionflxright}>
            <h5>Ask your question</h5>
            <div className={styles.faqformmain}>
              <div className={styles.forminputmain}>
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={styles.forminputmain}>
                <label>Email</label>
                <input type="email" placeholder="Enter your email" />
              </div>
              <div className={styles.forminputmain}>
                <label>Your Question</label>
                <textarea placeholder="Enter Your Question Here ....." />
              </div>
            </div>
            <button type="button" className={styles.sendmsgbutton}>
              <span>Send Your Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
