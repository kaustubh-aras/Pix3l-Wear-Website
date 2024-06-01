import Image from "next/image";
import React from "react";
import { promises as fs } from "fs";

export const Footer = async () => {
  const file = await fs.readFile(process.cwd() + "/essentials.json", "utf8");
  const data = JSON.parse(file);

  return (
    <footer
      className="bg-black flex p-4"
      style={{ fontFamily: "Klapt-Medium" }}
    >
      <div className="flex-shrink-0 items-center justify-center">
        <Image
          src="/Pix3l_Wear.png"
          width={320}
          height={202}
          alt="Pix3lWear Logo"
        />
      </div>
      <div className="divide bg-white w-[1.5px] mx-4"></div>
      <div className="Info text-white ml-3">
        <h2 className="pb-2" style={{ fontSize: "24px" }}>
          INFORMATION
        </h2>
        <ul className="list-none space-y-1">
          <li style={{ fontSize: "14px" }}>Blog</li>
          <li style={{ fontSize: "14px" }}>Contact Us</li>
          <li style={{ fontSize: "14px" }}>Shipping Policy</li>
          <li style={{ fontSize: "14px" }}>Refund Policy</li>
          <li style={{ fontSize: "14px" }}>Privacy Policy</li>
          <li style={{ fontSize: "14px" }}>Terms of Service</li>
          <li style={{ fontSize: "14px" }}>Billing Terms and Conditions</li>
          <li style={{ fontSize: "14px" }}>Legal Notice</li>
        </ul>
      </div>

      <div className="Info-2 text-white mx-10 flex flex-end flex-col">
        <h2 className="pb-2" style={{ fontSize: "24px" }}>
          SIGN UP AND SAVE
        </h2>
        <p className="w-[350px] h-[100%]">{data.Subscribe_Message_Footer}</p>
        <div className="text-slate-400 flex">
          <span>@2024 PIX3L WEAR</span>
        </div>
      </div>

      <div className="contact-us text-white">
        <h2 className="pb-2" style={{ fontSize: "24px" }}>
          CONTACT US
        </h2>
        <p className="w-[350px]">{data.Contact_us_date_time}</p>
        <p className="w-[350px]">{data.Contact_us_country}</p>
        <p className="w-[350px]">{data.Contact_us_phone}</p>
        <p className="w-[350px]">{data.Contact_us_email}</p>
      </div>
    </footer>
  );
};
