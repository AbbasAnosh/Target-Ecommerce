import Head from "next/head";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { CartIcon, ProfileIcon } from "../pages/icons";
import { Store } from "../utils/Store";
import { ToastContainer } from "react-toastify";
import Banner from "./Banner";
import { useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const { status, data: session } = useSession();
  return (
    <>
      <Head>
        <title>Target.</title>
      </Head>

      <ToastContainer position="bottome-center" limit={1} />

      <div className="flex min-h-screen py-3 flex-col justify-between">
        <header className="">
          <nav className="flex h-12 items-center px-4 justify-between">
            <Link href="/">
              <a className="text-lg text-secondary font-bold">TARGET</a>
            </Link>

            <div className="flex space-x-3 text-[#E84545]">
              <Link href="/cart">
                <a className="p-2 relative inline-block">
                  <CartIcon />
                  {cartItemsCount > 0 && (
                    <span
                      className="absolute top-2 right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold
                     leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"
                    >
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === "loading" ? (
                "Loading"
              ) : session?.user ? (
                session.user.name
              ) : (
                <Link href="/login">
                  <a className="p-2">
                    <ProfileIcon />
                  </a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">
          {/* <Banner /> */}
          {children}
        </main>
        <footer className="flex h-10 text-secondary justify-center item-center">
          <p>Copyright &copy; 2022 Target.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
