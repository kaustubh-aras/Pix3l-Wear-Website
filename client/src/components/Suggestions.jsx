import React from "react";
import { ProductCard } from "./ProductCard";

const Suggestions = () => {
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
    <div
      className="best-seller-section pt-10"
      style={{ fontFamily: "Klapt-Regular" }}
    >
      <div className="text-4xl text-white items-center my-8 mx-5">
        You might also like
      </div>
      <div className="bg-black flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 m-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
