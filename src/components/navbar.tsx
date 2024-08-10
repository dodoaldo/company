"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const descSection = document.getElementById("company-overview"); 
      if (descSection) {
        const descTop = descSection.getBoundingClientRect().top;
        setIsSticky(descTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar bg-slate-400 justify-around p-3 gap-5 ${isSticky ? "sticky top-0 " : ""}`}>
      <Link href="/" className="h-[120px] w-[120px]">
        <Image src="https://fwtingleandsons.co.uk/wp-content/uploads/2019/02/Paragon-Oak-Logo-BLACK.png" alt="Paragon Oak Logo" />
      </Link>
      <div className="flex justify-center items-end gap-5 tracking-tighter">
        <Link href="/">Home</Link>
        <Link href="/product">Our product</Link>
        <Link href="/team">Our Team</Link>
        <Link href="/about-us">About us</Link>
      </div>
    </div>
  );
}
