import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* {Image} */}
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[product.colors[0]]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-all duration-300"
          ></Image>
        </div>
      </Link>
      {"Product Details"}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
      </div>
      {"PRODUCT TYPES"}
      <div className="flex items-center gap-4 text-xs">
        {"PRODUCT SIZES"}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Size</span>
          <select
            name="size"
            id="size"
            className="ring ring-gray-300 rounded-md px-2 py-1"
          >
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        {"COLORS"}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Color</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
