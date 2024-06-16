import { ProductCard } from "@/components/ProductCard.jsx";
import { ProductInfo } from "../../components/ProductInfo.jsx";
import React from "react";
import { BestSellerSection } from "@/components/sections/bestseller/BestSellerSection.jsx";
import Suggestions from "@/components/Suggestions.jsx";

const shop = () => {
  return (
    <div>
      <ProductInfo />
      <Suggestions />
    </div>
  );
};
export default shop;
