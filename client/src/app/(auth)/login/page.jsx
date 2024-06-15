"use client";

import Input from "../../../components/input/Input.jsx"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

function Login() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  return (
    <div
      className="bg-black text-white flex flex-col items-center justify-center min-h-screen"
      style={{ fontFamily: "Klapt-Regular" }}
    >
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex items-center justify-center pb-3">
          <Image
            src="/Pix3l_Wear_2.png"
            alt="Pix3l Wear Logo"
            width={150}
            height={100}
          />
        </div>
        <label className="text-xl ml-4 font-bold mb-2">Sign In</label>
        <Input
          type="text"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          aria-label="Login"
        />
        <div className="relative w-full">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-label="Password"
            className="w-full pr-10"
          />
          <div
            className="absolute inset-y-0 right-5 pr-3 flex items-center justify-center cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
          </div>
        </div>
        <div>
          <button>
            <Link
              href="/forgotpassword"
              className="ml-3 text-blue-500 hover:underline"
            >
              Forgot Password
            </Link>
          </button>
        </div>
        <button className="bg-white text-black p-3 m-3 rounded-2xl hover:bg-slate-200">
          <span className="text-xl font-bold">Login</span>
        </button>
        <div className="flex items-center justify-center gap-3 mt-4">
          <span className="text-slate-300">Don&#39;t have an account?</span>
          <Link href="/register" className="text-blue-500 hover:underline">
            Click here to create one
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
