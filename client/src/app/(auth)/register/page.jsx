import Image from "next/image";
import React from "react";

function Register() {
  return (
    <div className="bg-black text-white flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <Image src="/Pix3l_Wear.png" alt="logo" width={100} height={100} />
      </div>

      <label className="pt-7">CREATE ACCOUNT</label>
    </div>
  );
}

export default Register;
