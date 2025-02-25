"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="flex p-4 items-center justify-between bg-secondary shadow-md">
      {/* <Image src={"./logo1.svg"} width={160} height={100} alt="logo" /> */}
      <h2
        className="logo-text"
        style={{
          fontSize: "1.5rem", // Larger font size for logo
          fontWeight: "bold",
          background: "linear-gradient(90deg, #4F46E5, #9333EA)", // Gradient text color
          WebkitBackgroundClip: "text", // Clip background to text
          WebkitTextFillColor: "transparent", // Make text transparent

          letterSpacing: "2px", // Add spacing between letters
          fontFamily: "Poppins, sans-serif", // Use a modern font
          display: "inline-block",
          padding: "0.5rem 1rem",
          border: "4px solid #4f46e5", // Optional: Add a border
          borderRadius: "10px", // Optional: Rounded corners
        }}
      >
        AI-MockPrep
      </h2>
      <ul className="hidden md:flex gap-6">
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard" && "text-primary font-bold"}
          `}
        >
          Dashboard
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard/questions" && "text-primary font-bold"}
          `}
        >
          Questions
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard/upgrade" && "text-primary font-bold"}
          `}
        >
          Upgrade
        </li>
        <li
          className={`hover:text-primary hover:font-bold transition-all cursor-pointer
            ${path == "/dashboard/how" && "text-primary font-bold"}
          `}
        >
          How it Works?
        </li>
      </ul>
      <UserButton />
    </div>
  );
}

export default Header;
