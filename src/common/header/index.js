"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Logo from "@/assets/icon/logo";
import CommonButton from "@/components/commonbutton/buttons";
import Link from "next/link";
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
          <div className={styles.headerflx}>
            <div className={styles.headerlogo}>
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
            <div className={styles.headerlinks}>
              <Link href={"/"} className={styles.active}>
                Home
              </Link>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>Contact</Link>
              <Link href={"/"}>News</Link>
            </div>
            <CommonButton
              Linkpath="/"
              Text="Get Started"
              Buttonclass="commonbuttondark"
            />
            <div className={styles.headermenuicon} onClick={toggleSidebar}>
              {isSidebarOpen ? <Crossicon /> : <Menuicon />}
            </div>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
