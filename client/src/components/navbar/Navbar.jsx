"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../public/Pix3l_Wear.png";
import Link from "next/link";
import "../../app/globals.css";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav
      className="Navbar bg-black flex justify-between font"
      style={{ fontFamily: "Klapt-Regular" }}
    >
      <div className="Logo bg-black w-44">
        <Image src={logo} alt="Pix3l Wear Logo" />
      </div>
      <div className="flex items-center pr-8">
        <ul className="flex text-white space-x-6 text-2xl cursor-move">
          <li>
            <Link
              href="/"
              className={`link ${pathName === "/" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/clothing"
              className={`link ${pathName === "/clothing" ? "active" : ""}`}
            >
              Clothing
            </Link>
          </li>
          <li>
            <Link
              href="/shipping"
              className={`link ${pathName === "/shipping" ? "active" : ""}`}
            >
              Shipping
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`link ${pathName === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={`link ${pathName === "/cart" ? "active" : ""}`}
            >
              Cart
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={`link ${pathName === "/register" ? "active" : ""}`}
            >
              SIGN IN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
