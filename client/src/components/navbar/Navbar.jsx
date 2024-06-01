import React from "react";
import Image from "next/image";
import logo from "../../../public/Pix3l_Wear.png";
import Link from "next/link";
import "../../app/globals.css";

export const Navbar = () => {
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/clothing">Clothing</Link>
          </li>
          <li>
            <Link href="/shipping">Shipping</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/register">SIGN IN</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
