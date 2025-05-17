import React from 'react'
import styles from "./startwithsection.module.scss"
import Image from 'next/image'
import ManonChartimage from "@/assets/image/manonchart.png"
import CommonButton from '@/components/commonbutton/buttons'

export default function Startwithsection() {
  return (
    <div className={styles.startwithsectionmain}>
      <div className="container">
        <div className={styles.startwithsection}>
            <div className={styles.startwithsectionbox}>
                <div className={styles.startwithsectiondetails}>
                    <h1>Starting with Lorem Ipsum is EASY FAST and FREE!</h1>
                    <p>Experience the full power of our platform — 100% access, zero hassle.</p>
                    <CommonButton Text="Signup Now" Linkpath={"/"} Buttonclass="commonbuttonlight" />
                </div>
                <div className={styles.startwithimage}>
                    <Image src={ManonChartimage} alt='ManonChartimage' width={1000} height={1000} />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
