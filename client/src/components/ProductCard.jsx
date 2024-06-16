import Image from "next/image";

export const ProductCard = ({ product, onClick }) => {
  return (
    <div
      style={{ fontFamily: "Klapt-Regular" }}
      className="max-w-sm rounded flex items-center justify-center flex-col"
      onClick={onClick}
    >
      <div className="bg-gray-500 flex items-center justify-center rounded-[40px]">
        <Image src="/product.png" alt="Products" width={500} height={500} />
      </div>
      <div className="text-xl mt-2 text-white flex items-center justify-center">
        {product.name}
      </div>
      <div className="text-xl text-white flex items-center justify-center">
        {product.price}
      </div>
    </div>
  );
};
