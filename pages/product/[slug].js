import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product Not Found!</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative hover:scale-105 duration-300">
                <Image
                  src={product.image}
                  width={450}
                  height={630}
                  className="w-full rounded-[20px] object-contain relative z-10"
                  alt=""
                />
                {/* <div class="border-4 border-[#E84545] absolute top-10 bottom-10 left-10 right-10 z-0"></div> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10 space-y-2">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  {product.name}
                </h1>
                <p className="font-semibold uppercase text-xl flex gap-2">
                  Category:
                  <span className="text-gray-500 font-italic">
                    {product.category}
                  </span>
                </p>
                <p className="font-semibold uppercase text-xl flex gap-2">
                  Brand: <span className="text-gray-500">{product.brand}</span>
                </p>
                <p className="font-semibold uppercase  text-xl flex gap-2">
                  Review:{" "}
                  <span className="text-gray-500">
                    {product.rating} of {product.numReviews}
                  </span>
                </p>
                <p className="text-sm">
                  {product.description}
                  <a
                    href="#"
                    className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i class="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div className="flex items-center space-x-5 pb-4">
                <div className="inline-block align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    $
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    {product.price}
                  </span>
                </div>
                <div className="inline-block uppercase font-italic font-semibold">
                  {product.countInStock > 0 ? "In Stock" : "Unaviliable"}
                </div>
              </div>
              <div>
                <button className="bg-[#E84545] opacity-75 hover:opacity-100 text-white hover:text-gray-100 rounded-full px-10 py-2 font-semibold">
                  <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
