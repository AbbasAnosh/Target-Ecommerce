import Head from "next/head";
import Link from "next/link";
import React from "react";
import { CartIcon, ProfileIcon } from "../pages/icons";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Target.</title>
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header className="">
          <nav className="flex h-12 items-center px-4 justify-between shadow-sm">
            <Link href="/">
              <a className="text-lg font-bold">TARGET</a>
            </Link>

            <div className="flex space-x-3 text-[#E84545]">
              <Link href="/cart">
                <a className="p-2">
                  <CartIcon />
                </a>
              </Link>
              <Link href="/login">
                <a className="p-2">
                  <ProfileIcon />
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center item-center shadow-inner">
          <p>Copyright &copy; 2022 Target.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
