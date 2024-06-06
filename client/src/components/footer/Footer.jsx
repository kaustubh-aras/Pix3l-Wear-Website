import Image from "next/image";
import React from "react";
import { promises as fs } from "fs";

export const Footer = async () => {
  const file = await fs.readFile(process.cwd() + "/essentials.json", "utf8");
  const data = JSON.parse(file);

  return (
    <footer
      className="bg-black flex p-8 justify-between items-center text-white"
      style={{ fontFamily: "Klapt-Medium" }}
    >
      <div className="flex items-center">
        <div>
          <Image
            src="/Pix3l_Wear.png"
            width={320}
            height={202}
            alt="Pix3lWear Logo"
          />
        </div>
        <div className="divide bg-white w-[1.5px] mx-8 h-20"></div>
        <div className="Info">
          <h2 className="pb-4 text-2xl">INFORMATION</h2>
          <ul className="list-none space-y-1">
            <li>
              <a href="/"> Blog</a>
            </li>
            <li>
              <a href="/"> Contact Us</a>
            </li>
            <li>
              <a href="/"> Shipping Policy</a>
            </li>
            <li>
              <a href="/"> Refund Policy</a>
            </li>
            <li>
              <a href="/"> Privacy Policy</a>
            </li>
            <li>
              <a href="/"> Terms of Service</a>
            </li>
            <li>
              <a href="/"> Billing Terms and Conditions</a>
            </li>
            <li>
              <a href="/"> Legal Notice</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="Info-2">
        <h2 className="pb-4 text-2xl">SIGN UP AND SAVE</h2>
        <p className="w-[350px]">{data.Subscribe_Message_Footer}</p>
        <div className="text-slate-400">
          <span>@2024 PIX3L WEAR</span>
        </div>
      </div>

      <div className="contact-us">
        <h2 className="pb-4 text-2xl">CONTACT US</h2>
        <div className="w-[350px]">
          <p>{data.Contact_us_date_time}</p>
          <p>{data.Contact_us_country}</p>
          <p>{data.Contact_us_phone}</p>
          <p>{data.Contact_us_email}</p>
        </div>
      </div>
    </footer>
  );
};
