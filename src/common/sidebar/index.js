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
          <div className={styles.sidebarbody}></div>
        </div>
      </aside>
    </>
  );
}
