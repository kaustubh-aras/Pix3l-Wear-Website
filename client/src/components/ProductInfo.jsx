import Image from "next/image";
import React from "react";
import Button from "./Button";

export const ProductInfo = () => {
  return (
    <div
      className="flex items-center justify-center flex-row gap-10"
      style={{ fontFamily: "Klapt-Regular" }}
    >
      <div>
        <Image
          src="/Vector.png"
          alt="Product Image"
          width={150}
          height={100}
          className="absolute left-16 top-36"
        />
        <Image
          src="/Vector.png"
          alt="Product Image"
          width={150}
          height={100}
          className="absolute right-16 top-36 scale-x-[-1]"
        />
      </div>
      <div className="bg-slate-400 rounded-3xl">
        <Image
          src="/product.png"
          alt="Product Image"
          width={250}
          height={250}
        />
      </div>
      <div className="flex flex-col text-white">
        <h2 className="text-3xl">Pix3l Anime Wear</h2>
        <h3 className="text-2xl">Red Cross V1</h3>
        <h3 className="text-xl">MPR: 800</h3>
        <h4 className="text-slate-300">Incl of taxes</h4>
        <div>
          <h3 className="mb-4 text-2xl">Select Size</h3>
          <div className="flex flex-wrap gap-2">
            {["US S", "US M", "US L", "US XL"].map((size) => (
              <Button key={size} title={size} />
            ))}
          </div>
        </div>
        <div className="max-w-md mx-auto">
          <h2 className="text-lg font-bold mb-2">Coming Soon</h2>
          <p className="text-base">
            Throwback anime style meets soft-cotton comfort in this roomy tee.
            Dropped shoulders and a loose fit through the body give our tee a
            relaxed and casual look, while soft, midweight cotton fabric has you
            feeling like an all-star.
          </p>
        </div>
      </div>
    </div>
  );
};
