"use client";
import React from "react";
import styles from "./sidebar.module.scss";
import Link from "next/link";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {isOpen && <div className={`${styles.sidebaroverlay} ${isOpen ? styles.open : ""}`} onClick={toggleSidebar}></div>}
      <aside className={`${styles.aside} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarbodymain}>
          <div className={styles.sidebarbody}>
            <Link href={"/"} className={styles.sidebarlink}>Home</Link>
            <Link href={"/"} className={styles.sidebarlink}>Services</Link>
            <Link href={"/"} className={styles.sidebarlink}>Projects</Link>
            <Link href={"/"} className={styles.sidebarlink}>About</Link>
            <Link href={"/"} className={styles.sidebarlink}>Careers</Link>
            <Link href={"/"} className={styles.sidebarlink}>Blogs</Link>
            <Link href={"/"} className={styles.contactlink}>
              <button type="button">Contact Us</button>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
