/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AddToCart } from "../pages/icons";

const ProductItem = ({ product }) => {
  return (
    <div className="bg-primary shadow rounded overflow-hidden">
      <div className="hover:scale-105 duration-300">
        <Link href={`/product/${product.slug}`}>
          <a>
            <img src={product.image} alt={product.name} />
          </a>
        </Link>
      </div>
      <div className="px-4 py-6">
        <span className="text-gray-400 uppercase text-sm">{product.brand}</span>
        <p className="text-lg font-bold pt-2 tracking-wider text-secondary block truncate capitalize">
          {product.name}
        </p>
        <div className="flex items-center">
          <p className="text-lg font-semibold my-3 text-secondary">
            ${product.price}
          </p>
          <div className="ml-auto">
            <Link href="#">
              <a>
                <AddToCart />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
