"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Logo from "@/assets/icon/logo";

export default function Header() {
  // const [isSidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!isSidebarOpen);
  // };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerflxmain}>
            <div className={styles.headerlogo}>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className={styles.headerlinksflxmain}>
              <Link href={"/"} className={`${styles.headerlink} ${styles.active}`}>
                <span>Home</span>
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                <span>Services</span>
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                <span>Projects</span>
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                <span>About</span>
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                <span>Careers</span>
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                <span>Blogs</span>
              </Link>
              <Link href={"/"} className={styles.contactbutton}>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* <div className={styles.headermenuicon} onClick={toggleSidebar}>
              {isSidebarOpen ? <Crossicon /> : <Menuicon />}
            </div> */}
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
    </>
  );
}
