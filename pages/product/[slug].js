import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import { Store } from "../../utils/Store";

export default function ProductScreen() {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((item) => item.slug === slug);
  if (!product) {
    return <div>Product Not Found!</div>;
  }

  const addToCartHandler = () => {
    const existedItem = state.cart.cartItems.find(
      (item) => item.slug === product.slug
    );
    const quantity = existedItem ? existedItem.quantity + 1 : 1;
    if (product.countInStock < quantity) {
      alert("Sorry, Product is out of stock!");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <Layout title={product.name}>
      <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-8 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-primary p-10 lg:p-16 mx-auto text-gray-800 relative md:text-left">
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
                <h1 className="font-bold text-secondary uppercase text-2xl mb-5">
                  {product.name}
                </h1>
                <p className="font-semibold text-secondary uppercase text-xl flex gap-2">
                  Category:
                  <span className="text-gray-500  font-italic">
                    {product.category}
                  </span>
                </p>
                <p className="font-semibold text-secondary uppercase text-xl flex gap-2">
                  Brand: <span className="text-gray-500">{product.brand}</span>
                </p>
                <p className="font-semibold text-secondary uppercase  text-xl flex gap-2">
                  Reviews:{" "}
                  <span className="text-gray-500">
                    {product.rating} of {product.numReviews}
                  </span>
                </p>
                <p className="text-sm text-secondary">
                  {product.description}
                  <a
                    href="#"
                    className="opacity-50 text-secondary hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
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
                  <span className="font-bold text-secondary text-3xl leading-none align-baseline">
                    ${product.price}
                  </span>
                </div>
                <div className="inline-block text-secondary uppercase font-italic font-semibold">
                  {product.countInStock > 0 ? "In Stock" : "Unaviliable"}
                </div>
              </div>
              <div>
                <button
                  className="bg-indigo-500 opacity-75 hover:opacity-100 text-white
                  hover:bg-indigo-600 rounded-full px-10 py-2 font-semibold"
                  onClick={addToCartHandler}
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
