import Arrow from "@/assets/icon/arrow";
import React from "react";
import styles from "./button.module.scss";
import Link from "next/link";

export default function CommonButton({ Text, Linkpath, Buttonclass }) {
  return (
    <>
      <Link href={Linkpath}>
        <button type="button" className={`${styles[Buttonclass]}`}>
          <span>{Text}</span>
          <Arrow />
        </button>
      </Link>
    </>
  );
}
