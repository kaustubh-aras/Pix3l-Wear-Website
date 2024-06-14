"use client";

import Input from "@/components/input/Input";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

function Register() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="bg-black text-white flex flex-col items-center justify-center min-h-screen"
      style={{ fontFamily: "Klapt-Regular" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-center pb-3">
          <Image src="/Pix3l_Wear_2.png" width={150} height={100} />
        </div>
        <label className="text-xl ml-4 font-bold">Sign In</label>
        <div className="flex flex-col">
          <Input
            type="text"
            placeholder="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link href="/contact" className="ml-3">
            Forgot Password
          </Link>
          <button className="bg-white text-black m-3 p-3 rounded-2xl items-center justify-center">
            <h1 className="text-xl font-bold">Click ME</h1>
          </button>
          <div className="flex item-center justify-center gap-3">
            <span className="text-slate-300">Don't have an account?</span>
            <span>
              <Link href="/">Click here to create one</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
