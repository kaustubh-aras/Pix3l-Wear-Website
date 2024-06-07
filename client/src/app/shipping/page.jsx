import { ProductCard } from "@/components/ProductCard";
import React from "react";

const Shipping = () => {
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
    <div className="bg-[url('/gaming-background.png')] flex items-center justify-center bg-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 p-11">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shipping;
