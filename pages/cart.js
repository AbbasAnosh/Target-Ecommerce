/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useContext } from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/Store";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const cartDetails = () => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const updateCartHanldler = (item, qty) => {
    const quantity = Number(qty);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  return (
    <Layout>
      <div className="mx-auto mt-10">
        <div className="flex flex-col md:flex-row lg:flex-row shadow-md my-10">
          <div className="w-3/4 bg-primary px-10 py-10 rounded-lg">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl text-secondary">
                Shopping Cart
              </h1>
              <h2 className="font-semibold text-2xl text-secondary">
                {cartItems.reduce((a, c) => a + c.quantity, 0)} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-secondary text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold  text-gray-300 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold  text-gray-300 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold  text-gray-300 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {cartItems.map((item) => (
              <div
                className="flex items-center hover:bg-gray-600 -mx-8 px-6 py-5"
                key={item.slug}
              >
                <div className="flex w-2/5">
                  <div className="w-20">
                    <Link href={`/product/${item.slug}`}>
                      <img
                        className="h-24 rounded-lg"
                        src={item.image}
                        alt={item.name}
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-secondary text-sm">
                      {item.name}
                    </span>
                    <span className="text-red-500 text-xs">{item.brand}</span>
                    <a
                      className="font-semibold hover:text-indigo-600 text-gray-200 text-xs cursor-pointer"
                      onClick={() => removeItemHandler(item)}
                    >
                      Remove
                    </a>
                  </div>
                </div>
                <div className="flex text-secondary justify-center w-1/5">
                  <select
                    className="bg-primary"
                    value={item.quantity}
                    onChange={(e) => updateCartHanldler(item, e.target.value)}
                  >
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <span className="text-center text-secondary w-1/5 font-semibold text-sm">
                  ${item.price}
                </span>
                <span className="text-center text-secondary w-1/5 font-semibold text-sm">
                  ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </span>
              </div>
            ))}
            <Link href="/">
              <a className="flex font-semibold text-indigo-500 text-sm mt-10">
                <svg
                  className="fill-current mr-2 text-indigo-500 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </Link>
          </div>
          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl text-secondary border-b pb-8">
              Order Summary
            </h1>
            <div className="mt-8">
              <div className="flex text-secondary font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>
                  $ {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </span>
              </div>
              <button
                onClick={() => router.push("/shipping")}
                className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(cartDetails), { ssr: false });
