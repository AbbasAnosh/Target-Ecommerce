import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

import loginImage from "../public/images/undraw_maker_launch_re_rq81.svg";

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {};
  return (
    <Layout>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="flex bg-primary rounded-2xl shadow-lg max-w-6xl p-5">
          <div className="md:w-1/2 text-secondary px-16">
            <h2 className="font-bold text-2xl">Login</h2>
            <p className="text-sm mt-4">
              If you already a member, easily log in
            </p>

            <form
              action=""
              className="flex flex-col gap-4 border-b pb-3"
              onSubmit={handleSubmit(submitHandler)}
            >
              <input
                className="p-2 mt-8 outline-none rounded-xl border"
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", {
                  required: "please enter email",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <span>
                {errors.email && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </span>
              <input
                className="p-2 mt-8 outline-none rounded-xl border"
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", {
                  required: "please enter password",
                  minLength: {
                    value: 6,
                    message: "password is more than 5 characters",
                  },
                })}
              />
              <span>
                {errors.password && (
                  <div className="text-red-500">{errors.password.message}</div>
                )}
              </span>
              <button className="bg-[#0f172a] rounded-xl py-2 text-white">
                Log in
              </button>
            </form>

            <div className="text-sm flex flex-col space-y-2 md:flex-row pt-5 justify-between items-center">
              <p>If you do not have an acount ...</p>
              <button className="py-2 px-5 bg-[#0f172a] border rounded-xl">
                Register
              </button>
            </div>
          </div>

          <div className="w-1/2 bg-slate-600 rounded-tr-2xl rounded-tl-2xl rounded-bl-lg rounded-br-lg md:block hidden">
            <Image src={loginImage} alt="login" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default login;
