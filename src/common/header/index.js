"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Logo from "@/assets/icon/logo";
import Menuicon from "@/assets/icon/menuicon";
import Sidebar from "../sidebar";
import Crossicon from "@/assets/icon/crossicon";

export default function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
                Home
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                Services
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                Projects
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                About
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                Careers
              </Link>
              <Link href={"/"} className={styles.headerlink}>
                Blogs
              </Link>
              <Link href={"/"} className={styles.contactbutton}>
                Contact Us
              </Link>
            </div>
            <div className={styles.menuicon} onClick={toggleSidebar}>
              {isSidebarOpen ? <Crossicon /> : <Menuicon />}
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
