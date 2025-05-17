"use client";
import React, { useState } from "react";
import styles from "./faqsection.module.scss";
import Faqplusicon from "@/assets/icon/faqplusicon";

export default function Faqsection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem ipsum is a nonsensical Latin text used to fill in graphic design, publishing, and web development. It comes from a 1st-century BC text by Cicero, and has been popularized."
    },
    {
      question: "How can I benefit from AI in trading analysis platforms?",
      answer:
        "AI can help analyze large datasets, identify patterns, and provide insights to make informed trading decisions."
    },
    {
      question: "Lorem ipsum is a nonsensical Latin text used to fill in graphic design?",
      answer:
        "Yes, it is often used as placeholder text in design and publishing."
    },
    {
      question: "Latin text used to fill in graphic design?",
      answer:
        "It is a common practice to use Latin text as a placeholder in design templates."
    }
  ];

  return (
    <div className={styles.faqsectionmain}>
      <div className="container">
        <div className={styles.faqsectiontitle}>
          <h6>
            Frequently Asked <span>Questions</span>
          </h6>
        </div>
        <div className={styles.faqflxmain}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqbox} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div
                className={styles.faqtitle}
                onClick={() => toggleFaq(index)}
              >
                <h6>
                  <span>{`${index + 1}.`}</span> {faq.question}
                </h6>
                <div className={styles.faqplusicon}>
                  <Faqplusicon />
                </div>
              </div>
              <div className={styles.faqdescription}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
