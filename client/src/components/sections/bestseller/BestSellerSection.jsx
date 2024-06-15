"use client";
import { ProductCard } from "../../ProductCard.jsx";
import React from "react";

export const BestSellerSection = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: 19.99,
      image: "/product.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: 29.99,
      image: "/product.png",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: 29.99,
      image: "/product.png",
    },
    {
      id: 4,
      name: "Product 4",
      description: "Description of Product 4",
      price: 29.99,
      image: "/product.png",
    },
    {
      id: 5,
      name: "Product 5",
      description: "Description of Product 5",
      price: 29.99,
      image: "/product.png",
    },
  ];

  return (
    <div className="best-seller-section" style={{ fontFamily: "Klapt-Regular" }}>
      <div className="flex items-center justify-center my-8">
        <hr className="flex-grow border-gray-300" />
        <span className="text-4xl mx-4 text-white">BEST SELLER</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div
        className="bg-black flex items-center justify-center"
        style={{ minHeight: "400px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
