export const ProductCard = ({ product }) => {
  return (
    <div
      style={{ fontFamily: "Klapt-Regular" }}
      className="max-w-sm roundedflex items-center justify-center flex-col"
    >
      <div className="bg-gray-500 flex items-center justify-center rounded-[40px]">
        <img src="/product.png" alt="Products" />
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
