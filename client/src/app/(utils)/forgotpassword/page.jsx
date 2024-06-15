"use client";

import Input from "../../../components/input/Input.jsx"
import React, { useState } from "react";
import Image from "next/image";

function Login() {
  const [resetEmail, setResetEmail] = useState("");

  return (
    <div
      className="bg-black text-white flex flex-col items-center justify-center min-h-screen"
      style={{ fontFamily: "Klapt-Medium" }}
    >
      <form className="flex flex-col">
        <div className="flex items-center justify-center pb-3">
          <Image
            src="/Pix3l_Wear_2.png"
            alt="Pix3l Wear Logo"
            width={150}
            height={100}
          />
        </div>
        <Input
          type="email"
          placeholder="Enter Email"
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
        />

        <button className="bg-white text-black p-3 m-3 rounded-2xl hover:bg-slate-200">
          <span className="text-xl">Reset Password</span>
        </button>
      </form>
    </div>
  );
}

export default Login;
